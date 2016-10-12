package com.njnu.kai.weex;

import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;
import com.taobao.weex.utils.WXViewUtils;

import java.util.HashMap;
import java.util.Map;

public class MainActivity extends FragmentActivity {

    private ViewGroup mLayoutContainer;

    private static final String DEFAULT_IP = "30.17.4.126";
    private static String CURRENT_IP = DEFAULT_IP; // your_current_IP
    private static final String WEEX_INDEX_URL = "http://" + CURRENT_IP + ":8081/weex_tmp/h5_render/index.js?wsport=8082&wh_weex=true&id=192143875";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mLayoutContainer = (ViewGroup)findViewById(R.id.layout_container);

        WXSDKInstance mInstance = new WXSDKInstance(this);
        mInstance.registerRenderListener(new IWXRenderListener() {
            @Override
            public void onViewCreated(WXSDKInstance instance, View view) {
                mLayoutContainer.addView(view);
            }

            @Override
            public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

            }

            @Override
            public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

            }

            @Override
            public void onException(WXSDKInstance instance, String errCode, String msg) {

            }
        });

        renderPage(mInstance, getPackageName(), WXFileUtils.loadAsset("index.js", this), null/*WEEX_INDEX_URL*/, null);

    }

    protected void renderPage(WXSDKInstance mInstance, String packageName, String template, String source, String jsonInitData) {
        Map<String, Object> options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL, source);
        if (TextUtils.isEmpty(source)) {
            mInstance.render(packageName, template, options, jsonInitData
                    , WXViewUtils.getScreenWidth(this), WXViewUtils.getScreenHeight(this)
                    , WXRenderStrategy.APPEND_ASYNC);
        } else {
            mInstance.renderByUrl(packageName, source, options, jsonInitData, WXViewUtils.getScreenWidth(this), WXViewUtils.getScreenHeight(this)
                    , WXRenderStrategy.APPEND_ASYNC);
        }
    }
}
