<template>
  <div page>
    <header-nav
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
    ></header-nav>
    <div class="home">
      <h1>Resultado: {{ points }} / {{ totalQuestions }}</h1>
      <wheel
        :forceAngularVelocity="angularVelocity"
        :wasLaunched="wasLaunched"
        @lockLaunch="wasLaunched = true"
      ></wheel>
      <button style="display: none" class="edit" @click="goToEdit">
        <span class="icon-pencil"></span>
      </button>
      <button
        simple
        big
        color-secondary
        class="launch"
        @click="launch"
        :class="{ '--disabled': wasLaunched }"
      >
        ¡Lanzar!🤞
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Wheel from "@/components/Wheel.vue";

export default {
  name: "Home",
  components: {
    Wheel
  },
  computed: {
    ...mapState(["title"]),
    ...mapState(["points", "totalQuestions"])
  },
  data() {
    return {
      angularVelocity: 0,
      minAngularVelocity: 10,
      maxAngularVelocity: 20,
      wasLaunched: false
    };
  },
  mounted() {
    this.wasLaunched = false;
    if (this.$route.params.angularVelocity) {
      //this.launch();
    }
  },
  methods: {
    goToEdit() {
      this.$router.push("edit");
    },
    launch() {
      if (!this.wasLaunched) {
        this.wasLaunched = true;
        this.angularVelocity = this.calculateAngularVelocity();
      }
    },
    calculateAngularVelocity() {
      return (
        Math.random() * (this.minAngularVelocity - this.maxAngularVelocity) +
        this.maxAngularVelocity
      );
    }
  }
};
</script>
