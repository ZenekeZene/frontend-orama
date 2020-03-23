<template>
  <main
    class="main"
    :class="{
      '--expanded': expandedVisitBook,
      '--intro': !tutorialWasLaunched
    }"
    v-touch:swipe.left="swipeHandlerLeft"
    v-touch:swipe.right="swipeHandlerRight"
  >
    <TheThemeSelect class="no-pusheable" v-if="tutorialWasLaunched" />
    <VisitBook
      class="no-pusheable"
      @expandedVisitBook="expandedVisitBook = $event"
      v-if="tutorialWasLaunched"
    />
    <Intro v-if="!tutorialWasLaunched" class="no-pusheable" />
    <article id="app" class="app" :class="{ mini: !tutorialWasLaunched }">
      <router-view @wasLaunched="setTutorialWasLaunched(true)" />
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
import TheMenu from "@/components/TheMenu";
import { mapState, mapMutations } from "vuex";
import { debounce } from "lodash";
import VisitBook from "@/components/VisitBook";
import Intro from "@/views/Intro";

export default {
  name: "App",
  components: {
    VisitBook,
    TheMenu,
    Intro
  },
  computed: {
    ...mapState("user", ["wasSidebarOpened", "tutorialWasLaunched"])
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
    ...mapMutations("user", ["setWasSidebarOpened", "setTutorialWasLaunched"]),
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
<style lang="scss">
.mini {
  transform: scale(0.5);
}

.--intro {
  display: flex;
}
</style>
