package com.frogappsmobile.apputil;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageInfo;
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
            String[] appInfo = isPackageInstalled(packageName, pm);
            String isInstalled = appInfo[0];
            String appVersion = appInfo[1];
            successCallback.invoke(isInstalled, appVersion);
        } catch (Exception e) {
            cancelCallback.invoke(e);
        }
    }

    private String[] isPackageInstalled(String packageName, PackageManager packageManager) {
        try {
            PackageInfo info = packageManager.getPackageInfo(packageName, PackageManager.GET_ACTIVITIES);
            String appVersion = String.valueOf(info.versionCode);
            String isInstalled = "true";
            return new String[] {isInstalled,appVersion};
        } catch (PackageManager.NameNotFoundException e) {
            String appVersion = "-1";
            String isInstalled = "false";
            return new String[] {isInstalled,appVersion};
        }
    }

}