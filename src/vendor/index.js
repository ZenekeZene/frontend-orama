import Vue from "vue";
import VModal from "vue-js-modal";
import Transitions from "vue2-transitions";
import Ripple from "vue-ripple-directive";
import VueConfetti from "vue-confetti";

// Vue-HighLight-JS:
import VueTextareaAutosize from "vue-textarea-autosize";
import VueHighlightJS from "vue-highlight.js";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import vue from "vue-highlight.js/lib/languages/vue";
import "highlight.js/styles/monokai-sublime.css";

(() => {
  Vue.use(VModal, { dialog: true });
  Vue.use(Transitions);
  Vue.use(VueConfetti);
  Vue.use(VueTextareaAutosize);
  Vue.use(VueHighlightJS, {
    languages: {
      css,
      javascript,
      vue
    }
  });

  Vue.directive("ripple", Ripple);
  Ripple.color = "rgba(255, 255, 255, 0.35)";
})();
