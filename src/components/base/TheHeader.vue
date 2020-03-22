<template>
  <header class="header">
    <span
      v-if="withBack"
      class="--left icon-forward"
      v-mobile-hover:#4992a9
      @click="goBack"
    ></span>
    <h1>{{ title }}</h1>
    <svg
      v-if="withMenu"
      class="ham hamRotate ham7 icon --right"
      :class="wasSidebarOpened ? 'active' : null"
      viewBox="0 0 100 100"
      width="80"
      v-mobile-hover:#4992a9
      @click="onToggleCollapse"
    >
      <path
        class="line top"
        d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
      />
      <path class="line middle" d="m 70,50 h -40" />
      <path
        class="line bottom"
        d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
      />
    </svg>
    <span
      v-if="withClose && !withMenu"
      class="--right icon-close"
      v-mobile-hover:#4992a9
      @click="goHome"
    ></span>
  </header>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "TheHeader",
  props: {
    title: {
      type: String,
      default: "Front-End-ORAMA"
    },
    withBack: {
      type: Boolean,
      default: false
    },
    withMenu: {
      type: Boolean,
      default: true
    },
    withClose: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState("user", ["wasSidebarOpened"])
  },
  methods: {
    ...mapMutations("user", ["toggleSidebar", "setWasSidebarOpened"]),
    onToggleCollapse() {
      this.toggleSidebar();
    },
    goBack() {
      this.setWasSidebarOpened({ setWasSidebarOpened: false });
      this.$emit("goBack");
    },
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
.header {
  position: relative;
  display: block;
  width: 100%;
  height: 4rem;

  > span,
  > .icon {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    padding: 1.5rem;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .--left {
    left: 0;
  }

  .--right {
    right: 0;
    left: unset;
  }

  > .icon {
    top: -0.5rem;
    right: -0.4rem;
    padding: 0.9rem;
    stroke: white;
  }

  h1 {
    font-family: "Museo Sans Rounded 700";
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
  }

  .icon-forward {
    transform: rotateZ(180deg);
  }
}
</style>
