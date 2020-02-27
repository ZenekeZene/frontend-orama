<template>
  <article class="avatar">
    <h2 v-if="withGreetins">Buenos días, {{ name }}</h2>
    <section class="image">
      <img src="../../assets/images/boy.gif" :alt="`Avatar de ${name}`" />
      <span class="aka">{{ level }}</span>
    </section>
    <p class="points">
      Record:
      <span class="points__value">65</span>puntos.
    </p>
    <button-custom simple v-ripple color-secondary>Compartir</button-custom>
  </article>
</template>
<script>
export default {
  name: "Avatar",
  props: {
    name: {
      type: String,
      default: "Aureliano Buendía"
    },
    level: {
      type: String,
      default: ""
    },
    withGreetins: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="scss" scoped>
.avatar {
  margin-bottom: auto;
  padding: 1rem;

  > * {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.image {
  position: relative;
  margin-bottom: 0;
}

img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 0.5rem;
}

.points {
  margin-bottom: 0.5rem;

  &__value {
    padding: 0 0.2rem;
    color: var(--color-tertiary);
    font-size: 2rem;
  }
}
</style>
