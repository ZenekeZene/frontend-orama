<template>
  <article page class="column-with-scroll">
    <header-nav
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      @goBack="$router.back()"
      title="Clasificación"
      :withBack="true"
      :withMenu="false"
      :withClose="false"
    ></header-nav>
    <div class="ranking-table-wrapper">
      <ranking-table></ranking-table>
    </div>
  </article>
</template>
<script>
import RankingTable from "@/components/ranking/RankingTable";
export default {
  name: "Ranking",
  components: {
    RankingTable
  }
};
</script>
