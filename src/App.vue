<template>
  <main class="main" :class="{ '--expanded': expandedVisitBook }">
    <TheThemeSelect class="no-pusheable" />
    <VisitBook
      class="no-pusheable"
      @expandedVisitBook="expandedVisitBook = $event"
    />
    <article id="app" class="app">
      <fade-transition mode="in-out">
        <router-view @onToggleCollapse="isCollapsed = $event" />
      </fade-transition>
      <TheSidebar
        :is-collapsed="isCollapsed"
        width="70%"
        duration="450ms"
        easing="ease-in-out"
        side="right"
      >
        <TheMenu />
      </TheSidebar>
    </article>
  </main>
</template>
<script>
import VisitBook from "@/components/VisitBook";

export default {
  name: "App",
  components: {
    VisitBook
  },
  data() {
    return {
      isCollapsed: false,
      expandedVisitBook: false
    };
  },
  mounted() {
    this.$store.commit("resetPoints");
    // Hack mobile viewport with vh units:
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
};
</script>
style
