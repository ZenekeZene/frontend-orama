<template>
  <section class="menu">
    <base-avatar name="ZenekeZene" level="Ninja Developer">
      <base-button
        @click="$router.push('ranking')"
        style="color: var(--color-secondary);"
        simple
        transparent
        v-ripple
        >Ver clasificación</base-button
      >
    </base-avatar>
    <contribute v-if="$route.path !== '/edit'"></contribute>
    <credits></credits>
    <base-version></base-version>
  </section>
</template>
<script>
import BaseVersion from "@/components/base/BaseVersion";
import Credits from "@/components/Credits";
import Contribute from "@/components/contribution/Contribute";

export default {
  name: "MenuCustom",
  components: {
    BaseVersion,
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
