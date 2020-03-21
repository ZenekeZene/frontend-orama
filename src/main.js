import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import IoC from "./ioc";
Vue.use(IoC);

import BaseComponents from "./components/base";
Vue.use(BaseComponents);

import VendorComponents from "./vendor";
Vue.use(VendorComponents);

import MobileHoverDirective from "./directives/mobileHover.directive";
Vue.directive("mobile-hover", MobileHoverDirective);

import "frontend-orama-ui/lib/styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
