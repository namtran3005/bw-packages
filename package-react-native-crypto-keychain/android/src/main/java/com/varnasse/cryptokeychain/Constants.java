package com.varnasse.cryptokeychain;

public class Constants {
    public static final String RN_MODULE = "RNCryptoKeychain";
    public static final String KEY_STORE = "AndroidKeyStore";
    public static final String BINDING_TAG = "bind";
    public static final String SOLARIS_BINDING_TAG = "solaris";
    public static final String KEYCHAIN_TAG = "keychain";
    public static final String STRONGBOX_TAG = "secure_hw";

    public static final String ECDSA_SIGN_ALGORITHM = "SHA256withECDSA";
    public static final String ECDSA_KEY_SPEC = "secp256r1";

    public static final String AES_ALGORITHM = "AES/GCM/NoPadding";
    public static final int AES_IV_SIZE = 128;
    public static final int AES_KEY_SIZE = 256;

    public static final String BIOMETRY_TITLE = "Bitwala";
    public static final String BIOMETRY_SUBTITLE = "Authentication required";
    public static final String BIOMETRY_DESCRIPTION = "";
    public static final String BIOMETRY_CANCEL = "Cancel";

    public static final String PEM_HEADER = "-----BEGIN PUBLIC KEY-----\n";
    public static final String PEM_FOOTER = "-----END PUBLIC KEY-----";


    public static final String Table_Wallet = "Wallet";
    public static final String Table_Keychain = "Keychain";
    public static final String Col_ID = "ID";
    public static final String Col_Owner = "Owner";
    public static final String Col_Coin = "Coin";
    public static final String Col_Address = "Address";
    public static final String Col_KeyId = "KeyId";
    public static final String Col_Seed = "Seed";
    public static final String Col_Data = "Data";
    public static final String Col_Value = "Value";
}
