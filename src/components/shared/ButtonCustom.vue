<template>
  <button v-mobile-hover @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
const colorDefault = getComputedStyle(
  document.documentElement
).getPropertyValue("--color-tertiary");
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
          if (!el.parentNode.classList.contains("--disabled")) {
            el.style.backgroundColor = vNode.context.colorHover;
            if (binding.expression) {
              el.classList.add(binding.expression.replace(/'/g, ""));
            }
            setTimeout(() => {
              event.target.style.backgroundColor = "unset";
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
