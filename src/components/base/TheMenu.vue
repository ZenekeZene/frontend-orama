<template>
  <section class="menu">
    <AuthSignUp v-if="!user" key="auth-sign-up" />
    <BaseAvatar
      v-else
      key="avatar"
      name="ZenekeZene"
      level="Ninja Developer"
    ></BaseAvatar>
    <section v-if="user">
      <p class="heading">
        <span>TOP 3:</span>
        <base-button
          @click="$router.push('ranking')"
          m-b-0
          style="color: var(--color-secondary);"
          simple
          transparent
          v-ripple
          >Ver clasificación</base-button
        >
      </p>
      <RankingTable :numPlayers="3" />
      <base-button simple v-ripple style="color: white" transparent
        >Salir</base-button
      >
    </section>
    <Contribute v-if="$route.path !== '/edit' && user" />
    <Promo v-if="!user" />
    <Credits />
    <BaseVersion />
  </section>
</template>
<script>
import { mapState } from "vuex";
import AuthSignUp from "@/components/auth/AuthSignUp";
import Credits from "@/components/Credits";
import Contribute from "@/components/contribution/Contribute";
import Promo from "@/components/contribution/Promo";
import RankingTable from "@/components/ranking/RankingTable";

export default {
  name: "MenuCustom",
  components: {
    AuthSignUp,
    Credits,
    Contribute,
    Promo,
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
    display: flex;
    margin-bottom: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
  }
}
</style>
