import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

let routes = [{
  path: '/',
  name: 'Home',
  meta: {
    layout: 'main',
  },
  component: Home,
}];

/**
 * Load all routes from modulea folder
 */
const request = require.context('./modules', true, /.js/);

request.keys().map((module) => {
  routes = routes.concat(request(module).default);
});

const router = new VueRouter({
  routes,
  // history:
  mode: 'history',
});

export default router;
