<template>
  <div id="app2">

    <p>kai.vue</p><br/>
    <KaiTest></KaiTest>
    <br/><br/>

    <p>kaiJade.vue</p><br/>
    <KaiJade></KaiJade>
    <br/><br/>

    <img src="./assets/logo.png">
    <p>test2</p>
    <p>{{message}}</p>
    <button @click="onClickTest">test click</button>
    <hello></hello>

    <br/><br/>
    <a @click="goPage('/page1')">Page1</a>
    <a @click="goPage('/about')">About</a>

  </div>
</template>

<script>
  import Hello from './components/Hello'
  import KaiTest from './components/Kai'
  import KaiJade from './components/KaiJade.vue'
  import routes from './routes'

  export default {
    name: 'app2',
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
      },
      goPage: function (href) {
//        console.log('look goto page: ' + href + ' this.$root=' + simpleStringify(this.$root));
        this.$root.currentRoute = href;
        window.history.pushState(
          null,
          routes[href],
          href
        )
      }
    }
  }

  function simpleStringify(object) {
    var simpleObject = {};
    for (var prop in object) {
      if (!object.hasOwnProperty(prop)) {
        continue;
      }
      if (typeof(object[prop]) == 'object') {
        continue;
      }
      if (typeof(object[prop]) == 'function') {
        continue;
      }
      simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
  }
  ;

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
