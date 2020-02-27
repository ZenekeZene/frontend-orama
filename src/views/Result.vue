<template>
  <article page>
    <header-nav
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      title="Test finalizado"
      :withBack="false"
      :withMenu="false"
      :withClose="true"
    ></header-nav>
    <div class="result" style="max-height: 40rem; overflow-y: auto;">
      <mini-avatar name="ZenekeZene" level="Ninja Developer"></mini-avatar>
    </div>
    <p style="padding: 1rem 2rem 1rem;">Ranking global</p>
    <section class="ranking-wrapper">
      <ranking-table></ranking-table>
    </section>
  </article>
</template>
<script>
import { mapState } from "vuex";
import MiniAvatar from "@/components/MiniAvatar";
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
<style scoped>
.ranking-wrapper {
  padding: 0 2rem 3rem 2rem;
  overflow-y: auto;
  height: calc(100vh - 4rem - 10rem);
}
</style>
