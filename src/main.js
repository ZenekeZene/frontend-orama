import Vue from "vue";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
/* eslint-disable no-unused-vars */
import components from "./components/base";
import vendor from "./vendor";

import MobileHoverDirective from "./directives/mobileHover.directive";
Vue.directive("mobile-hover", MobileHoverDirective);

import "./assets/styles/main.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
