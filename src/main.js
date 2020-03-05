import Vue from "vue";
import Vuec from "vue-container";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AuthService from "./auth/AuthService";

import BaseComponents from "./components/base";
Vue.use(BaseComponents);

import VendorComponents from "./vendor";
Vue.use(VendorComponents);

import MobileHoverDirective from "./directives/mobileHover.directive";
Vue.directive("mobile-hover", MobileHoverDirective);

import "./assets/styles/main.scss";

Vue.config.productionTip = false;

Vue.use(Vuec);
Vue.$ioc.register("$authService", new AuthService());
Vue.$ioc.register("$githubAuthService", new AuthService("GithubAuthProvider"));
Vue.$ioc.register("$googleAuthService", new AuthService("GoogleAuthProvider"));
Vue.$ioc.register(
  "$twitterAuthService",
  new AuthService("TwitterAuthProvider")
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
