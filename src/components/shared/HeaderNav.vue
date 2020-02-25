<template>
  <section class="header">
    <span class="--left icon-forward" @click="goBack"></span>
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
  methods: {
    onToggleCollapse() {
      this.isSidebarOpened = !this.isSidebarOpened;
      this.$emit("onToggleCollapse", this.isSidebarOpened);
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
.header {
  display: block;
  height: auto;
  width: 100%;
  height: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  transition: transform 250ms linear;

  > span {
    position: absolute;
    top: -5px;
    z-index: 3;
    padding: 1.5rem;
    font-size: 1.2rem;

    &.--left {
      left: 0;
    }

    &.--right {
      right: 0;
    }
  }
}
</style>
