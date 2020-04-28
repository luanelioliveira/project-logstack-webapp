import Vue from "vue";
import App from "./App.vue";
import { sync } from 'vuex-router-sync'
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import VLogo from './components/VLogo.vue'
import VTitlePage from './components/VTitlePage.vue'
import './filters'

Vue.component('VLogo', VLogo)
Vue.component('VTitlePage', VTitlePage)
Vue.use(Vuelidate);

Vue.config.productionTip = false;
sync(store, router)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
