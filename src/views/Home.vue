<template>
  <div class="home">
    <h1>La ruleta del<span>despido</span></h1>
    <!--<roulette></roulette>
    <spinner></spinner>-->
    <wheel :forceAngularVelocity="angularVelocity"></wheel>
    <button @click="angularVelocity = Math.random() * (20 - 10) + 10">Lanzar</button>
  </div>
</template>

<script>
import Roulette from "@/components/Roulette.vue";
import Spinner from "@/components/Spinner.vue";
import Wheel from "@/components/Wheel.vue";


export default {
  name: "Home",
  components: {
    Roulette,
    Spinner,
    Wheel,
  },
  data() {
    return {
      angularVelocity: 0,
    };
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

    span {
      display: block;
      text-transform: uppercase;
    }
  }
}
</style>
