<template>
  <div style="background-color: transparent">
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
            <text>env:</text>
            <text>{{envText}}</text>
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

  module.exports = {
    methods: {
      onRetry: function() {
        toast.toast('onRetry normal')
      },
      onChangeState: function(state) {
        this.state = state;
      }
    },
    created: function() {
      this.envText = JSON.stringify(weex.config.env);
      this.successText = JSON.stringify(weex.config);
      console.log('created config: ' + this.successText);
    },
    data: function() {
      return {
        state: 'LOADING',
        successText: 'success Text',
        envText: 'env text',
      }
    }
  }
</script>

<style>
</style>
