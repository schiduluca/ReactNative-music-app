package com.musicapp;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.DataInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by lschidu on 2/24/17.
 */

public class LocalStorage extends ReactContextBaseJavaModule {

    private static final String KEY = "KEY";
    private static final String VALUE = "Hello from the other side";

    public LocalStorage(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> map = new HashMap<>();
        map.put(KEY, VALUE);
        map.put("Toast", Toast.LENGTH_LONG);
        return map;
    }

    @Override
    public String getName() {
        return "LocalStorage";
    }



    @ReactMethod
    public void writeToFile(String message, Callback callback) {
        try {
            FileOutputStream fout = getCurrentActivity().openFileOutput("react-file", Context.MODE_PRIVATE);
            fout.write(message.getBytes());
            fout.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void readFromFile(Promise promise) {
        try {
            FileInputStream fin = getCurrentActivity().openFileInput("react-file");
            DataInputStream dataInputStream = new DataInputStream(fin);
            promise.resolve(dataInputStream.readLine());
        } catch (FileNotFoundException e) {
            promise.reject("File was not found");
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
