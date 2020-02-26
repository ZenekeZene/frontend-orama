<template>
  <section class="header">
    <span v-if="withBack" class="--left icon-forward" @click="goBack"></span>
    <h1>{{ title }}</h1>
    <span class="--right icon-menu" @click="onToggleCollapse"></span>
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
      this.$router.go(-1);
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
  }
}
</style>
