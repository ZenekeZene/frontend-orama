<template>
  <button v-mobile-hover @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ButtonCustom",
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
  },
  props: {
    colorHover: {
      type: String,
      default: () =>
        getComputedStyle(document.documentElement).getPropertyValue(
          "--color-secondary"
        )
    }
  },
  computed: {
    defaultColor() {
      return "#4992a9";
    }
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>
