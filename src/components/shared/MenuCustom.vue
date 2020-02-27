<template>
  <section class="menu">
    <avatar name="ZenekeZene" level="Ninja Developer">
      <button-custom
        @click="$router.push('ranking')"
        style="color: var(--color-secondary);"
        simple
        transparent
        v-ripple
        >Ver clasificación</button-custom
      >
    </avatar>
    <contribute v-if="$route.path !== '/edit'"></contribute>
    <credits></credits>
    <version></version>
  </section>
</template>
<script>
import Version from "@/components/shared/Version";
import Credits from "@/components/Credits";
import Contribute from "@/components/contribution/Contribute";

export default {
  name: "MenuCustom",
  components: {
    Version,
    Credits,
    Contribute
  }
};
</script>
<style lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  background-color: var(--color-dark);
}
</style>
