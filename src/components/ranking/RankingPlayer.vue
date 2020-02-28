<template>
  <button-custom simple transparent v-ripple class="ranking-player">
    <img src="../../assets/images/boy.gif" />
    <div class="info">
      <span class="name">{{ player.name }}</span>
      <span class="message">- {{ player.message }}</span>
    </div>
    <span class="value">{{ player.record }}</span>
  </button-custom>
</template>
<script>
export default {
  name: "RankingPlayer",
  props: {
    player: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style lang="scss">
.ranking-player {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0;

  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    padding-left: 1rem;
  }

  img {
    $size: 3rem;
    width: $size;
    min-width: $size;
    height: $size;
    border-radius: 1rem;
  }

  > span {
    display: flex;
    align-items: center;
    color: white;
    width: 3rem;
    justify-content: center;
  }

  .value {
    padding: 0.5rem;
    background: var(--color-tertiary);
    color: var(--color-dark);
    border-radius: 7px;
  }

  .message {
    text-align: left;
    color: white;
    font-style: italic;
  }

  .name {
    color: var(--color-secondary);
  }
}
</style>
