<template>
  <div id="app" class="app">
    <router-view @onToggleCollapse="isCollapsed = $event" />
    <side-menu
      :isCollapsed="isCollapsed"
      width="70%"
      duration="450ms"
      easing="ease-in-out"
      side="right"
    >
      <menu-custom></menu-custom>
    </side-menu>
  </div>
</template>
<script>
import SideMenu from "@/components/shared/SideMenu";
import MenuCustom from "@/components/shared/MenuCustom";

export default {
  name: "App",
  components: {
    SideMenu,
    MenuCustom
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  mounted() {
    // Hack mobile viewport with vh units:
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
};
</script>
