<template>
  <div id="app" class="app">
    <router-view @onToggleCollapse="isCollapsed = $event" />
    <side-menu
      :isCollapsed="isCollapsed"
      width="70%"
      duration="450ms"
      easing="ease-in-out"
      side="right"
      :withClose="true"
    >
      <avatar name="ZenekeZene" level="Ninja Developer"></avatar>
      <contribute @onToggleCollapse="isCollapsed = $event"></contribute>
      <credits></credits>
      <version></version>
    </side-menu>
  </div>
</template>
<script>
import SideMenu from "@/components/shared/SideMenu";
import Version from "@/components/shared/Version";
import Avatar from "@/components/Avatar";
import Credits from "@/components/Credits";
import Contribute from "@/components/Contribute";

export default {
  name: "App",
  components: {
    SideMenu,
    Avatar,
    Credits,
    Contribute,
    Version
  },
  data() {
    return {
      isCollapsed: false,
      refPage: null
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
