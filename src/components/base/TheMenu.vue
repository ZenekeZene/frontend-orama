<template>
  <section class="menu">
    <Auth v-if="!user" key="auth-sign-up" />
    <BaseAvatar
      v-else
      key="avatar"
      name="ZenekeZene"
      level="Ninja Developer"
    ></BaseAvatar>
    <section v-if="user">
      <p class="heading">
        <span>TOP 3:</span>
      </p>
      <RankingTable :numPlayers="3" isMini />
      <base-button
        @click="$router.push('ranking')"
        class="see-ranking"
        style="color: var(--color-secondary)"
        m-b-0
        simple
        transparent
        v-ripple
        >Ver toda la clasificación</base-button
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
import Auth from "@/components/auth/Auth";
import Credits from "@/components/Credits";
import Contribute from "@/components/contribution/Contribute";
import Promo from "@/components/contribution/Promo";
import RankingTable from "@/components/ranking/RankingTable";

export default {
  name: "MenuCustom",
  components: {
    Auth,
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
.see-ranking {
  text-decoration: underline;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  background-color: var(--color-dark);

  .heading {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    padding-left: 1rem;

    span {
      min-width: 4rem;
      padding-left: 1rem;
    }
  }
}
</style>
