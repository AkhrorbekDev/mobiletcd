import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './utils/loader';
import './bootstrap';
import './permissions'; // access permission
import { i18n } from './utils/modules/i18n';
import './directive/permission/index';
import './plugins/async-computed';
import './plugins/element';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
