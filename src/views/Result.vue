<template>
  <article page class="result column-with-scroll">
    <TheHeader
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      title="Test finalizado"
      :with-back="false"
      :with-menu="false"
      :with-close="true"
    />
    <section class="result__avatar">
      <BaseMiniAvatar name="ZenekeZene" level="Ninja Developer" />
    </section>
    <canvas id="conffeti-canvas" class="confetti"></canvas>
    <p m-b-0 class="ranking-table-title">Clasificación</p>
    <section class="ranking-table-wrapper">
      <RankingTable />
    </section>
  </article>
</template>
<script>
import { mapState } from "vuex";
import RankingTable from "@/components/ranking/RankingTable";

export default {
  name: "Result",
  components: {
    RankingTable
  },
  computed: {
    ...mapState(["points"])
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
