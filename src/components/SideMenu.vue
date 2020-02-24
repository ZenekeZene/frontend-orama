<template>
  <section class="side-menu" :class="{ '--open': toggleMenu }">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "SideMenu",
  props: {
    toggleMenu: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
.side-menu {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 60%;
  height: 100%;
  transform: translateX(100%);
  background-color: var(--color-dark);
  transition: transform 250ms linear;

  & > * {
    margin-bottom: 1rem;
    padding: 1rem;
  }
}
</style>
