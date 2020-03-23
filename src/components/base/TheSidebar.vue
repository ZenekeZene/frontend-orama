<template>
  <nav class="side-menu" :style="cssProps">
    <span v-if="withClose" @click="toggleSidebar">X</span>
    <slot></slot>
  </nav>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TheSidebar",
  props: {
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
    },
    side: {
      type: String,
      default: "right"
    },
    withClose: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState("user", ["wasSidebarOpened"]),
    cssProps() {
      const direction = this.side === "left" ? -1 : 1;
      return {
        transform: `translateX(${
          this.wasSidebarOpened ? 0 : direction * 101 + "%"
        })`
      };
    },
    pushed() {
      const direction = this.side === "left" ? 1 : -1;
      const offset = this.width.split("%")[0] * direction;
      return `translateX(${offset}%)`;
    },
    pulled() {
      return `translateX(0%)`;
    },
    transition() {
      return `transform ${this.duration} ${this.easing}`;
    }
  },
  watch: {
    wasSidebarOpened: {
      handler(newVal) {
        this.loopSiblings(node => {
          node.$el.style.transform = newVal ? this.pushed : this.pulled;
        });
      }
    },
    $route() {
      this.loopSiblings(node => {
        node.$el.style.transform = this.pulled;
        node.$el.style.transition = this.transition;
      });
      this.setWasSidebarOpened({ wasSidebarOpened: false });
    }
  },
  mounted() {
    this.loopSiblings(node => {
      node.$el.style.transform = this.wasSidebarOpened
        ? this.pushed
        : this.pulled;
      node.$el.style.transition = this.transition;
    });
    this.$el.style.width = this.width;
    this.$el.style[this.side] = 0;
    this.$el.style.transition = this.transition;
  },
  methods: {
    ...mapMutations("user", ["setWasSidebarOpened", "toggleSidebar"]),
    loopSiblings(iterationCallback) {
      this.$parent.$children.forEach(node => {
        if (
          node.$el &&
          !node.$el.classList.contains("side-menu") &&
          !node.$el.classList.contains("no-pusheable")
        ) {
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
  width: 100%;
  height: 100%;
}
</style>
