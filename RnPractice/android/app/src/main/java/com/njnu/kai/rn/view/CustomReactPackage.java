package com.njnu.kai.rn.view;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.njnu.kai.rn.modules.ReactAppManagerModule;
import com.njnu.kai.rn.view.webview.ReactWebViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 */
public class CustomReactPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        ArrayList<NativeModule> nativeModuleList = new ArrayList<>();
        nativeModuleList.add(new ReactAppManagerModule(reactContext));
        return nativeModuleList;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> result = new ArrayList<ViewManager>();
        result.add(new ReactWebViewManager());
//        result.add(new ReactSwipeRefreshLayoutManager());

        return result;
    }
}
