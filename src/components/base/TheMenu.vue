<template>
  <section class="menu">
    <AuthSignUp v-if="!user" key="auth-sign-up" />
    <BaseAvatar v-else key="avatar" name="ZenekeZene" level="Ninja Developer">
      <base-button
        @click="$router.push('ranking')"
        style="color: var(--color-secondary);"
        simple
        transparent
        v-ripple
        >Ver clasificación</base-button
      >
    </BaseAvatar>
    <contribute v-if="$route.path !== '/edit'"></contribute>
    <credits></credits>
    <base-version></base-version>
  </section>
</template>
<script>
import { mapState } from "vuex";
import AuthSignUp from "@/components/auth/AuthSignUp";
import Credits from "@/components/Credits";
import Contribute from "@/components/contribution/Contribute";

export default {
  name: "MenuCustom",
  components: {
    AuthSignUp,
    Credits,
    Contribute
  },
  computed: {
    ...mapState("user", ["user", "isLoggedIn"])
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
