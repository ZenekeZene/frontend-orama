<template>
  <section page>
    <header-nav
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      :withBack="false"
    ></header-nav>
    <div class="home">
      <h1 class="home__points">
        <span v-show="currentQuestionIndex > 0">Aciertos: {{ points }}</span>
      </h1>
      <wheel
        :forceAngularVelocity="angularVelocity"
        :wasLaunched="wasLaunched"
        @lockLaunch="wasLaunched = true"
        @update:category="category = $event"
      ></wheel>
      <div class="fixed --column">
        <fade-transition>
          <p v-if="category !== ''" class="winner">{{ category }}</p>
        </fade-transition>
        <button-custom
          simple
          big
          color-secondary
          v-ripple
          @click="launch"
          style="position: relative;"
        >
          {{ currentQuestionIndex === 0 ? "Jugar!🤞" : "¡Siguiente pregunta!" }}
        </button-custom>
      </div>
    </div>
  </section>
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
    ...mapState(["points", "totalQuestions", "currentQuestionIndex"])
  },
  data() {
    return {
      angularVelocity: 0,
      minAngularVelocity: 10,
      maxAngularVelocity: 20,
      wasLaunched: false,
      category: null
    };
  },
  mounted() {
    this.wasLaunched = false;
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
