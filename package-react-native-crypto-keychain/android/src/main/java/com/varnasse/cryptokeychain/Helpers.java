package com.varnasse.cryptokeychain;

import android.app.KeyguardManager;
import android.os.Build;
import android.security.keystore.KeyGenParameterSpec;
import android.security.keystore.KeyInfo;
import android.security.keystore.KeyProperties;
import android.security.keystore.StrongBoxUnavailableException;
import android.security.keystore.UserNotAuthenticatedException;
import android.util.Base64;
import android.util.Log;

import androidx.biometric.BiometricManager;

import com.facebook.react.bridge.ReactApplicationContext;

import java.security.InvalidAlgorithmParameterException;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Signature;
import java.security.cert.Certificate;
import java.security.spec.ECGenParameterSpec;
import java.security.spec.KeySpec;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.GCMParameterSpec;

import static com.varnasse.cryptokeychain.Constants.*;
import static com.varnasse.cryptokeychain.ErrorMessages.*;
import static java.nio.charset.StandardCharsets.UTF_8;


public class Helpers {

    // INTERNAL HELPERS
    // ______________________________________________
    public static KeyStore getKeyStore() {
        try {
            KeyStore keyStore = KeyStore.getInstance(KEY_STORE);
            keyStore.load(null);
            return keyStore;
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            return null;
        }
    }

    public static boolean isDeviceSecure(ReactApplicationContext context) {
        KeyguardManager kg = (KeyguardManager) context.getSystemService(ReactApplicationContext.KEYGUARD_SERVICE);
        return kg != null && kg.isDeviceSecure();
    }

    public static boolean isDeviceSupported(ReactApplicationContext context) {
        BiometricManager biometricManager = BiometricManager.from(context);
        int result = biometricManager.canAuthenticate();
        return result != BiometricManager.BIOMETRIC_ERROR_NO_HARDWARE;
    }

    public static boolean isBiometryEnrolled(ReactApplicationContext context) {
        BiometricManager biometricManager = BiometricManager.from(context);
        int result = biometricManager.canAuthenticate();
        return result == BiometricManager.BIOMETRIC_SUCCESS;
    }

    public static void checkPreconditions(ReactApplicationContext context) throws Exception {
        if (!Helpers.isDeviceSupported(context)) {
            throw new Exception(E_DEVICE_IS_NOT_SUPPORTED);
        }

        if (!Helpers.isDeviceSecure(context)) {
            throw new Exception(E_DEVICE_IS_NOT_SECURE);
        }

    }

    // ASYMMETRIC KEY
    // ______________________________________________
    private static PublicKey generateECKey(String appTag, boolean isAuthenticationRequired, boolean isUnlockRequired, boolean isStrongBoxRequired) throws Exception{
        KeyStore keyStore = Helpers.getKeyStore();

        if (keyStore.containsAlias(appTag)) {
            throw new Exception(E_DUPLICATE_ECDSA_KEY);
        }

        int purposes = KeyProperties.PURPOSE_SIGN | KeyProperties.PURPOSE_VERIFY | KeyProperties.PURPOSE_DECRYPT | KeyProperties.PURPOSE_ENCRYPT;
        KeyGenParameterSpec.Builder builder = new KeyGenParameterSpec.Builder(appTag, purposes);

        builder.setAlgorithmParameterSpec(new ECGenParameterSpec(ECDSA_KEY_SPEC))
                .setDigests(KeyProperties.DIGEST_SHA256)
                .setRandomizedEncryptionRequired(true);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            if (isUnlockRequired) {
                builder.setUnlockedDeviceRequired(true);
            }
            if (isStrongBoxRequired) {
                builder.setIsStrongBoxBacked(true);
            }
        }
        if (isAuthenticationRequired) {
            builder.setUserAuthenticationRequired(true)
                    .setUserAuthenticationValidityDurationSeconds(300);
        }

        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance(KeyProperties.KEY_ALGORITHM_EC, KEY_STORE);
        keyPairGenerator.initialize(builder.build());
        KeyPair keyPair = keyPairGenerator.generateKeyPair();
        return keyPair.getPublic();
    }

    private static boolean isStrongBoxSupportedForEC() throws Exception {
        try {
            // Minimum SDK doesn't match
            if (Build.VERSION.SDK_INT < Build.VERSION_CODES.P) {
                return false;
            }

            KeyStore keyStore = getKeyStore();
            if (keyStore.containsAlias(STRONGBOX_TAG)) {
                keyStore.deleteEntry(STRONGBOX_TAG);
            }

            // Try to generate a key inside the StrongBox
            PublicKey publicKey = generateECKey(STRONGBOX_TAG, true, false, true);
            if (publicKey == null) {
                return false;
            }
            return true;
        } catch (Exception e) {
            if (e instanceof StrongBoxUnavailableException) {
                return false;
            }
            throw new Exception(e.getMessage());
        }
    }

    public static PublicKey generateECDSA(String appTag, boolean isAuthenticationRequired, boolean isUnlockRequired) throws Exception {
            boolean forceToUseStrongbox = false;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                forceToUseStrongbox = isStrongBoxSupportedForEC();
            }
            PublicKey publicKey = generateECKey(appTag, isAuthenticationRequired, isUnlockRequired, forceToUseStrongbox);
            return publicKey;
    }

    public static PrivateKey getPrivateKey(String appTag) {
        try {
            KeyStore keyStore = getKeyStore();
            PrivateKey privateKey = (PrivateKey) keyStore.getKey(appTag, null);
            return privateKey;
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            return null;
        }
    }

    public static PublicKey getPublicKey(String appTag) {
        try {
            PublicKey publicKey = null;
            KeyStore keyStore = getKeyStore();
            Certificate certificate = keyStore.getCertificate(appTag);
            if (certificate != null) {
                publicKey = certificate.getPublicKey();
            }

            return publicKey;
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            return null;
        }
    }

    public static KeyInfo getPrivateKeyInfo(String appTag) {
        try {
            PrivateKey privateKey = getPrivateKey(appTag);
            if (privateKey == null) {
                return null;
            }
            KeyFactory factory = KeyFactory.getInstance(privateKey.getAlgorithm(), KEY_STORE);
            return factory.getKeySpec(privateKey, KeyInfo.class);

        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            return null;
        }
    }

    public static boolean isPrivateKeyInsideTheSecureHardware(String appTag) {
        KeyInfo keyInfo = getPrivateKeyInfo(appTag);
        if (keyInfo == null) {
            return false;
        }
        return keyInfo.isInsideSecureHardware();
    }

    public static String convertToPEM(PublicKey publicKey) {
        if (publicKey == null) {
            return null;
        }
        byte[] pubBytes = Base64.encode(publicKey.getEncoded(), Base64.DEFAULT);
        String pubStr = new String(pubBytes);

        return PEM_HEADER.concat(pubStr).concat(PEM_FOOTER);
    }

    public static String signWithECDSA(String keyTag, String plainText) throws Exception {
        try {
            PrivateKey privateKey = Helpers.getPrivateKey(keyTag);

            if (privateKey == null) {
                return null;
            }

            Signature signature = Signature.getInstance(ECDSA_SIGN_ALGORITHM);
            signature.initSign(privateKey);

            signature.update(plainText.getBytes(UTF_8));
            byte[] signatureBytes = signature.sign();
            byte[] signatureEncoded = Base64.encode(signatureBytes, Base64.NO_WRAP);
            String result = new String(signatureEncoded);
            return result;
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            if (e.getMessage() == E_USER_NOT_AUTHENTICATED) {
                return E_AUTHENTICATION_REQUIRED;
            }
            throw new Exception(e.getMessage());
        }
    }

    // SYMMETRIC KEY
    // ______________________________________________
    private static SecretKey generateAESKey(String appTag, boolean isAuthenticationRequired, boolean isUnlockRequired, boolean isStrongBoxRequired) throws Exception {
        try {
            KeyStore keyStore = Helpers.getKeyStore();

            if (keyStore.containsAlias(appTag)) {
                throw new Exception(E_DUPLICATE_ECDSA_KEY);
            }

            int purposes = KeyProperties.PURPOSE_SIGN | KeyProperties.PURPOSE_VERIFY | KeyProperties.PURPOSE_DECRYPT | KeyProperties.PURPOSE_ENCRYPT;
            KeyGenParameterSpec.Builder builder = new KeyGenParameterSpec.Builder(appTag, purposes);

            builder.setBlockModes(KeyProperties.BLOCK_MODE_GCM)
                    .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
                    .setKeySize(AES_KEY_SIZE)
                    .setRandomizedEncryptionRequired(true);

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                if (isUnlockRequired) {
                    builder.setUnlockedDeviceRequired(true);
                }
                if (isStrongBoxRequired) {
                    builder.setIsStrongBoxBacked(true);
                }
            }
            if (isAuthenticationRequired) {
                builder.setUserAuthenticationRequired(true)
                        .setUserAuthenticationValidityDurationSeconds(-1);
            }

            KeyGenerator keyGen = KeyGenerator.getInstance(KeyProperties.KEY_ALGORITHM_AES, KEY_STORE);
            keyGen.init(builder.build());

            return keyGen.generateKey();
        } catch (Exception e) {
            // No need to throw during finding strongbox support
            if (isStrongBoxRequired) {
                return null;
            } else {
                throw e;
            }
        }
    }

    private static boolean isStrongBoxSupportedForAES() throws Exception {
            // Minimum SDK doesn't match
            if (Build.VERSION.SDK_INT < Build.VERSION_CODES.P) {
                return false;
            }

            KeyStore keyStore = getKeyStore();
            if (keyStore.containsAlias(STRONGBOX_TAG)) {
                return true;
            }

            // Try to generate a key inside the StrongBox
            SecretKey secretKey = generateAESKey(STRONGBOX_TAG, true, false, true);
            if (secretKey == null) {
                return false;
            }
            return true;
    }

    public static SecretKey generateSymmetricKey(String appTag, boolean isAuthenticationRequired, boolean isUnlockRequired) throws Exception {
            boolean forceToUseStrongbox = false;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                forceToUseStrongbox = isStrongBoxSupportedForAES();
            }
            SecretKey secretKey = generateAESKey(appTag, isAuthenticationRequired, isUnlockRequired, forceToUseStrongbox);
            return secretKey;
    }

    public static SecretKey getSymmetricKey(String appTag) throws Exception {
            KeyStore keyStore = getKeyStore();
            return (SecretKey) keyStore.getKey(appTag, null);
    }

    public static SecretKey getSymmetricKeyCreateIfNotExists(String appTag, boolean isAuthenticationRequired, boolean isUnlockRequired) throws Exception {
            SecretKey secretKey = getSymmetricKey(appTag);
            if (secretKey == null) {
                secretKey = generateSymmetricKey(appTag, isAuthenticationRequired, isUnlockRequired);
            }
            return secretKey;
    }

    public static KeyInfo getSymmetricKeyInfo(String appTag) throws Exception {
            SecretKey secretKey = getSymmetricKey(appTag);
            if (secretKey == null) {
                return null;
            }

            SecretKeyFactory factory = SecretKeyFactory.getInstance(secretKey.getAlgorithm(), KEY_STORE);
            KeySpec keySpec = factory.getKeySpec(secretKey, KeyInfo.class);
            return (KeyInfo) keySpec;
    }

    public static boolean isSecretKeyInsideTheSecureHardware(String appTag) throws Exception {
        KeyInfo keyInfo = getSymmetricKeyInfo(appTag);
        if (keyInfo == null) {
            return false;
        }
        return keyInfo.isInsideSecureHardware();
    }

    public static String decryptAES(String appTag, String ivDecoded, String dataDecoded) throws Exception {
        try {
            SecretKey secretKey = Helpers.getSymmetricKey(appTag);
            byte[] iv = Base64.decode(ivDecoded, Base64.NO_WRAP);
            byte[] encrypted = Base64.decode(dataDecoded, Base64.NO_WRAP);

            Cipher cipher = Cipher.getInstance(AES_ALGORITHM);
            GCMParameterSpec spec = new GCMParameterSpec(AES_IV_SIZE, iv);
            cipher.init(Cipher.DECRYPT_MODE, secretKey, spec);

            byte[] decryptedBytes = cipher.doFinal(encrypted);
            return new String(decryptedBytes);
        } catch (UserNotAuthenticatedException e) {
            if (e.getMessage() == E_USER_NOT_AUTHENTICATED) {
                return E_AUTHENTICATION_REQUIRED;
            }
            return null;
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            throw new Exception((e.getMessage()));
        }
    }

    public static String[] encryptAES(String appTag, String plainText) throws Exception {
        try {
            SecretKey secretKey = getSymmetricKey(appTag);
            Cipher encrypter = Cipher.getInstance(AES_ALGORITHM);
            encrypter.init(Cipher.ENCRYPT_MODE, secretKey);

            byte[] encryptedBytes = encrypter.doFinal(plainText.getBytes(UTF_8));
            String iv = Base64.encodeToString(encrypter.getIV(), Base64.NO_WRAP);
            String encrypted = Base64.encodeToString(encryptedBytes, Base64.NO_WRAP);
            String[] result = {iv, encrypted};
            return result;
        } catch (UserNotAuthenticatedException e) {
            if (e.getMessage() == E_USER_NOT_AUTHENTICATED) {
                String[] result = {E_AUTHENTICATION_REQUIRED};
                return result;
            }
            return null;
        } catch (Exception e) {
            Log.e(RN_MODULE, e.getMessage());
            throw new Exception(e.getMessage());
        }
    }

}