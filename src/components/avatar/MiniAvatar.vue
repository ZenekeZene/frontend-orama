<template>
  <article class="mini-avatar">
    <section class="image">
      <img src="../../assets/images/boy.gif" :alt="`Avatar de ${name}`" />
    </section>
    <p class="points">
      Has acertado 7 preguntas en
      <span class="time">5:12</span> minutos. Lo que te da:
      <span class="points__value">65</span> puntos. <br />Eres todo un
      <span>{{ level }}</span
      >.
    </p>
    <button-custom class="share" v-ripple simple color-secondary
      >Compartir resultado</button-custom
    >
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

  img {
    float: left;
    height: 5rem;
    margin-top: 0.2rem;
    margin-right: 1rem;
    border-radius: 7px;
  }

  .points {
    margin-bottom: 1rem;
    font-size: 1rem;

    &__value {
      font-size: 1.5rem;
    }
  }

  .aka {
    position: static;
    float: right;
    display: inline-block;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
  }

  .share {
    margin-bottom: 1rem;
  }
}
</style>
