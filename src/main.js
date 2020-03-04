import Vue from "vue";
import { registerComponents } from "./components/base/base.components";
registerComponents();

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import VModal from "vue-js-modal";
Vue.use(VModal, { dialog: true });

import Transitions from "vue2-transitions";
Vue.use(Transitions);

import MobileHoverDirective from "./directives/mobileHover.directive";
Vue.directive("mobile-hover", MobileHoverDirective);

import Ripple from "vue-ripple-directive";
Vue.directive("ripple", Ripple);
Ripple.color = "rgba(255, 255, 255, 0.35)";

import VueTextareaAutosize from "vue-textarea-autosize";
Vue.use(VueTextareaAutosize);

import VueHighlightJS from "vue-highlight.js";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import vue from "vue-highlight.js/lib/languages/vue";
import "highlight.js/styles/monokai-sublime.css";
Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    css,
    javascript,
    vue
  }
});

import VueConfetti from "vue-confetti";
Vue.use(VueConfetti);

import "./assets/styles/main.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
