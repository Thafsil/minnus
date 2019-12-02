import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "./router/index.js";
Vue.config.productionTip = false

import { 
  faUserSecret,
  faCamera,
  faTachometerAlt
 } from '@fortawesome/free-solid-svg-icons'

library.add(
  faUserSecret,
  faCamera,
  faTachometerAlt
  )
Vue.use(BootstrapVue);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
