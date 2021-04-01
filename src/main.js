import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Scrollspy from 'vue2-scrollspy';

import BootstrapVue from 'bootstrap-vue'
import VueYoutube from 'vue-youtube'
import VueParticles from 'vue-particles'
import ApiService from "./services/api.service";
/* import { TokenService } from "./services/storage.service"; */

var VueScrollTo = require('vue-scrollto');

Vue.use(VueParticles)
Vue.use(VueYoutube)
Vue.use(VueScrollTo)

Vue.use(BootstrapVue);

Vue.use(Scrollspy);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

ApiService.init();

/* if (TokenService.getToken()) {
  ApiService.setHeader();
}

localStorage.setItem("notificaciones",JSON.stringify([])); */