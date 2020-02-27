<template>
  <article class="mini-avatar">
    <section class="image">
      <img src="../assets/boy2.gif" :alt="`Avatar de ${name}`" />
    </section>
    <p class="points">
      Has acertado <span class="color-secondary">7</span> preguntas en
      <span class="time">5:12</span> minutos. Lo que te da:
      <span class="points__value">65 puntos</span><br />
      Eres todo un
      <span class="aka">{{ level }}</span>
    </p>
    <button simple color-secondary>Compartir resultado</button>
  </article>
</template>
<script>
export default {
  name: "MiniAvatar",
  props: {
    name: {
      type: String,
      default: "Aureliano Buendía"
    },
    level: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.mini-avatar {
  position: relative;

  .time {
    color: var(--color-secondary);
  }

  img {
    float: left;
    height: 5rem;
    margin-top: 0.3rem;
    margin-right: 1rem;
    border-radius: 7px;
  }

  .points {
    margin-bottom: 3rem;

    &__value {
      padding: 0 0.2rem;
      color: var(--color-dark);
      background-color: var(--color-tertiary);
      border-radius: 5px;
    }
  }

  .aka {
    position: static;
    float: right;
    display: inline-block;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
  }
}
.color-secondary {
  color: var(--color-secondary);
}
</style>
