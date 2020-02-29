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
    <canvas id="conffeti-canvas" class="confetti"></canvas>
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
  mounted() {
    this.$confetti.start({
      canvasId: "conffeti-canvas",
      defaultDropRate: 10,
      particles: [{ type: "heart" }]
    });
    setTimeout(() => {
      this.$confetti.stop();
    }, 2000);
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
.confetti {
  position: absolute;
  top: -1rem;
  left: -1rem;
  width: calc(100% + 2rem);
}
</style>
