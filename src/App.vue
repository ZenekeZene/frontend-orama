<template>
  <div id="app" class="app">
    <header-nav></header-nav>
    <fade-transition>
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
  }
};
</script>
