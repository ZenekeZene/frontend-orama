import Vue from "vue";
import Vuec from "vue-container";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AuthGithubService from "./auth/AuthGithubService";
import AuthGoogleService from "./auth/AuthGoogleService";
import AuthTwitterService from "./auth/AuthTwitterService";

import BaseComponents from "./components/base";
Vue.use(BaseComponents);

import VendorComponents from "./vendor";
Vue.use(VendorComponents);

import MobileHoverDirective from "./directives/mobileHover.directive";
Vue.directive("mobile-hover", MobileHoverDirective);

import "./assets/styles/main.scss";

Vue.config.productionTip = false;

Vue.use(Vuec);
Vue.$ioc.register("$authGithubService", new AuthGithubService());
Vue.$ioc.register("$authGoogleService", new AuthGoogleService());
Vue.$ioc.register("$authTwitterService", new AuthTwitterService());

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
