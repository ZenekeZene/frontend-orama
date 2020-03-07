<template>
  <section class="menu">
    <AuthSignUp v-if="!user" key="auth-sign-up" />
    <BaseAvatar v-else key="avatar" name="ZenekeZene" level="Ninja Developer">
    </BaseAvatar>
    <section v-if="user">
      <p class="heading">TOP 3:</p>
      <RankingTable :numPlayers="3" />
      <base-button
        @click="$router.push('ranking')"
        m-b-0
        style="color: var(--color-secondary);"
        simple
        transparent
        v-ripple
        >Ver toda la clasificación</base-button
      >
    </section>
    <Contribute v-if="$route.path !== '/edit'" />
    <Credits />
    <BaseVersion />
  </section>
</template>
<script>
import { mapState } from "vuex";
import AuthSignUp from "@/components/auth/AuthSignUp";
import Credits from "@/components/Credits";
import Contribute from "@/components/contribution/Contribute";
import RankingTable from "@/components/ranking/RankingTable";

export default {
  name: "MenuCustom",
  components: {
    AuthSignUp,
    Credits,
    Contribute,
    RankingTable
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

  .heading {
    margin-bottom: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
}
</style>
