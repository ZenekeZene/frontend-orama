<template>
  <section
    class="side-menu"
    :class="{ '--open': isCollapsed }"
    :style="cssProps"
  >
    <slot></slot>
  </section>
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
      type: Number,
      default: 60
    },
    duration: {
      type: Number,
      default: 100
    }
  },
  computed: {
    cssProps() {
      return {
        "--widthSide": `${this.widthLocal}%`,
        "--offsetX": this.isCollapsed ? "0%" : "100%"
      };
    }
  },
  data() {
    return {
      widthLocal: 100
    };
  },
  watch: {
    isCollapsed: {
      handler(newVal) {
        if (newVal) {
          this.loopSiblings(node => {
            node.$el.style = `transform: translateX(-${this.width}%);`;
          });
        } else {
          this.loopSiblings(node => {
            node.$el.style = "transform: translateX(0%);";
          });
        }
      }
    }
  },
  mounted() {
    this.widthLocal = this.width;
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
  --offsetX: 100%;
  --widthSide: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: var(--widthSide);
  height: 100%;
  background-color: var(--color-dark);
  transition: transform 250ms linear;
  transform: translateX(var(--offsetX));

  & > * {
    margin-bottom: 1rem;
    padding: 1rem;
  }
}
</style>
