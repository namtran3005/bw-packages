package com.varnasse.cryptokeychain;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteException;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

import static com.varnasse.cryptokeychain.Constants.*;
import static com.varnasse.cryptokeychain.ErrorMessages.*;

public class VarnasseStorage extends SQLiteOpenHelper {
    private static final int DB_VERSION = 1;
    private static final String DB_NAME = "Bitwala.db";
    private static final String SQL_CREATE_TABLE_W = "CREATE TABLE Wallet (ID TEXT PRIMARY KEY, Owner TEXT NOT NULL, Coin TEXT NOT NULL, Address TEXT NOT NULL, KeyId TEXT NOT NULL, Seed TEXT NOT NULL)";
    private static final String SQL_CREATE_TABLE_K = "CREATE TABLE Keychain (ID TEXT PRIMARY KEY, Data TEXT NOT NULL, Value TEXT NOT NULL, KeyId TEXT NOT NULL)";

    private static @Nullable
    VarnasseStorage dbInstance;
    private @Nullable
    SQLiteDatabase iDB;

    public VarnasseStorage(Context context) {
        super(context, DB_NAME, null, DB_VERSION);
    }

    public void onCreate(SQLiteDatabase db) {
        db.execSQL(SQL_CREATE_TABLE_W);
        db.execSQL(SQL_CREATE_TABLE_K);
    }

    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

        db.execSQL("DROP TABLE IF EXISTS Wallet");
        db.execSQL("DROP TABLE IF EXISTS Keychain");
        onCreate(db);
    }

    public void onDowngrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        onUpgrade(db, oldVersion, newVersion);
    }

    /* package */
    synchronized boolean ensureDB() {
        if (iDB != null && iDB.isOpen()) {
            return true;
        }

        SQLiteException lastSQLiteException = null;
        for (int tries = 0; tries < 2; tries++) {
            try {
                iDB = getWritableDatabase();
                break;
            } catch (SQLiteException e) {
                lastSQLiteException = e;
            }

            try {
                Thread.sleep(50); // Wait before retry
            } catch (InterruptedException ie) {
                Thread.currentThread().interrupt();
            }
        }
        if (iDB == null) {
            throw lastSQLiteException;
        }
        return true;
    }

    synchronized boolean closeDB() {
        if (iDB == null && !iDB.isOpen()) {
            return true;
        }
        iDB.close();
        return true;
    }

    public Boolean insertToWallet(String ID, String owner, String address, String coin, String seed, String keyId) {
        if (keyId == null || keyId.isEmpty()) {
            throw new Error(E_ENCRYPTION_KEY_REQUIRED);
        }

        if (seed == null || seed.isEmpty()) {
            throw new Error(E_SEED_REQUIRED);
        }

        ensureDB();
        ContentValues values = new ContentValues();
        values.put(Col_ID, ID);
        values.put(Col_Owner, owner);
        values.put(Col_Address, address);
        values.put(Col_Coin, coin);
        values.put(Col_Seed, seed);
        values.put(Col_KeyId, keyId);
        long id = iDB.insert(Table_Wallet, null, values);
        return id != -1;
    }

    public Boolean insertToKeychain(String ID, String data, String value, String keyId) {
        if (keyId == null || keyId.isEmpty()) {
            throw new Error(E_ENCRYPTION_KEY_REQUIRED);
        }

        if (value == null || value.isEmpty()) {
            throw new Error(E_VALUE_REQUIRED);
        }

        ensureDB();
        iDB.beginTransaction();
        ContentValues values = new ContentValues();
        values.put(Col_ID, ID);
        values.put(Col_Data, data);
        values.put(Col_Value, value);
        values.put(Col_KeyId, keyId);
        long id = iDB.insert(Table_Keychain, null, values);
        if (id != -1) {
            iDB.setTransactionSuccessful();
        }
        iDB.endTransaction();
        return id != -1;
    }

    public Boolean updateInKeychain(String ID, String data, String value, String keyId) {
        if (keyId == null || keyId.isEmpty()) {
            throw new Error(E_ENCRYPTION_KEY_REQUIRED);
        }

        if (value == null || value.isEmpty()) {
            throw new Error(E_ENCRYPTION_KEY_REQUIRED);
        }

        ensureDB();
        iDB.beginTransaction();
        ContentValues values = new ContentValues();
        values.put(Col_Value, value);
        values.put(Col_KeyId, keyId);

        String whereClause = "ID = ? AND Data = ?";
        String[] whereArgs = {ID, data};
        long result = -1;
        try {
            result = iDB.update(Table_Keychain, values, whereClause, whereArgs);
        } catch (RuntimeException e) {
            e.printStackTrace();
        }
        if (result == 0) {
            try {
                result = iDB.insert(Table_Keychain, null, values);
            } catch (RuntimeException e) {
                e.printStackTrace();
            }
        }
        if (result >= 0) {
            iDB.setTransactionSuccessful();
        }
        iDB.endTransaction();
        return result >= 0;
    }

    public Cursor readFromWallet(String ID, String owner) {
        ensureDB();
        String[] projection = {Col_ID, Col_Owner, Col_Address, Col_Coin, Col_Seed, Col_KeyId};
        String selection = "ID = ? AND Owner = ?";
        String[] selectionArgs = {ID, owner};
        Cursor result = iDB.query(Table_Wallet, projection, selection, selectionArgs, null, null, null);
        return result;
    }

    public Cursor readFromKeychain(String ID, String data) {
        ensureDB();
        String[] projection = {Col_ID, Col_Data, Col_Value, Col_KeyId};
        String selection = "ID = ? AND Data = ?";
        String[] selectionArgs = {ID, data};
        Cursor result = iDB.query(Table_Keychain, projection, selection, selectionArgs, null, null, null);
        return result;
    }

    private Boolean _delete(String table, String id, String data) {
        ensureDB();
        iDB.beginTransaction();
        String field = table.equals(Table_Wallet) ? Col_Owner : Col_Data;
        String selection = "ID = ? AND ".concat(field).concat(" = ?");
        String[] selectionArgs = {id, data};
        int result = iDB.delete(table, selection, selectionArgs);
        if (result != -1) {
            iDB.setTransactionSuccessful();
        }
        iDB.endTransaction();
        return result  > 0;
    }

    public Boolean deleteFromWallet(String ID, String owner) {
        return _delete(Table_Wallet, ID, owner);
    }

    public Boolean deleteFromKeychain(String ID, String data) {
        return _delete(Table_Keychain, ID, data);
    }

    public Boolean isExistsInWallet(String ID, String owner) {
        ensureDB();
        Cursor cursor = readFromWallet(ID, owner);
        return cursor.getCount() > 0;
    }

    public Boolean isExistsInKeychain(String ID, String data) {
        ensureDB();
        Cursor cursor = readFromKeychain(ID, data);
        return cursor.getCount() > 0;
    }

}