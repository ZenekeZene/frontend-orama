<template>
  <div class="home">
    <textarea rows="1" maxlength="42" type="text" v-model="title" disabled></textarea>
    <wheel :forceAngularVelocity="angularVelocity"></wheel>
    <button class="edit" @click="goToEdit"><span class="icon-pencil2"></span></button>
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
    top: 6.5rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    padding: 0;
    letter-spacing: 1px;
    font-size: 0.5rem;
    color: white;
    border-bottom: none;
    border-radius: 150px;
    background: linear-gradient(145deg, #515495, #6064b1);
    box-shadow:  11px 11px 21px #4d4f8c, 
             -11px -11px 21px #686bbe;

    [class^='icon-'] {
      color: white;
      font-size: 1.5rem;
    }
  }

  button:last-child {
    position: absolute;
    bottom: 1rem;
  }

  textarea {
    position: absolute;
    top: 1rem;
    min-height: 4rem;
    padding: 0 1rem;
    font-size: 1.7rem;
    border-bottom: none;
    font-family: inherit;
  }
}
</style>
