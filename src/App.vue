<template>
  <div id="app" class="app">
    <header-nav></header-nav>
    <fade-transition :duration="100">
      <router-view />
    </fade-transition>
  </div>
</template>
<script>
import HeaderNav from "./components/HeaderNav";
export default {
  name: "App",
  components: {
    HeaderNav
  },
  mounted() {
    // Hack mobile viewport with vh units:
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
};
</script>
