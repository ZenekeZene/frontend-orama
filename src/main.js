import Vue from "vue";
import VModal from "vue-js-modal";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Transitions from "vue2-transitions";
import ButtonCustom from "./components/shared/ButtonCustom";
import HeaderNav from "./components/shared/HeaderNav";
import Avatar from "./components/avatar/Avatar";
import VueTextareaAutosize from "vue-textarea-autosize";
Vue.use(VueTextareaAutosize);
import VueHighlightJS from "vue-highlight.js";
// Highlight.js languages (Only required languages)
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import vue from "vue-highlight.js/lib/languages/vue";

/*
 * Import Highlight.js theme
 * Find more: https://highlightjs.org/static/demo/
 */
import "highlight.js/styles/monokai-sublime.css";
Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    css,
    javascript,
    vue
  }
});

Vue.use(Transitions);
Vue.component(ButtonCustom.name, ButtonCustom);
Vue.component(HeaderNav.name, HeaderNav);
Vue.component(Avatar.name, Avatar);

import "./assets/styles/main.scss";

Vue.use(VModal, { dialog: true });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
