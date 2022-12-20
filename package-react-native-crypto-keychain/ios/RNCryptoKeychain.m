//  RNCryptoKeychain.m
//  RNCryptoKeychain

#import <Security/Security.h>
#import "RNCryptoKeychain.h"
#import <React/RCTConvert.h>
#import <React/RCTBridge.h>
#import <React/RCTUtils.h>

#import <LocalAuthentication/LAContext.h>
#import <LocalAuthentication/LAError.h>
#import <UIKit/UIKit.h>

@implementation RNCryptoKeychain

@synthesize bridge = _bridge;
RCT_EXPORT_MODULE();

#pragma mark - RNCryptoKeychain

#define cSolarisTag @"solaris"
#define cBindingTag @"bind"
#define cOwner @"owner"
#define cAddress @"address"
#define cCoin @"coin"
#define cSeed @"seed"
#define cAuthenticationRequired @"Authentication is required"
#define kAuthenticatePrompt @"iosAuthenticationPrompt"
#define eAuthenticationCancelled @"Please confirm your biometrics."
#define eAuthenticationFailed @"Authentication failed."


#define allTrim( object ) [object stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet] ]

// Messages from the comments in <Security/SecBase.h>
NSString *messageForError(NSError *error)
{
  switch (error.code) {
    case errSecUnimplemented:
      return @"Function or operation not implemented.";
      
    case errSecIO:
      return @"I/O error.";
      
    case errSecOpWr:
      return @"File already open with with write permission.";
      
    case errSecParam:
      return @"One or more parameters passed to a function where not valid.";
      
    case errSecAllocate:
      return @"Failed to allocate memory.";
      
    case errSecUserCanceled:
      return @"User canceled the operation.";
      
    case errSecBadReq:
      return @"Bad parameter or invalid state for operation.";
      
    case errSecNotAvailable:
      return @"No keychain is available. You may need to restart your computer.";
      
    case errSecDuplicateItem:
      return @"The specified item already exists in the keychain.";
      
    case errSecItemNotFound:
      return @"The specified item could not be found in the keychain.";
      
    case errSecInteractionNotAllowed:
      return @"User interaction is not allowed.";
      
    case errSecDecode:
      return @"Unable to decode the provided data.";
      
    case errSecAuthFailed:
      return @"The user name or passphrase you entered is not correct.";
      
    case errSecMissingEntitlement:
      return @"Internal error when a required entitlement isn't present.";
      
    default:
      return error.localizedDescription;
  }
}

NSString *codeForError(NSError *error)
{
  return [NSString stringWithFormat:@"%li", (long)error.code];
}

void rejectWithError(RCTPromiseRejectBlock reject, NSError *error)
{
  return reject(codeForError(error), messageForError(error), nil);
}

- (NSData*) getAppTag:(NSString *)prefix
{
  NSString *bundleId = [[NSBundle mainBundle] bundleIdentifier];
  bundleId = [bundleId stringByAppendingFormat:@".%@", prefix];
  return [bundleId dataUsingEncoding:NSUTF8StringEncoding];
}

- (NSString*) isWalletDataValid:(NSDictionary *)data
{
  if ( [allTrim(data[cOwner]) length] == 0 ) {
    return @"Owner is required.";
  }
  if ( [allTrim(data[cAddress]) length] == 0 ) {
    return @"Address is required.";
  }
  if ( [allTrim(data[cCoin]) length] == 0 ) {
    return @"Coin is required.";
  }
  if ( [allTrim(data[cSeed]) length] == 0 ) {
    return @"Owner is required.";
  }
  
  return @"OK";
}

- (NSString*) convertToString:(NSDictionary *) data {
  NSError * err;
  NSData * jsonData = [NSJSONSerialization  dataWithJSONObject:data options:0 error:&err];
  return [[NSString alloc] initWithData:jsonData   encoding:NSUTF8StringEncoding];
}

- (NSDictionary*) convertToDictionary:(NSString *) stringData
{
  NSError * err;
  NSData *data =[stringData dataUsingEncoding:NSUTF8StringEncoding];
  if(data!=nil){
    return (NSDictionary *)[NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableContainers error:&err];
  }
  return nil;
}

// Public key methods
- (SecKeyRef) getPublicKeyRef:(NSData*) appTag
{
  NSDictionary *query = @{
    (id)kSecClass:               (id)kSecClassKey,
    (id)kSecAttrKeyClass:        (id)kSecAttrKeyClassPublic,
    (id)kSecAttrLabel:           @"publicKey",
    (id)kSecAttrApplicationTag:  (id)appTag,
    (id)kSecReturnRef:           (id)kCFBooleanTrue,
  };
  
  CFTypeRef resultTypeRef = NULL;
  OSStatus status = SecItemCopyMatching((__bridge CFDictionaryRef) query, &resultTypeRef);
  if (status == errSecSuccess)
    return (SecKeyRef)resultTypeRef;
  else if (status == errSecItemNotFound)
    return nil;
  else
    [NSException raise:@"Unexpected OSStatus" format:@"Status: %i", (int)status];
  return nil;
}

- (NSData *) getPublicKeyBits:(NSData*) appTag
{
  NSData *returnVal = nil;
  NSDictionary *query = @{
    (id)kSecClass:               (id)kSecClassKey,
    (id)kSecAttrKeyClass:        (id)kSecAttrKeyClassPublic,
    (id)kSecAttrLabel:           @"publicKey",
    (id)kSecAttrApplicationTag:  (id)appTag,
    (id)kSecReturnData:          (id)kCFBooleanTrue,
    (id)kSecReturnRef:           (id)kCFBooleanTrue,
  };
  
  SecKeyRef keyRef;
  OSStatus status = SecItemCopyMatching((__bridge CFDictionaryRef) query, (CFTypeRef *)&keyRef);
  if (status == errSecSuccess){
    returnVal = CFDictionaryGetValue((CFDictionaryRef)keyRef, kSecValueData);
  }
  return returnVal;
}

- (NSString *) getPublicKeyAsString:(NSData*) appTag
{
  NSString *returnVal = nil;
  NSData *publicKeyBits = [self getPublicKeyBits:appTag];
  if (publicKeyBits){
    returnVal = [[NSString alloc]initWithData:publicKeyBits encoding:NSASCIIStringEncoding];
  }
  return returnVal;
}

- (NSString*) getPublicKeyAsPEM:(NSData*) appTag
{
  const char asnHeader[] = {
    0x30, 0x59, 0x30, 0x13,
    0x06, 0x07, 0x2A, 0x86,
    0x48, 0xCE, 0x3D, 0x02,
    0x01, 0x06, 0x08, 0x2A,
    0x86, 0x48, 0xCE, 0x3D,
    0x03, 0x01, 0x07, 0x03,
    0x42, 0x00};
  NSData *asnHeaderData = [NSData dataWithBytes:asnHeader length:sizeof(asnHeader)];
  NSData *publicKeyBits = [self getPublicKeyBits:appTag];
  
  if (publicKeyBits == nil){
    return nil;
  }
  NSMutableData *payload;
  payload = [[NSMutableData alloc] init];
  [payload appendData:asnHeaderData];
  [payload appendData:publicKeyBits];
  
  NSData *immutablePEM = [NSData dataWithData:payload];
  NSString* base64EncodedString = [(NSData*)immutablePEM base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
  NSString* pemString = [NSString stringWithFormat:@"-----BEGIN PUBLIC KEY-----\n%@\n-----END PUBLIC KEY-----", base64EncodedString];
  return pemString;
}

- (void) saveDataToKeychain:(NSData*)appTag withLabel:(NSString *)label withData:(NSString *)data withSetACL:(bool)setAcl resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject
{
  CFErrorRef error = NULL;
  NSError *authError = nil;
  
  NSDictionary* attributes =
  @{
    (id)kSecClass:       (id)kSecClassGenericPassword,
    (id)kSecAttrService: (id)appTag,
    (id)kSecAttrAccount: [label dataUsingEncoding:NSUTF8StringEncoding],
    (id)kSecValueData:   [data dataUsingEncoding:NSUTF8StringEncoding],
  };
  
  NSMutableDictionary *mAttributes = attributes.mutableCopy;
  
  if (setAcl) {
    LAContext *context = [[LAContext alloc] init];
    BOOL canAuthenticateWithBiometry = [context canEvaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics error:&authError];
    if (authError || !canAuthenticateWithBiometry){
      return rejectWithError(reject, authError);
    }
    
    SecAccessControlRef sacRef = SecAccessControlCreateWithFlags(kCFAllocatorDefault, kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly, kSecAccessControlUserPresence, &error);
    if (error) {
      return rejectWithError(reject, (__bridge id)error);
    }
    mAttributes[(__bridge NSString *)kSecUseAuthenticationUI] = (__bridge id)kSecUseAuthenticationUIAllow;
    mAttributes[(__bridge NSString *)kSecAttrAccessControl] = (__bridge_transfer id)sacRef;
  } else {
    mAttributes[(__bridge NSString *)kSecAttrAccessible] = (__bridge id)kSecAttrAccessibleWhenUnlockedThisDeviceOnly;
  }
  
  
  
  attributes = [NSDictionary dictionaryWithDictionary:mAttributes];
  
  OSStatus status = SecItemAdd((CFDictionaryRef)attributes, nil);
  if ( status != errSecSuccess ){
    NSError *error = [NSError errorWithDomain:NSOSStatusErrorDomain code:status userInfo:nil];
    return rejectWithError(reject, error);
  }
  return resolve(@(YES));
}

- (void) getDataFromKeychain:(NSData *)appTag withLabel:(NSString *)label withSetACL:(bool)setAcl withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject
{
  NSString *returnVal = nil;
  NSDictionary *query = @{
    (id)kSecClass:            (id)kSecClassGenericPassword,
    (id)kSecAttrService:      (id)appTag,
    (id)kSecAttrAccount:      label,
    (id)kSecReturnAttributes: (id)kCFBooleanTrue,
    (id)kSecReturnData:       (id)kCFBooleanTrue,
    (id)kSecMatchLimit:       (id)kSecMatchLimitOne,
  };
  
  
  NSMutableDictionary *mAttributes = query.mutableCopy;
  
  if (setAcl) {
    NSString *authMessage = nil;
    
    if (options && options[kAuthenticatePrompt]){
      authMessage = options[kAuthenticatePrompt];
    }
    mAttributes[(__bridge NSString *)kSecUseOperationPrompt] = authMessage;
  }
  
  query = [NSDictionary dictionaryWithDictionary:mAttributes];
  
  CFTypeRef itemRef;
  OSStatus status = SecItemCopyMatching((__bridge CFDictionaryRef) query, (CFTypeRef *)&itemRef);
  if (status == errSecSuccess){
    NSData *value = CFDictionaryGetValue((CFDictionaryRef)itemRef, kSecValueData);
    returnVal = [[NSString alloc] initWithData:value encoding:NSUTF8StringEncoding];
    if (setAcl) {
      return resolve([self convertToDictionary:returnVal]);
    }
    
    return resolve(@{
      @"key": label,
      @"value": returnVal
    });
  } else if (status == errSecUserCanceled) {
    reject(@"biometric_error", eAuthenticationCancelled, nil);
  } else {
    return resolve(nil);
  }
}

- (bool) updateDataFromKeychain:(NSData*) appTag withLabel:(NSString *)label withNewValue:(NSString *)newValue
{
  NSDictionary* attributes =
  @{
    (id)kSecClass:       (id)kSecClassGenericPassword,
    (id)kSecAttrService: (id)appTag,
    (id)kSecAttrAccount: label,
  };
  
  NSDictionary* updateData =
  @{
    (id)kSecValueData:   [newValue dataUsingEncoding:NSUTF8StringEncoding],
  };
  
  
  OSStatus status = SecItemUpdate((CFDictionaryRef) attributes, (CFDictionaryRef)updateData);
  return (status == errSecSuccess);
}

- (bool) deleteDataFromKeychain:(NSData*) appTag withLabel:(NSString *)label
{
  NSDictionary* attributes =
  @{
    (id)kSecClass:            (id)kSecClassGenericPassword,
    (id)kSecAttrService:      (id)appTag,
    (id)kSecAttrAccount:      label,
    (id)kSecReturnAttributes: (id)kCFBooleanTrue,
    (id)kSecReturnData:       (id)kCFBooleanFalse
  };
  
  OSStatus status = SecItemDelete((CFDictionaryRef) attributes);
  while (status == errSecDuplicateItem)
  {
    status = SecItemDelete((CFDictionaryRef)attributes);
  }
  return (status == errSecSuccess);
}

- (bool) savePublicKeyFromRef:(SecKeyRef)publicKeyRef withAppTag:(NSData*) appTag
{
  NSDictionary* attributes =
  @{
    (id)kSecClass:              (id)kSecClassKey,
    (id)kSecAttrKeyClass:       (id)kSecAttrKeyClassPublic,
    (id)kSecAttrLabel:          @"publicKey",
    (id)kSecAttrApplicationTag: (id)appTag,
    (id)kSecValueRef:           (__bridge id)publicKeyRef,
    (id)kSecAttrIsPermanent:    (id)kCFBooleanTrue,
  };
  
  OSStatus status = SecItemAdd((CFDictionaryRef)attributes, nil);
  while (status == errSecDuplicateItem)
  {
    status = SecItemDelete((CFDictionaryRef)attributes);
  }
  status = SecItemAdd((CFDictionaryRef)attributes, nil);
  
  return true;
}

- (bool) deletePublicKey:(NSData*) appTag
{
  NSDictionary *query = @{
    (id)kSecClass:               (id)kSecClassKey,
    (id)kSecAttrKeyClass:        (id)kSecAttrKeyClassPublic,
    (id)kSecAttrLabel:           @"publicKey",
    (id)kSecAttrApplicationTag:  (id)appTag,
  };
  OSStatus status = SecItemDelete((CFDictionaryRef) query);
  while (status == errSecDuplicateItem)
  {
    status = SecItemDelete((CFDictionaryRef) query);
  }
  return true;
}

// Private key methods
- (SecKeyRef) getPrivateKeyRef:(NSData*)appTag withMessage:(NSString *)authPromptMessage
{
  NSString *authenticationPrompt = @"Authenticate to retrieve secret";
  if (authPromptMessage) {
    authenticationPrompt = authPromptMessage;
  }
  NSDictionary *query = @{
    (id)kSecClass:               (id)kSecClassKey,
    (id)kSecAttrKeyClass:        (id)kSecAttrKeyClassPrivate,
    (id)kSecAttrLabel:           @"privateKey",
    (id)kSecAttrApplicationTag:  (id)appTag,
    (id)kSecReturnRef:           (id)kCFBooleanTrue,
    (id)kSecUseOperationPrompt:  authenticationPrompt,
  };
  
  CFTypeRef resultTypeRef = NULL;
  OSStatus status = SecItemCopyMatching((__bridge CFDictionaryRef) query,  (CFTypeRef *)&resultTypeRef);
  if (status == errSecSuccess)
    return (SecKeyRef)resultTypeRef;
  else if (status == errSecItemNotFound)
    return nil;
  else
    [NSException raise:@"Unexpected OSStatus" format:@"Status: %i", (int)status];
  return nil;
}

- (bool) deletePrivateKey:(NSData*) appTag
{
  NSDictionary *query = @{
    (id)kSecClass:               (id)kSecClassKey,
    (id)kSecAttrKeyClass:        (id)kSecAttrKeyClassPrivate,
    (id)kSecAttrLabel:           @"privateKey",
    (id)kSecAttrApplicationTag:  (id)appTag,
  };
  OSStatus status = SecItemDelete((CFDictionaryRef) query);
  while (status == errSecDuplicateItem)
  {
    status = SecItemDelete((CFDictionaryRef) query);
  }
  return true;
}

- (bool) generateKeyPairInSecureEnclave:(NSData*) appTag
{
  CFErrorRef error = NULL;
  // https://developer.apple.com/documentation/security/keychain_services/keychain_items/item_attribute_keys_and_values?language=objc
  SecAccessControlRef acRef = SecAccessControlCreateWithFlags(kCFAllocatorDefault, kSecAttrAccessibleWhenUnlocked, kSecAccessControlPrivateKeyUsage, &error);
  
  if (!acRef) {
    NSError *errorMsg = [NSError errorWithDomain:@"Access control couldn't created." code:1711 userInfo:nil];
    NSLog(@"[[VARNASSE] -> %@ ]", errorMsg);
    return false;
  }
  
  // Key-pair attributes -- We don't need to store public key in enclave, we'll store it in keychain
  NSDictionary* attributes =
  @{ (id)kSecAttrKeyType:        (id)kSecAttrKeyTypeECSECPrimeRandom,
     (id)kSecAttrTokenID:        (id)kSecAttrTokenIDSecureEnclave,
     (id)kSecAttrKeySizeInBits:  @256,
     (id)kSecPrivateKeyAttrs:
       @{
         (id)kSecAttrLabel:          @"privateKey",
         (id)kSecAttrApplicationTag: appTag,
         (id)kSecAttrIsPermanent:    (id)kCFBooleanTrue,
         (id)kSecAttrAccessControl:  (__bridge id)acRef },
     (id)kSecPublicKeyAttrs:
       @{
         (id)kSecAttrIsPermanent:    (id)kCFBooleanFalse,
       },
  };
  
  SecKeyRef privateKeyRef = SecKeyCreateRandomKey((__bridge CFDictionaryRef)attributes, &error);
  if (!privateKeyRef){
    NSError *errorMsg = [NSError errorWithDomain:@"Private key couldn't created." code:1712 userInfo:nil];
    NSLog(@"[[VARNASSE] -> %@ ]", errorMsg);
    return false;
  }
  SecKeyRef publicKeyRef = SecKeyCopyPublicKey(privateKeyRef);
  
  return [self savePublicKeyFromRef:publicKeyRef withAppTag:appTag];
}

- (void) getWalletFromKeychain:(NSString *)owner withAddress:(NSString *)address withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject
{
  NSData* appTag = [self getAppTag:owner];
  [self getDataFromKeychain:appTag withLabel:address withSetACL:true withOptions:options resolver:resolve rejecter:reject];
}

- (bool) isDeviceSecure{
  NSError *aerr = nil;
  LAContext *context = [[LAContext alloc] init];
  BOOL canBeProtected = [context canEvaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics error:&aerr];
  
  // has enrolled biometry
  if (!aerr && canBeProtected) {
    return true;
  }
  
  canBeProtected = [context canEvaluatePolicy:LAPolicyDeviceOwnerAuthentication error:&aerr];
  // has passcode
  if (!aerr && canBeProtected) {
    return true;
  }
  
  return false;
}

- (NSString *)getBiometryID
{
  NSError *aerr = nil;
  LAContext *context = [[LAContext alloc] init];
  BOOL canBeProtected = [context canEvaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics error:&aerr];
  
  if (aerr || !canBeProtected) {
    return @"ERROR";
  }
  
  if (@available(iOS 11, *)) {
    if (context.biometryType == LABiometryTypeFaceID) {
      return @"FaceID";
    }
    else if (context.biometryType == LABiometryTypeTouchID) {
      return @"TouchID";
    }
    else if (context.biometryType == LABiometryNone) {
      return @"NONE";
    }
  }
  
  return @"TouchID";
}

// createKeyPair
- (void) createKeyPair:(NSData *)appTag withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject
{
  NSString *authMessage = nil;
  
  if (options && options[kAuthenticatePrompt]){
    authMessage = options[kAuthenticatePrompt];
  }
  
  // Delete key references if it came with restore
  [self deletePublicKey:appTag];
  [self deletePrivateKey:appTag];
  
  SecKeyRef privateKeyRef = [self getPrivateKeyRef:appTag withMessage:authMessage];
  if (privateKeyRef == nil) {
    BOOL isKeyPairGenerated = [self generateKeyPairInSecureEnclave:appTag];
    if (!isKeyPairGenerated) {
      NSError *error = [NSError errorWithDomain:@"Key pair not generated" code:1713 userInfo:nil];
      return rejectWithError(reject, (id)error);
    }
  }
  
  if (privateKeyRef) {CFRelease(privateKeyRef);}
  
  NSString *pkeyString = [self getPublicKeyAsPEM:appTag];
  return resolve(pkeyString);
}

// signData
- (void) signData:(NSData *)appTag withPlainText:(NSString *)plainText withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject
{
  NSError *error = nil;
  NSData *incomingData = [plainText dataUsingEncoding:NSUTF8StringEncoding];
  NSString *authMessage = nil;
  
  if (options && options[kAuthenticatePrompt]){
    authMessage = options[kAuthenticatePrompt];
  }
  
  SecKeyRef privateKeyRef = [self getPrivateKeyRef:appTag withMessage:authMessage];
  
  if (privateKeyRef == nil){
    error = [NSError errorWithDomain:@"Private key not found" code:1718 userInfo:nil];
    return rejectWithError(reject, error);
  }
  
  bool canSign = SecKeyIsAlgorithmSupported(privateKeyRef, kSecKeyOperationTypeSign, kSecKeyAlgorithmECDSASignatureMessageX962SHA256);
  
  if (!canSign){
    error = [NSError errorWithDomain:@"The private key cannot sign" code:1719 userInfo:nil];
    return rejectWithError(reject, error);
  }
  
  CFErrorRef errorRef = NULL;
  NSData *signatureBytes = nil;
  
  signatureBytes = (NSData*)CFBridgingRelease(
                                              SecKeyCreateSignature(
                                                                    privateKeyRef,
                                                                    kSecKeyAlgorithmECDSASignatureMessageX962SHA256,
                                                                    (CFDataRef)incomingData,
                                                                    &errorRef)
                                              );
  
  if (privateKeyRef) {CFRelease(privateKeyRef);}
  if (errorRef) {
    CFRelease(errorRef);
    // This will throw when user delete the biometry and passcode on the device and re-set
    error = [NSError errorWithDomain:@"Unable to sign digest." code:1730 userInfo:nil];
    return rejectWithError(reject, error);
  }
  
  if (signatureBytes == nil){
    error = [NSError errorWithDomain:@"The data not signed" code:1731 userInfo:nil];
    return rejectWithError(reject, error);
  }
  
  NSString *signatureText = [signatureBytes base64EncodedStringWithOptions:0];
  return resolve(signatureText);
}

// verifySignature
- (void) verifySignature:(NSData *)appTag withSignedText:(NSString *)signedText withSignature:(NSString *)signature withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject
{
  NSError *error = nil;
  NSData *signatureData = [[NSData alloc] initWithBase64EncodedString:signature options:0];
  NSData *signedData = [signedText dataUsingEncoding:NSUTF8StringEncoding];
  
  SecKeyRef publicKeyRef = [self getPublicKeyRef:appTag];
  
  if (publicKeyRef == nil){
    error = [NSError errorWithDomain:@"Public key not found" code:1733 userInfo:nil];
    return rejectWithError(reject, error);
  }
  
  bool canVerify = SecKeyIsAlgorithmSupported(publicKeyRef, kSecKeyOperationTypeVerify, kSecKeyAlgorithmECDSASignatureMessageX962SHA256);
  if (!canVerify){
    error = [NSError errorWithDomain:@"The public key cannot verify" code:1734 userInfo:nil];
    return rejectWithError(reject, error);
  }
  
  CFErrorRef errorRef = NULL;
  bool isVerified = SecKeyVerifySignature(publicKeyRef,
                                          kSecKeyAlgorithmECDSASignatureMessageX962SHA256,
                                          (CFDataRef)signedData,
                                          (CFDataRef)signatureData,
                                          &errorRef);
  if (publicKeyRef) {CFRelease(publicKeyRef);}
  if (errorRef) {CFRelease(errorRef);}
  return resolve(isVerified ? @(YES) : @(NO));
}


// React-Native methods
#if TARGET_OS_IOS

// BITWALA DEVICE BINDING OPERATIONS - ASYMMETRIC KEY
// ______________________________________________

// createPairingKeys
RCT_EXPORT_METHOD(createPairingKeys:(NSString *)owner withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *keyTag = [cBindingTag stringByAppendingFormat:@".%@", owner];
  NSData* appTag = [self getAppTag:keyTag];
  [self createKeyPair:appTag withOptions:options resolver:resolve rejecter:reject];
}

// deletePairingKeys
RCT_EXPORT_METHOD(deletePairingKeys:(NSString *)owner withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *keyTag = [cBindingTag stringByAppendingFormat:@".%@", owner];
  NSData* appTag = [self getAppTag:keyTag];
  [self deletePublicKey:appTag];
  [self deletePrivateKey:appTag];
  
  return resolve(@(YES));
}

// getPairingPublicKey
RCT_EXPORT_METHOD(getPairingPublicKey:(NSString *)owner withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *keyTag = [cBindingTag stringByAppendingFormat:@".%@", owner];
  NSData* appTag = [self getAppTag:keyTag];
  NSString *pkeyString = [self getPublicKeyAsPEM:appTag];
  
  if (pkeyString == nil) {
    NSError *error = [NSError errorWithDomain:@"There is no public key." code:1751 userInfo:nil];
    return rejectWithError(reject, (id)error);
  }
  return resolve(pkeyString);
}

// signWithPairingKey
RCT_EXPORT_METHOD(signWithPairingKey:(NSString *)owner withPlainText:(NSString *)plainText withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *keyTag = [cBindingTag stringByAppendingFormat:@".%@", owner];
  NSData* appTag = [self getAppTag:keyTag];
  [self signData:appTag withPlainText:plainText withOptions:options resolver:resolve rejecter:reject];
}

// verifyWithPairingKey
RCT_EXPORT_METHOD(verifyWithPairingKey:(NSString *)owner withOptions:(NSString *)signedText withSignature:(NSString *)signature withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *keyTag = [cBindingTag stringByAppendingFormat:@".%@", owner];
  NSData* appTag = [self getAppTag:keyTag];
  [self verifySignature:appTag withSignedText:signedText withSignature:signature withOptions:options resolver:resolve rejecter:reject];
}

// hasPairingKeys
RCT_EXPORT_METHOD(hasPairingKeys:(NSString *)owner withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  // @TODO Remove migration part later
  /* Migration - Remove old binding key pair if exists */
  NSData* appTag = [self getAppTag:@"device.bind"];
  [self deletePublicKey:appTag];
  [self deletePrivateKey:appTag];
  /* End of migration */
  
  NSString *keyTag = [cBindingTag stringByAppendingFormat:@".%@", owner];
  appTag = [self getAppTag:keyTag];
  SecKeyRef publicKeyRef = [self getPublicKeyRef:appTag];
  SecKeyRef privateKeyRef = [self getPrivateKeyRef:appTag withMessage:nil];
  BOOL hasKeys = privateKeyRef != nil && publicKeyRef != nil;
  
  if (privateKeyRef) {CFRelease(privateKeyRef);}
  if (publicKeyRef) {CFRelease(publicKeyRef);}
  
  return resolve(hasKeys ? @(YES) : @(NO));
}

// isPairingKeyInSecureHW
RCT_EXPORT_METHOD(isPairingKeyInSecureHW:(NSString *)owner withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  // In iOS it's always in secure enclave - this just dummy method for compatibility with Android
  return resolve(@(YES));
}

// SOLARIS DEVICE BINDING OPERATIONS - ASYMMETRIC KEY
// ______________________________________________

// createSolarisKeys
RCT_EXPORT_METHOD(createSolarisKeys:(NSString *)owner withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *keyTag = [cSolarisTag stringByAppendingFormat:@".%@", owner];
  NSData* appTag = [self getAppTag:keyTag];
  [self createKeyPair:appTag withOptions:options resolver:resolve rejecter:reject];
}

// deleteSolarisKeys
RCT_EXPORT_METHOD(deleteSolarisKeys:(NSString *)owner withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *keyTag = [cSolarisTag stringByAppendingFormat:@".%@", owner];
  NSData* appTag = [self getAppTag:keyTag];
  [self deletePublicKey:appTag];
  [self deletePrivateKey:appTag];
  
  return resolve(@(YES));
}

// getSolarisPublicKey
RCT_EXPORT_METHOD(getSolarisPublicKey:(NSString *)owner withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *keyTag = [cSolarisTag stringByAppendingFormat:@".%@", owner];
  NSData* appTag = [self getAppTag:keyTag];
  NSString *pkeyString = [self getPublicKeyAsPEM:appTag];
  
  if (pkeyString == nil) {
    NSError *error = [NSError errorWithDomain:@"There is no public key." code:1751 userInfo:nil];
    return rejectWithError(reject, (id)error);
  }
  return resolve(pkeyString);
}

// signWithSolarisKey
RCT_EXPORT_METHOD(signWithSolarisKey:(NSString *)owner withPlainText:(NSString *)plainText withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *keyTag = [cSolarisTag stringByAppendingFormat:@".%@", owner];
  NSData* appTag = [self getAppTag:keyTag];
  [self signData:appTag withPlainText:plainText withOptions:options resolver:resolve rejecter:reject];
}

// hasSolarisKeys
RCT_EXPORT_METHOD(hasSolarisKeys:(NSString *)owner withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *keyTag = [cSolarisTag stringByAppendingFormat:@".%@", owner];
  NSData* appTag = [self getAppTag:keyTag];
  SecKeyRef publicKeyRef = [self getPublicKeyRef:appTag];
  SecKeyRef privateKeyRef = [self getPrivateKeyRef:appTag withMessage:nil];
  BOOL hasKeys = privateKeyRef != nil && publicKeyRef != nil;
  
  if (privateKeyRef) {CFRelease(privateKeyRef);}
  if (publicKeyRef) {CFRelease(publicKeyRef);}
  
  return resolve(hasKeys ? @(YES) : @(NO));
}

// isSolarisKeyInSecureHW
RCT_EXPORT_METHOD(isSolarisKeyInSecureHW:(NSString *)owner withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  // In iOS it's always in secure enclave - this just dummy method for compatibility with Android
  return resolve(@(YES));
}


// WALLET OPERATIONS - SYMMETRIC KEY
// ______________________________________________
// saveWalletData
RCT_EXPORT_METHOD(saveWalletData:(NSDictionary *)data withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *dataValidationResult = [self isWalletDataValid:data];
  if (![dataValidationResult  isEqual: @"OK"] ) {
    NSError *errorMsg = [NSError errorWithDomain:dataValidationResult code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  
  NSData* appTag = [self getAppTag:data[cOwner]];
  
  dispatch_async(dispatch_get_global_queue( DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    NSString *authMessage = cAuthenticationRequired;
    if (options && options[kAuthenticatePrompt]){
      authMessage = options[kAuthenticatePrompt];
    }
    
    LAContext *context = [[LAContext alloc] init];
    context.localizedFallbackTitle = @"";
    
    [context evaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics localizedReason:authMessage reply:^(BOOL success, NSError *biometricError) {
      if (success) {
        [self saveDataToKeychain:appTag withLabel:data[cAddress] withData:[self convertToString:data] withSetACL:true resolver:resolve rejecter:reject];
      } else if (biometricError.code == LAErrorUserCancel) {
        reject(@"biometric_error", eAuthenticationCancelled, nil);
      } else {
        reject(@"biometric_error", eAuthenticationFailed, nil);
      }
    }];
  });
  
}

// getWalletData
RCT_EXPORT_METHOD(getWalletData:(NSString *)owner withAddress:(NSString*)address withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  if ([allTrim(owner) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Owner is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  if ([allTrim(address) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Address is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  [self getWalletFromKeychain:owner withAddress:address withOptions:options resolver:resolve rejecter:reject];
}

// isWalletKeyInSecureHW
RCT_EXPORT_METHOD(isWalletKeyInSecureHW:(NSString *)address withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  // In iOS it's always in secure enclave - this just dummy method for compatibility with Android
  return resolve(@(YES));
}

// deleteWalletData
RCT_EXPORT_METHOD(deleteWalletData:(NSString *)owner withAddress:(NSString*)address withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  if ([allTrim(owner) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Owner is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  if ([allTrim(address) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Address is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  
  NSData* appTag = [self getAppTag:owner];
  BOOL deleteResult = [self deleteDataFromKeychain:appTag withLabel:address];
  return resolve(deleteResult ? @(YES) : @(NO));
}


// KEYCHAIN
// ______________________________________________
// saveToKeychain
RCT_EXPORT_METHOD(saveToKeychain:(NSString *)uniqueLabel withData:(NSString *)keyName withValue:(NSString *)value withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  if ([allTrim(uniqueLabel) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Unique label is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  if ([allTrim(keyName) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Key is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  if ([allTrim(value) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Value is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  NSData* appTag = [self getAppTag:uniqueLabel];
  [self saveDataToKeychain:appTag withLabel:keyName withData:value withSetACL:false resolver:resolve rejecter:reject];
}

// updateKeychain
RCT_EXPORT_METHOD(updateKeychain:(NSString *)label withData:(NSString *)data withValue:(NSString *)value withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  if ([allTrim(label) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Unique label is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  if ([allTrim(data) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Key is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  if ([allTrim(value) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Value is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  NSData* appTag = [self getAppTag:label];
  BOOL updateResult = [self updateDataFromKeychain:appTag withLabel:data withNewValue: value];
  return resolve(updateResult ? @(YES) : @(NO));
}

// getFromKeychain
RCT_EXPORT_METHOD(getFromKeychain:(NSString *)label withData:(NSString *)data withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  if ([allTrim(label) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Unique label is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  if ([allTrim(data) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Key is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  NSData* appTag = [self getAppTag:label];
  [self getDataFromKeychain:appTag withLabel:data withSetACL:false withOptions:options resolver:resolve rejecter:reject];
}

// deleteFromKeychain
RCT_EXPORT_METHOD(deleteFromKeychain:(NSString *)label withData:(NSString *)data withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  if ([allTrim(label) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Unique label is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  if ([allTrim(data) length] == 0) {
    NSError *errorMsg = [NSError errorWithDomain:@"Key is required" code:1701 userInfo:nil];
    return rejectWithError(reject, errorMsg);
  }
  NSData* appTag = [self getAppTag:label];
  BOOL deleteResult = [self deleteDataFromKeychain:appTag withLabel:data];
  return resolve(deleteResult ? @(YES) : @(NO));
}

// HELPERS
// ______________________________________________
RCT_EXPORT_METHOD(isBiometryEnrolled:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *aerr = nil;
  LAContext *context = [[LAContext alloc] init];
  BOOL canBeProtected = [context canEvaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics error:&aerr];
  
  if (!aerr && canBeProtected) {
    return resolve(@(YES));
  }
  
  return resolve(@(NO));
}

RCT_EXPORT_METHOD(isDeviceSecure:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  bool isSecure = [self isDeviceSecure];
  if (isSecure) {
    return resolve(@(YES));
  }
  
  return resolve(@(NO));
}

RCT_EXPORT_METHOD(isDeviceSupported:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  // We support min iPhone5S and Secure Hardware came with iPhone5S, so this is always true for iOS
  return resolve(@(YES));
}

RCT_EXPORT_METHOD(getBiometryType:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *biometryType = [self getBiometryID];
  return resolve(biometryType);
}

RCT_EXPORT_METHOD(authenticateWithBiometry:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  dispatch_async(dispatch_get_global_queue( DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    NSString *authMessage = cAuthenticationRequired;
    if (options && options[kAuthenticatePrompt]){
      authMessage = options[kAuthenticatePrompt];
    }
    
    LAContext *context = [[LAContext alloc] init];
    context.localizedFallbackTitle = @"";
    
    [context evaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics localizedReason:authMessage reply:^(BOOL success, NSError *biometricError) {
      if (success) {
        resolve(@(YES));
      } else if (biometricError.code == LAErrorUserCancel) {
        resolve(@(NO));
      } else {
        reject(@"biometric_error", biometricError.localizedDescription, nil);
      }
    }];
  });
}

#endif

@end
