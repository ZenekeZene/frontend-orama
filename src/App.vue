<template>
  <div id="app" class="app" :class="{ '--side-menu-opened': sideMenuStatus }">
    <header-nav @toggleMenu="sideMenuStatus = $event"></header-nav>
    <fade-transition :duration="100">
      <router-view />
    </fade-transition>
    <side-menu :toggleMenu="sideMenuStatus">
      <span class="version">v0.1.2</span>
      <avatar></avatar>
      <contribute></contribute>
      <credits></credits>
    </side-menu>
  </div>
</template>
<script>
import HeaderNav from "@/components/HeaderNav";
import SideMenu from "@/components/SideMenu";
import Avatar from "@/components/Avatar";
import Credits from "@/components/Credits";
import Contribute from "@/components/Contribute";

export default {
  name: "App",
  components: {
    HeaderNav,
    SideMenu,
    Avatar,
    Credits,
    Contribute
  },
  data() {
    return {
      sideMenuStatus: false
    };
  },
  mounted() {
    // Hack mobile viewport with vh units:
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
};
</script>
<style lang="scss">
.--side-menu-opened > * {
  transition: transform 250ms linear;
  transform: translateX(-60%) !important;

  &.side-menu {
    transform: translateX(0%) !important;
  }
}
</style>
