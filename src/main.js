import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ScrollAnimation from "./directives/ScrollAnimation";
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
