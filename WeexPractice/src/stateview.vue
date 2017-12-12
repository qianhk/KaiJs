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
        this.doGetUserInfo();
      },
    },
    created: function() {
      this.envText = JSON.stringify(weex.config.env);
      this.successText = JSON.stringify(weex.config);
      console.log('created config: ' + this.successText);

      var user = this.doGetUserInfo();
      if (user.userId.length > 0) {

      } else {
        setTimeout(() => {
          login.login();
        }, 2000);
      }

      let testUrl = 'kaikai://test/xxx_page?test_param=kaikai%3A%2F%2Ftest%2Fyyy_page%3Fid%3D2%26id2%3D456&noneed_param=hahaha';
      if (testUrl.indexOf('test_param=') > 0) {
      }
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
