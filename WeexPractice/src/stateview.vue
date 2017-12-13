<template>
  <div style="background-color: transparent" @viewappear="onappear">
    <div style="flex-direction: row; justify-content: space-between;">
      <text style="background-color: palegoldenrod; color: dodgerblue; height: 50; text-align: center;" @click="onChangeState('LOADING')">LOADING</text>
      <text style="background-color: palegoldenrod; color: dodgerblue; height: 50; justify-content: center;" @click="onChangeState('NO_DATA')">NO_DATA</text>
      <text style="background-color: palegoldenrod; color: dodgerblue; height: 50; align-items: center" @click="onChangeState('FAILED')">FAILED</text>
      <text style="background-color: palegoldenrod; color: dodgerblue; height: 50;" @click="onChangeState('SUCCESS')">SUCCESS</text>
    </div>
    <pw-state-view :state="state" empty-text="测试空文字" @retry="onRetry" style="flex: 1;">

      <div style="align-items: center; justify-content: center; flex: 1; width: 750; height: 500;">
        <scroller style="flex: 1; width: 750; height: 500;">
          <div style="flex: 1; width: 750; height: 500;">
            <text>{{testText}}</text>
            <text>env:</text>
            <text>{{envText}}</text>
            <text @click="onClickUserInfo">user:</text>
            <text>{{userText}}</text>
            <text>all:</text>
            <text>{{successText}}</text>
          </div>
        </scroller>
      </div>
    </pw-state-view>
  </div>
</template>

<script>
  const toast = weex.requireModule('pw-toast')
  const login = weex.requireModule('Login')
  const semver = require('semver')
  var times = 0;

  module.exports = {
    methods: {
      onRetry: function() {
        toast.toast('onRetry normal')
      },
      onChangeState: function(state) {
        this.state = state;
      },
      doGetUserInfo: function() {
        ++times;
        var user = login.getUser();
        this.userText = times + ' ' + JSON.stringify(user);
        return user;
      },
      onClickUserInfo: function() {
        login.login();
      },
      onappear: function() {
//        this.doGetUserInfo();
      },

      compareVersion: function(v1, v2) {
        var _v1 = v1.split("."),
          _v2 = v2.split("."),
          _r = _v1[0] - _v2[0];

        return _r == 0 && v1 != v2 ? this.compareVersion(_v1.splice(1).join("."), _v2.splice(1).join(".")) : _r;
      },

    },
    created: function() {
      this.envText = JSON.stringify(weex.config.env);
      this.successText = JSON.stringify(weex.config);
      console.log('created config: ' + this.successText);

//      var user = this.doGetUserInfo();
//      if (user.userId.length > 0) {
//
//      } else {
//        setTimeout(() => {
//          login.login();
//        }, 2000);
//      }

      let testUrl = 'kaikai://test/xxx_page?test_param=kaikai%3A%2F%2Ftest%2Fyyy_page%3Fid%3D2%26id2%3D456&noneed_param=hahaha';
      if (testUrl.indexOf('test_param=') > 0) {
      }
      //semver 貌似.分割后的个数必须一样，不然报错TypeError: Invalid Version: 7.0.1.1
//      this.testText = 'semver: ' + semver.lt('7.0.2', '7.10.1') + ' osVersion:' + weex.config.env.osVersion;// + ' ' + semver.lt(weex.config.env.osVersion, '7.0.1');
      this.testText = 'compareVersion: ' + this.compareVersion('7.0.1.1', '7.0.1') + ' osVersion:' + weex.config.env.osVersion + ' ' + this.compareVersion(weex.config.env.osVersion, '7.0.1');
    },

    data: function() {
      return {
        state: 'LOADING',
        successText: 'success Text',
        envText: 'env text',
        userText: 'user text',
        testText: 'test text',
      }
    }

  }
</script>

<style>
</style>
