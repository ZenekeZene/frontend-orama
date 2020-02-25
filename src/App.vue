<template>
  <div id="app" class="app">
    <header-nav @onToggleCollapse="isCollapsed = $event"></header-nav>
    <fade-transition :duration="100">
      <router-view />
    </fade-transition>
    <side-menu :isCollapsed="isCollapsed" :width="70">
      <avatar name="ZenekeZene" level="Ninja Developer"></avatar>
      <contribute></contribute>
      <credits></credits>
      <version></version>
    </side-menu>
  </div>
</template>
<script>
import HeaderNav from "@/components/shared/HeaderNav";
import SideMenu from "@/components/shared/SideMenu";
import Version from "@/components/shared/Version";
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
    Contribute,
    Version
  },
  data() {
    return {
      isCollapsed: false
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
