<template>
  <section class="header">
    <span v-if="withBack" class="--left icon-forward" @click="goBack"></span>
    <h1>{{ title }}</h1>
    <span
      v-if="withMenu"
      class="--right icon-menu"
      @click="onToggleCollapse"
    ></span>
    <span
      v-if="withClose && !withMenu"
      class="--right icon-close"
      @click="goHome"
    ></span>
  </section>
</template>
<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      isSidebarOpened: false
    };
  },
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
  methods: {
    onToggleCollapse() {
      this.isSidebarOpened = !this.isSidebarOpened;
      this.$emit("onToggleCollapse", this.isSidebarOpened);
    },
    goBack() {
      this.isSidebarOpened = false;
      this.$emit("onToggleCollapse", this.isSidebarOpened);
      this.$emit("goBack");
    },
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/styles/base/breakpoints.scss";

.header {
  position: relative;
  display: block;
  width: 100%;
  height: 4rem;

  > span {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    padding: 1.5rem;
    font-size: 1.2rem;

    &.--left {
      left: 0;
    }

    &.--right {
      right: 0;
      left: unset;
    }
  }

  h1 {
    font-family: "Museo Sans Rounded 700";
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;

    @include mq($until: phablet) {
      font-size: 1.3rem;
    }
  }

  .icon-forward {
    transform: rotateZ(180deg);
  }
}
</style>
