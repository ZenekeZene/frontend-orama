<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <wheel :forceAngularVelocity="angularVelocity"></wheel>
    <button class="edit" @click="goToEdit">Editar</button>
    <button @click="angularVelocity = calculateAngularVelocity()">Lanzar</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Wheel from "@/components/Wheel.vue";

export default {
  name: "Home",
  components: {
    Wheel,
  },
  computed: {
    ...mapState(["title"]),
  },
  data() {
    return {
      angularVelocity: 0,
      minAngularVelocity: 10,
      maxAngularVelocity: 20,
    };
  },
  methods: {
    goToEdit() {
      this.$router.push("about");
    },
    calculateAngularVelocity() {
      return (
        Math.random() * (this.minAngularVelocity - this.maxAngularVelocity) +
        this.maxAngularVelocity
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  h1 {
    position: absolute;
    top: 2rem;
    width: calc(100vw - 2rem);
    text-align: center;
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
    top: 4.5rem;
    right: 1rem;
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
