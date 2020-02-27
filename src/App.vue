<template>
  <main class="main">
    <theme-select class="no-pusheable"></theme-select>
    <visit-book class="no-pusheable"></visit-book>
    <article id="app" class="app">
      <fade-transition mode="in-out">
        <router-view @onToggleCollapse="isCollapsed = $event" />
      </fade-transition>
      <side-menu
        :isCollapsed="isCollapsed"
        width="70%"
        duration="450ms"
        easing="ease-in-out"
        side="right"
      >
        <menu-custom></menu-custom>
      </side-menu>
    </article>
  </main>
</template>
<script>
import ThemeSelect from "@/components/ThemeSelect";
import VisitBook from "@/components/VisitBook";
import SideMenu from "@/components/shared/SideMenu";
import MenuCustom from "@/components/shared/MenuCustom";

export default {
  name: "App",
  components: {
    ThemeSelect,
    SideMenu,
    MenuCustom,
    VisitBook
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
