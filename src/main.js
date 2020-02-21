import Vue from "vue";
import VModal from "vue-js-modal";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Transitions from "vue2-transitions";
import ButtonCustom from "./components/ButtonCustom";
Vue.use(Transitions);
Vue.component(ButtonCustom.name, ButtonCustom);

import "./assets/styles/main.scss";

Vue.use(VModal, { dialog: true });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
