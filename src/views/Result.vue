<template>
  <article page class="result column-with-scroll">
    <header-nav
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      title="Test finalizado"
      :withBack="false"
      :withMenu="false"
      :withClose="true"
    ></header-nav>
    <section class="result__avatar">
      <mini-avatar name="ZenekeZene" level="Ninja Developer"></mini-avatar>
    </section>
    <p class="ranking-table-title">Clasificación</p>
    <section class="ranking-table-wrapper">
      <ranking-table></ranking-table>
    </section>
  </article>
</template>
<script>
import { mapState } from "vuex";
import MiniAvatar from "@/components/avatar/MiniAvatar";
import RankingTable from "@/components/ranking/RankingTable";
export default {
  name: "Result",
  components: {
    RankingTable,
    MiniAvatar
  },
  computed: {
    ...mapState(["points", "totalQuestions"])
  },
  methods: {
    goToStart() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
.result {
  &__avatar {
    padding-right: 2rem;
    padding-left: 2rem;

    h1 {
      margin-bottom: 1rem;
      text-align: center;
    }
  }
}
</style>
