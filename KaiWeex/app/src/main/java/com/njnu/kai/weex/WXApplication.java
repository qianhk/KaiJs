package com.njnu.kai.weex;

import android.app.Application;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;

/**
 * @author hongkai.qian
 * @version 1.0.0
 * @since 16-8-18
 */
public class WXApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        WXEnvironment.addCustomOptions("keyWeexAppName", "KeyWeexValueSample");
        InitConfig.Builder builder = new InitConfig.Builder();
        builder.setImgAdapter(new ImageAdapter());
        WXSDKEngine.initialize(this, builder.build());
    }

}
