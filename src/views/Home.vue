<template>
  <section page>
    <TheHeader
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      :withBack="false"
    />
    <div class="home">
      <h1 class="home__points">
        <span v-show="currentQuestionIndex > 0">Aciertos: {{ points }}</span>
      </h1>
      <Wheel
        :forceAngularVelocity="angularVelocity"
        :wasLaunched="wasLaunched"
        @lockLaunch="wasLaunched = true"
        @update:category="category = $event"
      />
      <div class="fixed --column">
        <fade-transition>
          <p v-if="category !== ''" class="winner">{{ category }}</p>
        </fade-transition>
        <BaseButton
          simple
          big
          m-b-0
          color-secondary
          v-ripple
          @click="launch"
          style="position: relative;"
        >
          {{ currentQuestionIndex === 0 ? "Jugar!🤞" : "¡Siguiente pregunta!" }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Wheel from "@/components/Wheel.vue";

export default {
  name: "Home",
  components: {
    Wheel
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
  computed: {
    ...mapState(["points"]),
    ...mapState("questions", ["currentQuestionIndex"]),
    ...mapGetters("questions", ["totalQuestions"])
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
