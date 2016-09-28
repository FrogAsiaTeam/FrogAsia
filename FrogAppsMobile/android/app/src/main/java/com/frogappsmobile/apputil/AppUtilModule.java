package com.frogappsmobile.apputil;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

public class AppUtilModule extends ReactContextBaseJavaModule {

    public AppUtilModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
	public String getName() {
	    return "AppUtil";
	}


    @ReactMethod
    public void checkInstalledApp(ReadableMap config, String packageName, Callback successCallback, Callback cancelCallback ) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            cancelCallback.invoke("Activity doesn't exist");
            return;
        }

        try {
            PackageManager pm = currentActivity.getPackageManager();
            boolean isInstalled = isPackageInstalled(packageName, pm);
            successCallback.invoke(isInstalled);
        } catch (Exception e) {
            cancelCallback.invoke(e);
        }
    }

    private boolean isPackageInstalled(String packagename, PackageManager packageManager) {
        try {
            packageManager.getPackageInfo(packagename, PackageManager.GET_ACTIVITIES);
            return true;
        } catch (PackageManager.NameNotFoundException e) {
            return false;
        }
    }

}