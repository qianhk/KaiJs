<template>
  <div id="kaiTest">
    {{message}}
  </div>
</template>
<style>
  body {
    background-color: #ff0000;
  }


</style>
<script>
  export default{
    name: 'kaiTest',
    data(){
      return {
        msg: 'hello kai'
      }
    },
    components: {},
    methods: {
      onClickTest: function () {
        console.log('before update: ' + this.$name.textContent);
        this.message = 'on click test';
      }
    }
  }


</script>
