import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state';
import { getters } from './getters';
import modules from './modules/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules,
  state,
  getters,
});

export default store;
