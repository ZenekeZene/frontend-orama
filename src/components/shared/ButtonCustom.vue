<template>
  <button v-mobile-hover @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
const colorDefault = getComputedStyle(
  document.documentElement
).getPropertyValue("--color-secondary");

export default {
  name: "ButtonCustom",
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    }
  },
  props: {
    colorHover: {
      type: String,
      default: () => colorDefault
    }
  },
  computed: {
    defaultColor() {
      return "#4992a9";
    }
  },
  directives: {
    mobileHover: {
      inserted: (el, binding, vNode) => {
        el.addEventListener("touchstart", event => {
          if (el.hasAttribute("transparent")) return false;
          const colorInitial = el.style.background;
          if (!el.parentNode.classList.contains("--disabled")) {
            el.style.background = vNode.context.colorHover;
            if (binding.expression) {
              el.classList.add(binding.expression.replace(/'/g, ""));
            }
            setTimeout(() => {
              event.target.style.background = colorInitial;
              if (binding.expression) {
                el.classList.remove(binding.expression.replace(/'/g, ""));
              }
            }, 250);
          }
        });
      }
    }
  }
};
</script>
