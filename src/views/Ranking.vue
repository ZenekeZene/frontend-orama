<template>
  <article page class="column-with-scroll">
    <TheHeader
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      @goBack="$router.back()"
      title="Clasificación"
      :withBack="true"
      :withMenu="false"
      :withClose="false"
    />
    <div class="ranking-table-wrapper">
      <Ranking-table />
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
