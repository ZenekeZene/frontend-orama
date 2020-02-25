<template>
  <article class="avatar">
    <h2>Buenos días, {{ name }}</h2>
    <section class="image">
      <img src="../assets/boy2.gif" :alt="`Avatar de ${name}`" />
      <span class="aka">{{ level }}</span>
    </section>
    <p class="points">
      Record:
      <span class="points__value">65</span>puntos.
    </p>
    <button simple color-secondary>Compartir</button>
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
    }
  }
};
</script>
<style lang="scss" scoped>
.avatar {
  margin-bottom: auto;

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
  height: 12rem;
  display: block;
  margin: 0;
  border-radius: 0.5rem;
}

.aka {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.3rem 0.7rem;
  color: var(--color-dark);
  background-color: var(--color-tertiary);
  border-radius: 5px;
}

.points {
  margin-bottom: 0.5rem;

  &__value {
    padding: 0 0.2rem;
    color: var(--color-secondary);
    font-size: 2rem;
  }
}
</style>
