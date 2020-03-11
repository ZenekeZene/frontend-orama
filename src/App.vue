<template>
  <main class="main" :class="{ '--expanded': expandedVisitBook }">
    <TheThemeSelect class="no-pusheable" />
    <VisitBook
      class="no-pusheable"
      @expandedVisitBook="expandedVisitBook = $event"
    />
    <article id="app" class="app">
      <router-view />
      <TheSidebar
        width="82%"
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
import { debounce } from "lodash";
import VisitBook from "@/components/VisitBook";

export default {
  name: "App",
  components: {
    VisitBook
  },
  data() {
    return {
      expandedVisitBook: false
    };
  },
  mounted() {
    this.$store.commit("resetPoints");
    // Hack mobile viewport with vh units:
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener(
      "resize",
      debounce(() => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }, 100)
    );
  }
};
</script>
style
