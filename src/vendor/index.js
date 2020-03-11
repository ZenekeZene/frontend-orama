import VModal from "vue-js-modal";
import Transitions from "vue2-transitions";
import VueConfetti from "vue-confetti";
import VueKonva from "vue-konva";
import VueTextareaAutosize from "vue-textarea-autosize";

// Vue-HighLight-JS:
import VueHighlightJS from "vue-highlight.js";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import vue from "vue-highlight.js/lib/languages/vue";
import scss from "highlight.js/lib/languages/scss";
import "highlight.js/styles/monokai-sublime.css";

import Ripple from "vue-ripple-directive";

export default {
  install(Vue) {
    Vue.use(VModal, { dialog: true });
    Vue.use(Transitions);
    Vue.use(VueConfetti);
    Vue.use(VueKonva);
    Vue.use(VueTextareaAutosize);
    Vue.use(VueHighlightJS, {
      languages: {
        css,
        scss,
        javascript,
        vue
      }
    });

    Vue.directive("ripple", Ripple);
    Ripple.color = "rgba(255, 255, 255, 0.35)";
  }
};
