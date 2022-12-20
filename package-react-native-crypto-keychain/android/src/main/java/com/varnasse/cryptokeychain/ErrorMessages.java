package com.varnasse.cryptokeychain;

public class ErrorMessages {
    public static final String E_ERROR = "ERROR";
    public static final String E_DEVICE_IS_NOT_SECURE = "Device is not secure. (pin/password/biometry not set)";
    public static final String E_DEVICE_IS_NOT_SUPPORTED = "Device is not supported";
    public static final String E_TAG_PREFIX_REQUIRED = "Tag prefix is required!";
    public static final String E_WALLET_ADDRESS_REQUIRED = "Wallet address is required!";
    public static final String E_PRIVATE_KEY_NOT_FETCHED = "The private key info couldn't fetched.";
    public static final String E_PUBLIC_KEY_NOT_FETCHED = "The public key info couldn't fetched.";
    public static final String E_SYMMETRIC_KEY_NOT_GENERATED = "Symmetric key generation failed.";
    public static final String E_DUPLICATE_ECDSA_KEY = "This ECDSA key alias is already stored in keystore.";
    public static final String E_DUPLICATE_STORAGE_KEY = "This key is already stored in keystore.";
    public static final String E_STORAGE_KEY_NOT_FOUND = "Key is not found in keystore.";
    public static final String E_DATA_NOT_ENCRYPTED = "Encryption failed.";
    public static final String E_DATA_NOT_SIGNED = "Signing is failed.";
    public static final String E_WALLET_SECRET_NOT_FOUND = "The wallet's secret is not found.";
    public static final String E_WALLET_SECRET_ALREADY_SAVED = "The wallet's secret is already in database.";
    public static final String E_AUTHENTICATION_FAILED = "Please try again in 30 seconds";
    public static final String E_AUTHENTICATION_ERROR = "Authentication error";
    public static final String E_AUTHENTICATION_CANCELLED = "Please confirm your biometrics.";
    public static final String E_USER_NOT_AUTHENTICATED = "User not authenticated";
    public static final String E_AUTHENTICATION_REQUIRED = "Authentication required";
    public static final String E_ENCRYPTION_KEY_REQUIRED = "Encryption key id is required";
    public static final String E_OWNER_REQUIRED = "Owner is required";
    public static final String E_COIN_REQUIRED = "Coin is required";
    public static final String E_SEED_REQUIRED = "Seed is required";
    public static final String E_DATA_REQUIRED = "Data is required";
    public static final String E_VALUE_REQUIRED = "Value is required";
    public static final String E_LABEL_REQUIRED = "Label is required";
    public static final String E_KEY_LENGHT_IS_TOO_BIG = "The key tag length cannot be more than 239 characters.";

    public static final String E_ECDSA_KEY_GENETARTION = "(ERR: 1711)";
    public static final String E_ECDSA_KEY_DELETION = "(ERR: 1712)";
    public static final String E_ECDSA_GET_PUBLIC_KEY = "(ERR: 1713)";
    public static final String E_ECDSA_SIGN = "(ERR: 1714)";
    public static final String E_ECDSA_VERIFY = "(ERR: 1715)";
    public static final String E_ECDSA_HAS_KEYPAIR = "(ERR: 1716)";
    public static final String E_ECDSA_IS_IN_SECURE_HW = "(ERR: 1717)";

    public static final String E_WALLET_SAVE_ENCRYPTION = "(ERR: 1718)";
    public static final String E_WALLET_SAVE_GENERAL = "(ERR: 1719)";

    public static final String E_WALLET_GET_DECRYPTION = "(ERR: 1720)";
    public static final String E_WALLET_GET_GENERAL = "(ERR: 1721)";
    public static final String E_WALLET_GET_DECRYPTION_FAILED = "Decryption failed. (ERR: 1722)";

    public static final String E_WALLET_IS_IN_SECURE_HW = "(ERR: 1723)";
    public static final String E_WALLET_DELETE = "(ERR: 1724)";

    public static final String E_KEYCHAIN_SAVE = "(ERR: 1725)";
    public static final String E_KEYCHAIN_UPDATE = "(ERR: 1726)";
    public static final String E_KEYCHAIN_GET_DECRYPTION_FAILED = "Decryption failed. (ERR: 1727)";
    public static final String E_KEYCHAIN_GET_GENERAL = "(ERR: 1728)";

    public static final String E_KEYCHAIN_DELETE = "(ERR: 1729)";

    public static final String E_IS_BIOMETRY_ENROLLED = "(ERR: 1730)";
    public static final String E_IS_DEVICE_SUPPORTED = "(ERR: 1731)";
    public static final String E_IS_DEVICE_SECURE = "(ERR: 1732)";

    public static final String E_BIOMETRIC_AUTHENTICATION = "(ERR: 1733)";


}
