<template>
  <article page>
    <header-nav
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      title="Test finalizado"
      :withBack="false"
    ></header-nav>
    <div class="result" style="max-height: 40rem; overflow-y: auto;">
      <h1 style="text-align: center;">
        Resultado: {{ points }} / {{ totalQuestions }}
      </h1>
      <avatar
        name="ZenekeZene"
        level="Ninja Developer"
        :withGreetins="false"
      ></avatar>
      <p style="padding: 1rem 0;">Ranking global</p>
      <ranking-table></ranking-table>
    </div>
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
    ...mapState(["points", "totalQuestions"])
  },
  methods: {
    goToStart() {
      this.$router.push("/");
    }
  }
};
</script>
