import Vue from "vue";
import Vuex from "vuex";

import application from './modules/application'
import authentication from './modules/authentication'
import alerts from './modules/alerts'

Vue.use(Vuex);

const modules = {
  application,
  authentication,
  alerts
}

export default new Vuex.Store({
  namespace: true,
  modules
});
