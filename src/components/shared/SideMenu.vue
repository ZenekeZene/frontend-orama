<template>
  <nav class="side-menu" :style="cssProps">
    <slot></slot>
  </nav>
</template>
<script>
export default {
  name: "SideMenu",
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "60%"
    },
    duration: {
      type: String,
      default: "100ms"
    },
    easing: {
      type: String,
      default: "ease-in"
    }
  },
  computed: {
    cssProps() {
      return {
        'transform': `translateX(${this.isCollapsed ? "0%" : "100%"})`
      };
    },
    pushed() {
      return `${this.transition}; transform: translateX(-${this.width});`;
    },
    pulled() {
      return `${this.transition}; transform: translateX(0%);`;
    },
    transition() {
      return `transition: transform ${this.duration} ${this.easing}`;
    }
  },
  watch: {
    isCollapsed: {
      handler(value) {
        this.loopSiblings(
          node => (node.$el.style = value ? this.pushed : this.pulled)
        );
      }
    }
  },
  mounted() {
    this.widthLocal = this.width;
    this.loopSiblings(node => (node.$el.style = this.pulled));
    this.$el.style = `width: ${this.width}; ${this.transition}; transform: translateX(100%)`;
  },
  methods: {
    loopSiblings(iterationCallback) {
      this.$parent.$children.forEach(node => {
        if (!node.$el.classList.contains("side-menu")) {
          iterationCallback(node);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.side-menu {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: var(--color-dark);

  & > * {
    margin-bottom: 1rem;
    padding: 1rem;
  }
}
</style>
