<template>
  <div class="home">
    <h1>La ruleta del<span>despido</span></h1>
    <!--<roulette></roulette>
    <spinner></spinner>-->
    <wheel></wheel>
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
  }
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
    top: 3rem;
    text-align: center;

    span {
      display: block;
      text-transform: uppercase;
    }
  }
}
</style>
