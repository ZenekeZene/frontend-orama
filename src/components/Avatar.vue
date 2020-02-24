<template>
  <article class="avatar">
    <h2>Buenos días, Zenekezene</h2>
    <section class="avatar__image">
      <img src="../assets/boy2.gif" alt />
      <span class="aka">Ninja Developer</span>
    </section>
    <p class="points">Record:<span class="points__value">65</span>puntos.</p>
    <button simple color-secondary>Compartir</button>
  </article>
</template>
<script>
export default {
  name: "Avatar"
};
</script>
<style lang="scss">
.avatar {
  margin-bottom: auto;

  > * {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__image {
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
    background-color: var(--color-tertiary);
    border-radius: 5px;
    color: var(--color-dark);
  }

  .points {
    margin-bottom: 0.5rem;
  }

  .points__value {
    color: var(--color-secondary);
    font-size: 2rem;
    padding: 0 0.2rem;
  }
}
</style>
