import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");