package com.varnasse.cryptokeychain;

import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Signature;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.GCMParameterSpec;

import android.database.Cursor;
import android.util.Base64;
import android.util.Log;


import androidx.annotation.NonNull;
import androidx.biometric.BiometricPrompt;
import androidx.fragment.app.FragmentActivity;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.module.annotations.ReactModule;

import static com.varnasse.cryptokeychain.Constants.*;
import static com.varnasse.cryptokeychain.ErrorMessages.*;
import static java.nio.charset.StandardCharsets.UTF_8;

@ReactModule(name = CryptoKeychainModule.NAME)
public class CryptoKeychainModule extends ReactContextBaseJavaModule {
    public static final String NAME = "RNCryptoKeychain";
    private String BUNDLE_ID = null;
    private VarnasseStorage varnasse = null;
    private BiometricPrompt biometricPrompt;
    private BiometricPrompt.AuthenticationCallback authCallback;

    private String getAppTag(String prefix) throws Error {
        if (prefix == null || prefix.isEmpty()) {
            throw new Error(E_TAG_PREFIX_REQUIRED);
        }
        return BUNDLE_ID.concat(".").concat(prefix);
    }

    private String getBindingTag(String owner) {
        return getAppTag(BINDING_TAG.concat(".").concat(owner));
    }

    private String getSolarisBindingTag(String owner) {
        return getAppTag(SOLARIS_BINDING_TAG.concat(".").concat(owner));
    }

    private void connectToDb() {
        if (varnasse == null) {
            varnasse = new VarnasseStorage(getReactApplicationContext());
        }
        varnasse.ensureDB();
    }

    private void closeDB() {
        if (varnasse == null) {
            return;
        }
        varnasse.closeDB();
    }

    public CryptoKeychainModule(ReactApplicationContext reactContext) {
        super(reactContext);
        BUNDLE_ID = reactContext.getPackageName();
        connectToDb();
    }

    @Override
    public void initialize() {
    }

    @Override
    public void onCatalystInstanceDestroy() {
    }

    @Override
    public String getName() {
        return NAME;
    }

    protected BiometricPrompt.PromptInfo createPromptInfo(ReadableMap options, boolean confirmationRequired) {
        String title = options.hasKey("androidBiometryTitle") ? options.getString("androidBiometryTitle") : BIOMETRY_TITLE;
        String subTitle = options.hasKey("androidBiometrySubTitle") ? options.getString("androidBiometrySubTitle") : BIOMETRY_SUBTITLE;
        String description = options.hasKey("androidBiometryDescription") ? options.getString("androidBiometryDescription") : BIOMETRY_DESCRIPTION;
        String cancel = options.hasKey("androidBiometryCancel") ? options.getString("androidBiometryCancel") : BIOMETRY_CANCEL;

        return new BiometricPrompt.PromptInfo.Builder()
                .setTitle(title)
                .setSubtitle(subTitle)
                .setDescription(description)
                .setNegativeButtonText(cancel)
                .setDeviceCredentialAllowed(false)
                .setConfirmationRequired(confirmationRequired)
                .build();
    }

    protected void authenticateUser(ReadableMap options, BiometricPrompt.CryptoObject cryptoObject) {
        UiThreadUtil.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    Executor executor = Executors.newSingleThreadExecutor();
                    FragmentActivity activity = (FragmentActivity) getReactApplicationContext().getCurrentActivity();
                    BiometricPrompt.PromptInfo promptInfo = createPromptInfo(options, true);

                    biometricPrompt = new BiometricPrompt(activity, executor, authCallback);
                    biometricPrompt.authenticate(promptInfo, cryptoObject);
                } catch (Exception e) {
                    Log.e(RN_MODULE, e.getMessage());
                }
            }
        });
    }

    protected void authenticateUser(ReadableMap options) {
        UiThreadUtil.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    Executor executor = Executors.newSingleThreadExecutor();
                    FragmentActivity activity = (FragmentActivity) getReactApplicationContext().getCurrentActivity();
                    BiometricPrompt.PromptInfo promptInfo = createPromptInfo(options, false);
                    biometricPrompt = new BiometricPrompt(activity, executor, authCallback);
                    biometricPrompt.authenticate(promptInfo);
                } catch (Exception e) {
                    Log.e(RN_MODULE, e.getMessage());
                }
            }
        });
    }


    protected void createKey(String keyTag, ReadableMap options, final Promise promise) {
        try {
            ReactApplicationContext context = getReactApplicationContext();
            Helpers.checkPreconditions(context);

            if (keyTag.length() > 239) {
                throw new Exception(E_KEY_LENGHT_IS_TOO_BIG);
            }
            PublicKey publicKey = Helpers.generateECDSA(keyTag, false, false);
            String pemString = Helpers.convertToPEM(publicKey);
            promise.resolve(pemString);
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_ECDSA_KEY_GENETARTION.concat(" - ").concat(e.getMessage()));
        }
    }

    protected void deleteKey(String keyTag, ReadableMap options, final Promise promise) {
        try {
            KeyStore keyStore = Helpers.getKeyStore();
            keyStore.deleteEntry(keyTag);

            promise.resolve(true);
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_ECDSA_KEY_DELETION.concat(" - ").concat(e.getMessage()));
        }
    }

    protected void getPublicKey(String keyTag, ReadableMap options, final Promise promise) {
        try {
            PublicKey publicKey = Helpers.getPublicKey(keyTag);
            if (publicKey == null) {
                promise.resolve(null);
            }

            String pemString = Helpers.convertToPEM(publicKey);
            promise.resolve(pemString);
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_ECDSA_GET_PUBLIC_KEY.concat(" - ").concat(e.getMessage()));
        }
    }

    protected void signWithKey(String keyTag, String plainText, ReadableMap options, final Promise promise) {
        try {
            ReactApplicationContext context = getReactApplicationContext();
            Helpers.checkPreconditions(context);

            String encryptionResult = Helpers.signWithECDSA(keyTag, plainText);

            if (encryptionResult == E_AUTHENTICATION_REQUIRED) {
                authCallback = new BiometricPrompt.AuthenticationCallback() {
                    @Override
                    public void onAuthenticationError(int errorCode, @NonNull CharSequence errString) {
                        super.onAuthenticationError(errorCode, errString);
                        biometricPrompt.cancelAuthentication();
                        if (errorCode == BiometricPrompt.ERROR_NEGATIVE_BUTTON) {
                            promise.reject(E_ERROR, E_AUTHENTICATION_CANCELLED);
                        } else {
                            promise.reject(E_ERROR, E_AUTHENTICATION_FAILED);
                        }
                    }

                    @Override
                    public void onAuthenticationSucceeded(@NonNull BiometricPrompt.AuthenticationResult result) {
                        super.onAuthenticationSucceeded(result);

                        try {
                            String encryptionResult = Helpers.signWithECDSA(keyTag, plainText);
                            if (encryptionResult == null || encryptionResult.isEmpty()) {
                                promise.reject(E_ERROR, E_DATA_NOT_SIGNED);
                                return;
                            }
                            promise.resolve(encryptionResult);
                        } catch (Exception e) {
                            promise.reject(E_ERROR, E_DATA_NOT_SIGNED);
                        }
                    }

                    @Override
                    public void onAuthenticationFailed() {
                        super.onAuthenticationFailed();
                    }
                };

                PrivateKey privateKey = Helpers.getPrivateKey(keyTag);

                if (privateKey == null) {
                    throw new Exception(E_PRIVATE_KEY_NOT_FETCHED);
                }
                authenticateUser(options);
            } else if (encryptionResult != null && !encryptionResult.isEmpty()) {
                promise.resolve(encryptionResult);
            } else {
                promise.reject(E_ERROR, E_DATA_NOT_SIGNED);
            }
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_ECDSA_SIGN.concat(" - ").concat(e.getMessage()));
        }
    }

    protected void verifyWithKey(String keyTag, String plainText, String signature, ReadableMap options, final Promise promise) {
        try {
            PublicKey publicKey = Helpers.getPublicKey(keyTag);

            if (publicKey == null) {
                promise.reject(E_ERROR, E_PUBLIC_KEY_NOT_FETCHED);
                return;
            }

            Signature verifier = Signature.getInstance(ECDSA_SIGN_ALGORITHM);
            verifier.initVerify(publicKey);
            verifier.update(plainText.getBytes(UTF_8));
            byte[] base64decoded = Base64.decode(signature, Base64.NO_WRAP);
            boolean isVerified = verifier.verify(base64decoded);
            promise.resolve(isVerified);
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_ECDSA_VERIFY.concat(" - ").concat(e.getMessage()));
        }
    }

    protected void hasPairingKey(String keyTag, ReadableMap options, final Promise promise) {
        try {
            boolean hasPrivateKey = Helpers.getPrivateKey(keyTag) != null;
            boolean hasPublicKey = Helpers.getPublicKey(keyTag) != null;
            promise.resolve(hasPrivateKey && hasPublicKey);
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_ECDSA_HAS_KEYPAIR.concat(" - ").concat(e.getMessage()));
        }
    }

    // BITWALA DEVICE BINDING OPERATIONS - ASYMMETRIC KEY
    // ______________________________________________
    @ReactMethod
    public void createPairingKeys(String owner, ReadableMap options, final Promise promise) {
        if (owner == null || owner.isEmpty()) {
            promise.reject(E_ERROR, E_OWNER_REQUIRED);
            return;
        }
        String keyTag = getBindingTag(owner);
        createKey(keyTag, options, promise);
    }

    @ReactMethod
    public void deletePairingKeys(String owner, ReadableMap options, final Promise promise) {
        if (owner == null || owner.isEmpty()) {
            promise.reject(E_ERROR, E_OWNER_REQUIRED);
            return;
        }
        String keyTag = getBindingTag(owner);
        deleteKey(keyTag, options, promise);
    }

    @ReactMethod
    public void getPairingPublicKey(String owner, ReadableMap options, final Promise promise) {
        if (owner == null || owner.isEmpty()) {
            promise.reject(E_ERROR, E_OWNER_REQUIRED);
            return;
        }
        String keyTag = getBindingTag(owner);
        getPublicKey(keyTag, options, promise);
    }

    @ReactMethod
    public void signWithPairingKey(String owner, String plainText, ReadableMap options, final Promise promise) {
        if (owner == null || owner.isEmpty()) {
            promise.reject(E_ERROR, E_OWNER_REQUIRED);
            return;
        }
        String keyTag = getBindingTag(owner);
        signWithKey(keyTag, plainText, options, promise);
    }

    @ReactMethod
    public void verifyWithPairingKey(String owner, String plainText, String signature, ReadableMap options, final Promise promise) {
        if (owner == null || owner.isEmpty()) {
            promise.reject(E_ERROR, E_OWNER_REQUIRED);
            return;
        }
        String keyTag = getBindingTag(owner);
        verifyWithKey(keyTag, plainText, signature, options, promise);
    }

    @ReactMethod
    public void hasPairingKeys(String owner, ReadableMap options, final Promise promise) {
        if (owner == null || owner.isEmpty()) {
            promise.reject(E_ERROR, E_OWNER_REQUIRED);
            return;
        }
        String keyTag = getBindingTag(owner);
        hasPairingKey(keyTag, options, promise);
    }

    @ReactMethod
    public void isPairingKeyInSecureHW(String owner, ReadableMap options, final Promise promise) {
        try {
            if (owner == null || owner.isEmpty()) {
                promise.reject(E_ERROR, E_OWNER_REQUIRED);
                return;
            }
            String keyTag = getBindingTag(owner);
            promise.resolve(Helpers.isPrivateKeyInsideTheSecureHardware(keyTag));
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_ECDSA_IS_IN_SECURE_HW.concat(" - ").concat(e.getMessage()));
        }
    }

    // SOLARIS DEVICE BINDING OPERATIONS - ASYMMETRIC KEY
    // ______________________________________________
    @ReactMethod
    public void createSolarisKeys(String owner, ReadableMap options, final Promise promise) {
        if (owner == null || owner.isEmpty()) {
            promise.reject(E_ERROR, E_OWNER_REQUIRED);
            return;
        }
        String keyTag = getSolarisBindingTag(owner);
        createKey(keyTag, options, promise);
    }

    @ReactMethod
    public void deleteSolarisKeys(String owner, ReadableMap options, final Promise promise) {
        if (owner == null || owner.isEmpty()) {
            promise.reject(E_ERROR, E_OWNER_REQUIRED);
            return;
        }
        String keyTag = getSolarisBindingTag(owner);
        deleteKey(keyTag, options, promise);
    }

    @ReactMethod
    public void getSolarisPublicKey(String owner, ReadableMap options, final Promise promise) {
        if (owner == null || owner.isEmpty()) {
            promise.reject(E_ERROR, E_OWNER_REQUIRED);
            return;
        }
        String keyTag = getSolarisBindingTag(owner);
        getPublicKey(keyTag, options, promise);
    }

    @ReactMethod
    public void signWithSolarisKey(String owner, String plainText, ReadableMap options, final Promise promise) {
        if (owner == null || owner.isEmpty()) {
            promise.reject(E_ERROR, E_OWNER_REQUIRED);
            return;
        }
        String keyTag = getSolarisBindingTag(owner);
        signWithKey(keyTag, plainText, options, promise);
    }

    @ReactMethod
    public void verifyWithSolarisKey(String owner, String plainText, String signature, ReadableMap options, final Promise promise) {
        if (owner == null || owner.isEmpty()) {
            promise.reject(E_ERROR, E_OWNER_REQUIRED);
            return;
        }
        String keyTag = getSolarisBindingTag(owner);
        verifyWithKey(keyTag, plainText, signature, options, promise);
    }

    @ReactMethod
    public void hasSolarisKeys(String owner, ReadableMap options, final Promise promise) {
        if (owner == null || owner.isEmpty()) {
            promise.reject(E_ERROR, E_OWNER_REQUIRED);
            return;
        }
        String keyTag = getSolarisBindingTag(owner);
        hasPairingKey(keyTag, options, promise);
    }

    @ReactMethod
    public void isSolarisKeyInSecureHW(String owner, ReadableMap options, final Promise promise) {
        try {
            if (owner == null || owner.isEmpty()) {
                promise.reject(E_ERROR, E_OWNER_REQUIRED);
                return;
            }
            String keyTag = getSolarisBindingTag(owner);
            promise.resolve(Helpers.isPrivateKeyInsideTheSecureHardware(keyTag));
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_ECDSA_IS_IN_SECURE_HW.concat(" - ").concat(e.getMessage()));
        }
    }

    // WALLET OPERATIONS - SYMMETRIC KEY
    // ______________________________________________
    @ReactMethod
    public void saveWalletData(ReadableMap data, ReadableMap options, final Promise promise) {
        try {
            ReactApplicationContext context = getReactApplicationContext();
            Helpers.checkPreconditions(context);

            String owner = data.getString("owner");
            String address = data.getString("address");
            String coin = data.getString("coin");
            String seed = data.getString("seed");

            if (owner == null || owner.isEmpty()) {
                promise.reject(E_ERROR, E_OWNER_REQUIRED);
                return;
            }

            if (address == null || address.isEmpty()) {
                promise.reject(E_ERROR, E_WALLET_ADDRESS_REQUIRED);
                return;
            }

            if (coin == null || coin.isEmpty()) {
                promise.reject(E_ERROR, E_COIN_REQUIRED);
                return;
            }

            if (seed == null || seed.isEmpty()) {
                promise.reject(E_ERROR, E_SEED_REQUIRED);
                return;
            }

            String id = getAppTag(address);
            if (id.length() > 239) {
                throw new Exception(E_KEY_LENGHT_IS_TOO_BIG);
            }
            connectToDb();

            boolean isSecretKeyExists = Helpers.getSymmetricKey(id) != null;
            boolean isDBRecordExists = varnasse.isExistsInWallet(id, owner);

            if (isSecretKeyExists && isDBRecordExists) {
                promise.reject(E_ERROR, E_WALLET_SECRET_ALREADY_SAVED);
                return;
            }

            // Remove orphaned data from db if the process interrupted
            if (isDBRecordExists) {
                varnasse.deleteFromWallet(id, owner);
            }

            // Remove orphaned key from keystore if the process interrupted
            if (isSecretKeyExists) {
                KeyStore keyStore = Helpers.getKeyStore();
                keyStore.deleteEntry(id);
            }

            SecretKey secretKey = Helpers.generateSymmetricKey(id, false, false);

            if (secretKey == null) {
                promise.reject(E_ERROR, E_SYMMETRIC_KEY_NOT_GENERATED);
                return;
            }

            if (varnasse.isExistsInWallet(id, owner)) {
                promise.reject(E_ERROR, E_WALLET_SECRET_ALREADY_SAVED);
                return;
            }

            authCallback = new BiometricPrompt.AuthenticationCallback() {
                @Override
                public void onAuthenticationError(int errorCode, @NonNull CharSequence errString) {
                    super.onAuthenticationError(errorCode, errString);
                    biometricPrompt.cancelAuthentication();
                    if (errorCode == BiometricPrompt.ERROR_NEGATIVE_BUTTON) {
                        try {
                            KeyStore keyStore = Helpers.getKeyStore();
                            keyStore.deleteEntry(id);
                            varnasse.deleteFromWallet(id, owner);
                        } catch (Exception e) {
                        }
                        promise.reject(E_ERROR, E_AUTHENTICATION_CANCELLED);
                    } else {
                        promise.reject(E_ERROR, E_AUTHENTICATION_FAILED);
                    }
                }

                @Override
                public void onAuthenticationSucceeded(@NonNull BiometricPrompt.AuthenticationResult result) {
                    super.onAuthenticationSucceeded(result);

                    try {
                        BiometricPrompt.CryptoObject cryptoObject = result.getCryptoObject();
                        Cipher cipher = cryptoObject.getCipher();

                        byte[] encryptedBytes = cipher.doFinal(seed.getBytes(UTF_8));
                        String iv = Base64.encodeToString(cipher.getIV(), Base64.NO_WRAP);
                        String encrypted = Base64.encodeToString(encryptedBytes, Base64.NO_WRAP);


                        if (iv == null || iv.isEmpty() || encrypted == null || encrypted.isEmpty()) {
                            KeyStore keyStore = Helpers.getKeyStore();
                            keyStore.deleteEntry(id);
                            varnasse.deleteFromWallet(id, owner);
                            promise.reject(E_ERROR, E_DATA_NOT_ENCRYPTED);
                            return;
                        }
                        Boolean isSavedToDB = varnasse.insertToWallet(id, owner, address, coin, encrypted, iv);
                        promise.resolve(isSavedToDB);
                    } catch (Exception e) {
                        promise.reject(E_ERROR, E_WALLET_SAVE_ENCRYPTION.concat(" - ").concat(e.getMessage()));
                    }
                }

                @Override
                public void onAuthenticationFailed() {
                    super.onAuthenticationFailed();
                    try {
                        KeyStore keyStore = Helpers.getKeyStore();
                        keyStore.deleteEntry(id);
                        varnasse.deleteFromWallet(id, owner);
                    } catch (Exception e) {
                    }
                }
            };

            Cipher cipher = Cipher.getInstance(AES_ALGORITHM);
            cipher.init(Cipher.ENCRYPT_MODE, secretKey);
            BiometricPrompt.CryptoObject cryptoObject = new BiometricPrompt.CryptoObject(cipher);
            authenticateUser(options, cryptoObject);
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_WALLET_SAVE_GENERAL.concat(" - ").concat(e.getMessage()));
        } finally {
            closeDB();
        }
    }

    @ReactMethod
    public void getWalletData(String owner, String address, ReadableMap options, final Promise promise) {
        try {
            ReactApplicationContext context = getReactApplicationContext();
            Helpers.checkPreconditions(context);

            if (owner == null || owner.isEmpty()) {
                promise.reject(E_ERROR, E_OWNER_REQUIRED);
                return;
            }

            if (address == null || address.isEmpty()) {
                promise.reject(E_ERROR, E_WALLET_ADDRESS_REQUIRED);
                return;
            }

            String id = getAppTag(address);
            connectToDb();

            if (!varnasse.isExistsInWallet(id, owner)) {
                promise.reject(E_ERROR, E_WALLET_SECRET_NOT_FOUND);
                return;
            }

            Cursor cursor = varnasse.readFromWallet(id, owner);
            cursor.moveToFirst();

            int colKeyId = cursor.getColumnIndexOrThrow(Col_KeyId);
            int colCoin = cursor.getColumnIndexOrThrow(Col_Coin);
            int colSeed = cursor.getColumnIndexOrThrow(Col_Seed);

            final String coin = cursor.getString(colCoin);
            final String iv = cursor.getString(colKeyId);
            final String encryptedSeed = cursor.getString(colSeed);


            authCallback = new BiometricPrompt.AuthenticationCallback() {
                @Override
                public void onAuthenticationError(int errorCode, @NonNull CharSequence errString) {
                    super.onAuthenticationError(errorCode, errString);
                    biometricPrompt.cancelAuthentication();
                    if (errorCode == BiometricPrompt.ERROR_NEGATIVE_BUTTON) {
                        promise.reject(E_ERROR, E_AUTHENTICATION_CANCELLED);
                    } else {
                        promise.reject(E_ERROR, errString.toString());
                    }
                }

                @Override
                public void onAuthenticationSucceeded(@NonNull BiometricPrompt.AuthenticationResult result) {
                    super.onAuthenticationSucceeded(result);

                    try {
                        SecretKey secretKey = Helpers.getSymmetricKey(id);
                        if (secretKey == null) {
                            throw new Exception(E_WALLET_SECRET_NOT_FOUND);
                        }
                        byte[] ivDecoded = Base64.decode(iv, Base64.NO_WRAP);
                        Cipher cipher = Cipher.getInstance(AES_ALGORITHM);
                        GCMParameterSpec spec = new GCMParameterSpec(AES_IV_SIZE, ivDecoded);
                        cipher.init(Cipher.DECRYPT_MODE, secretKey, spec);

                        byte[] encrypted = Base64.decode(encryptedSeed, Base64.NO_WRAP);
                        byte[] decryptedBytes = cipher.doFinal(encrypted);
                        String seed = new String(decryptedBytes);

                        if (seed == null) {
                            promise.reject(E_ERROR, E_WALLET_GET_DECRYPTION_FAILED);
                            return;
                        }

                        WritableMap returnData = Arguments.createMap();

                        returnData.putString("owner", owner);
                        returnData.putString("address", address);
                        returnData.putString("coin", coin);
                        returnData.putString("seed", seed);

                        promise.resolve(returnData);
                    } catch (Exception e) {
                        promise.reject(E_ERROR, E_WALLET_GET_DECRYPTION.concat(" - ").concat(e.getMessage()));
                    }
                }

                @Override
                public void onAuthenticationFailed() {
                    super.onAuthenticationFailed();
                }
            };
            authenticateUser(options);
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_WALLET_GET_GENERAL.concat(" - ").concat(e.getMessage()));
        } finally {
            closeDB();
        }
    }

    @ReactMethod
    public void isWalletKeyInSecureHW(String address, ReadableMap options, final Promise promise) {
        try {
            if (address == null || address.isEmpty()) {
                promise.reject(E_ERROR, E_WALLET_ADDRESS_REQUIRED);
                return;
            }

            String id = getAppTag(address);
            promise.resolve(Helpers.isSecretKeyInsideTheSecureHardware(id));
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_WALLET_IS_IN_SECURE_HW.concat(" - ").concat(e.getMessage()));
        } finally {
            closeDB();
        }
    }

    @ReactMethod
    public void deleteWalletData(String owner, String address, ReadableMap options, final Promise promise) {
        try {
            if (owner == null || owner.isEmpty()) {
                promise.reject(E_ERROR, E_OWNER_REQUIRED);
                return;
            }

            if (address == null || address.isEmpty()) {
                promise.reject(E_ERROR, E_WALLET_ADDRESS_REQUIRED);
                return;
            }

            String id = getAppTag(address);
            connectToDb();

            if (varnasse.isExistsInWallet(id, owner)) {
                varnasse.deleteFromWallet(id, owner);
            }

            KeyStore keyStore = Helpers.getKeyStore();
            keyStore.deleteEntry(id);

            promise.resolve(true);
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_WALLET_DELETE.concat(" - ").concat(e.getMessage()));
        } finally {
            closeDB();
        }
    }

    // KEYCHAIN
    // ______________________________________________
    @ReactMethod
    public void saveToKeychain(String label, String data, String value, ReadableMap options, final Promise promise) {
        try {
            if (label == null || label.isEmpty()) {
                promise.reject(E_ERROR, E_LABEL_REQUIRED);
                return;
            }

            if (data == null || data.isEmpty()) {
                promise.reject(E_ERROR, E_DATA_REQUIRED);
                return;
            }

            if (value == null || value.isEmpty()) {
                promise.reject(E_ERROR, E_VALUE_REQUIRED);
                return;
            }

            String keyTag = getAppTag(KEYCHAIN_TAG);
            String id = getAppTag(label);
            if (id.length() > 239) {
                throw new Exception(E_KEY_LENGHT_IS_TOO_BIG);
            }
            connectToDb();

            SecretKey secretKey = Helpers.getSymmetricKeyCreateIfNotExists(keyTag, false, false);

            if (secretKey == null) {
                promise.reject(E_ERROR, E_SYMMETRIC_KEY_NOT_GENERATED);
                return;
            }

            if (varnasse.isExistsInKeychain(id, data)) {
                promise.reject(E_ERROR, E_DUPLICATE_STORAGE_KEY);
                return;
            }

            String[] encryptionResult = Helpers.encryptAES(keyTag, value);

            if (encryptionResult == null || encryptionResult.length != 2) {
                promise.reject(E_ERROR, E_DATA_NOT_ENCRYPTED);
                return;
            }

            String encryptionKey = encryptionResult[0];
            String encryptedValue = encryptionResult[1];

            Boolean isSavedToDB = varnasse.insertToKeychain(id, data, encryptedValue, encryptionKey);

            promise.resolve(isSavedToDB);
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_KEYCHAIN_SAVE.concat(" - ").concat(e.getMessage()));
        } finally {
            closeDB();
        }
    }

    @ReactMethod
    public void updateKeychain(String label, String data, String value, ReadableMap options, final Promise promise) {
        try {
            if (label == null || label.isEmpty()) {
                promise.reject(E_ERROR, E_LABEL_REQUIRED);
                return;
            }

            if (data == null || data.isEmpty()) {
                promise.reject(E_ERROR, E_DATA_REQUIRED);
                return;
            }

            if (value == null || value.isEmpty()) {
                promise.reject(E_ERROR, E_VALUE_REQUIRED);
                return;
            }

            String keyTag = getAppTag(KEYCHAIN_TAG);
            String id = getAppTag(label);

            connectToDb();

            SecretKey secretKey = Helpers.getSymmetricKeyCreateIfNotExists(keyTag, false, false);

            if (secretKey == null) {
                promise.reject(E_ERROR, E_SYMMETRIC_KEY_NOT_GENERATED);
                return;
            }

            if (!varnasse.isExistsInKeychain(id, data)) {
                promise.reject(E_ERROR, E_STORAGE_KEY_NOT_FOUND);
                return;
            }

            String[] encryptionResult = Helpers.encryptAES(keyTag, value);

            if (encryptionResult == null || encryptionResult.length != 2) {
                promise.reject(E_ERROR, E_DATA_NOT_ENCRYPTED);
                return;
            }

            String encryptionKey = encryptionResult[0];
            String encryptedValue = encryptionResult[1];

            Boolean isSavedToDB = varnasse.updateInKeychain(id, data, encryptedValue, encryptionKey);
            promise.resolve(isSavedToDB);
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_KEYCHAIN_UPDATE.concat(" - ").concat(e.getMessage()));
        } finally {
            closeDB();
        }
    }

    @ReactMethod
    public void getFromKeychain(String label, String data, ReadableMap options, final Promise promise) {
        try {
            if (label == null || label.isEmpty()) {
                promise.reject(E_ERROR, E_LABEL_REQUIRED);
                return;
            }

            if (data == null || data.isEmpty()) {
                promise.reject(E_ERROR, E_DATA_REQUIRED);
                return;
            }

            String keyTag = getAppTag(KEYCHAIN_TAG);
            String id = getAppTag(label);

            connectToDb();

            if (!varnasse.isExistsInKeychain(id, data)) {
                promise.resolve(null);
                return;
            }

            Cursor cursor = varnasse.readFromKeychain(id, data);
            cursor.moveToFirst();
            int colKeyId = cursor.getColumnIndexOrThrow(Col_KeyId);
            int colValue = cursor.getColumnIndexOrThrow(Col_Value);

            String iv = cursor.getString(colKeyId);
            String encryptedValue = cursor.getString(colValue);
            String value = Helpers.decryptAES(keyTag, iv, encryptedValue);

            if (value == null) {
                promise.reject(E_ERROR, E_KEYCHAIN_GET_DECRYPTION_FAILED);
                return;
            }

            WritableMap returnData = Arguments.createMap();

            returnData.putString("key", data);
            returnData.putString("value", value);

            promise.resolve(returnData);
        } catch (Exception e) {
            String message;
            if (e.getMessage() == null) {
                message = e.toString();
            } else {
                message = e.getMessage();
            }
            Log.e(RN_MODULE, message);
            promise.reject(E_ERROR, E_KEYCHAIN_GET_GENERAL.concat(" - ").concat(message));
        } finally {
            closeDB();
        }
    }

    @ReactMethod
    public void deleteFromKeychain(String label, String data, ReadableMap options, final Promise promise) {
        try {
            if (label == null || label.isEmpty()) {
                promise.reject(E_ERROR, E_LABEL_REQUIRED);
                return;
            }

            if (data == null || data.isEmpty()) {
                promise.reject(E_ERROR, E_DATA_REQUIRED);
                return;
            }

            String id = getAppTag(label);

            connectToDb();

            if (!varnasse.isExistsInKeychain(id, data)) {
                promise.reject(E_ERROR, E_STORAGE_KEY_NOT_FOUND);
                return;
            }
            promise.resolve(varnasse.deleteFromKeychain(id, data));
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_KEYCHAIN_DELETE.concat(" - ").concat(e.getMessage()));
        } finally {
            closeDB();
        }
    }

    // HELPERS
    // ______________________________________________
    @ReactMethod
    public void isBiometryEnrolled(final Promise promise) {
        try {
            boolean result = Helpers.isBiometryEnrolled(getReactApplicationContext());
            promise.resolve(result);
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_IS_BIOMETRY_ENROLLED.concat(" - ").concat(e.getMessage()));
        }
    }

    @ReactMethod
    public void isDeviceSupported(final Promise promise) {
        try {
            promise.resolve(Helpers.isDeviceSupported(getReactApplicationContext()));
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_IS_DEVICE_SUPPORTED.concat(" - ").concat(e.getMessage()));
        }
    }

    @ReactMethod
    public void isDeviceSecure(final Promise promise) {
        try {
            promise.resolve(Helpers.isDeviceSecure(getReactApplicationContext()));
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_IS_DEVICE_SECURE.concat(" - ").concat(e.getMessage()));
        }
    }

    @ReactMethod
    public void getBiometryType(final Promise promise) {
        if (!Helpers.isDeviceSupported(getReactApplicationContext())) {
            promise.resolve("NONE");
            return;
        }
        // @TODO Improve this to return face or iris id too
        promise.resolve("Fingerprint");
    }

    @ReactMethod
    public void authenticateWithBiometry(ReadableMap options, final Promise promise) {
        try {
            authCallback = new BiometricPrompt.AuthenticationCallback() {
                @Override
                public void onAuthenticationError(int errorCode, @NonNull CharSequence errString) {
                    super.onAuthenticationError(errorCode, errString);
                    biometricPrompt.cancelAuthentication();
                    if (errorCode == BiometricPrompt.ERROR_NEGATIVE_BUTTON) {
                        promise.reject(E_ERROR, E_AUTHENTICATION_CANCELLED);
                    } else {
                        promise.reject(E_ERROR, errString.toString());
                    }
                }

                @Override
                public void onAuthenticationSucceeded(@NonNull BiometricPrompt.AuthenticationResult result) {
                    super.onAuthenticationSucceeded(result);
                    promise.resolve(true);
                }

                @Override
                public void onAuthenticationFailed() {
                    super.onAuthenticationFailed();
                }
            };

            authenticateUser(options);
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            promise.reject(E_ERROR, E_BIOMETRIC_AUTHENTICATION.concat(" - ").concat(e.getMessage()));
        }
    }

}