<template>
  <div class="home">
    <h1>{{ title }}</span></h1>
    <wheel :forceAngularVelocity="angularVelocity"></wheel>
    <button class="edit" @click="goToEdit">Editar</button>
    <button @click="angularVelocity = Math.random() * (20 - 10) + 10">Lanzar</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Wheel from "@/components/Wheel.vue";

export default {
  name: "Home",
  components: {
    Wheel,
  },
  computed: {
    ...mapState(['title']),
  },
  data() {
    return {
      angularVelocity: 0,
    };
  },
  methods: {
    goToEdit() {
      this.$router.push('about');
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    position: absolute;
    top: 2rem;
    text-align: center;
    width: calc(100vw - 2rem);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      display: block;
      text-transform: uppercase;
    }
  }

  .edit {
    position: absolute;
    right: 1rem;
    top: 4.5rem;
    width: 3rem;
    height: 3rem;
    padding: 0;
    letter-spacing: 1px;
    border-radius: 50%;
    font-size: 0.5rem;
  }

  button:last-child {
    position: absolute;
    bottom: 1rem;
  }
}
</style>
