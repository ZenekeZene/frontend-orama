<template>
  <section class="header">
    <span class="header-nav icon-menu" @click="toggleMenu"></span>
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
    toggleMenu() {
      this.isSidebarOpened = !this.isSidebarOpened;
      this.$emit("toggleMenu", this.isSidebarOpened);
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

  &-nav {
    position: absolute;
    right: 0;
    top: -5px;
    z-index: 3;
    padding: 1.5rem;
    font-size: 1.2rem;
  }
}
</style>
