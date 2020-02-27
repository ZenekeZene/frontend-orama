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
      <p style="padding: 1rem 0;">Ranking global</p>
      <ranking-table></ranking-table>
    </div>
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
