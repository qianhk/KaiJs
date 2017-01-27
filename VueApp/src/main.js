// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './routes'

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
    testData: 'kaiForLookObject'
  },
  computed: {
    ViewComponent () {
      console.log('look route: currentRoute: ' + this.currentRoute);
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require(matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
