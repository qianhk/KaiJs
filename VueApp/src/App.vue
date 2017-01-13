<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>test2</p>
    <p>{{message}}</p>
    <button @click="onClickTest">test click</button>
    <hello></hello>
  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    name: 'app',
    components: {
      Hello
    },
    data() {
      return {
        message: 'hello message'
      }
    },
    methods: {
      onClickTest: function () {
        console.log('test click');
        this.message = 'on click test';
      }
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }


</style>
