<template>
  <section>
    <span class="header-nav icon-menu"></span>
    <span class="version">v0.1.2</span>
  </section>
</template>
<script>
export default {
  name: "HeaderNav"
};
</script>
<style lang="scss">
.header-nav {
  position: absolute;
  right: 0;
  top: -5px;
  z-index: 3;
  padding: 1.5rem;
  font-size: 1.2rem;
}
</style>
