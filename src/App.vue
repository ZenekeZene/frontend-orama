<template>
  <main
    class="main"
    :class="{ '--expanded': expandedVisitBook }"
    v-touch:swipe.left="swipeHandlerLeft"
    v-touch:swipe.right="swipeHandlerRight"
  >
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
import { mapState, mapMutations } from "vuex";
import { debounce } from "lodash";
import VisitBook from "@/components/VisitBook";

export default {
  name: "App",
  components: {
    VisitBook
  },
  computed: {
    ...mapState("user", ["wasSidebarOpened"])
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
  },
  methods: {
    ...mapMutations("user", ["setWasSidebarOpened"]),
    swipeHandlerLeft() {
      if (!this.wasSidebarOpened) {
        this.setWasSidebarOpened({ wasSidebarOpened: true });
      }
    },
    swipeHandlerRight() {
      if (this.wasSidebarOpened) {
        this.setWasSidebarOpened({ wasSidebarOpened: false });
      }
    }
  }
};
</script>
style
