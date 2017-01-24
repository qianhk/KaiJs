<template>
  <div id="app">

    <p>kai.vue</p><br/>
    <KaiTest></KaiTest>
    <br/><br/>

    <KaiJade></KaiJade>
    <br/><br/>

    <img src="./assets/logo.png">
    <p>test2</p>
    <p>{{message}}</p>
    <button @click="onClickTest">test click</button>
    <hello></hello>

    <br/><br/>

  </div>
</template>

<script>
  import Hello from './components/Hello'
  import KaiTest from './components/Kai'
  import KaiJade from './components/KaiJade.vue'

  export default {
    name: 'app',
    components: {
      Hello,
      KaiTest,
      KaiJade
    },
    data() {
      return {
        message: 'hello message'
      }
    },
    methods: {
      onClickTest: function () {
        let vm = this;
        console.log('test click, before update: ' + this.$name.textContent);
        this.message = 'on click test';
        console.log('test click, after update: ' + this.$name.textContent);
        Vue.nextTick(function () {
          console.log('test click, after nextTick: ' + vm.$name.textContent);
        });
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
