<template>
  <section page>
    <fade-transition>
      <div
        v-show="wasSidebarOpened"
        class="backdrop-sidebar"
        @click="toggleSidebar"
      ></div>
    </fade-transition>
    <TheHeader :withBack="false" />
    <div class="home">
      <Wheel
        :forceAngularVelocity="angularVelocity"
        :wasLaunched="wasLaunched"
        @click.native="launch"
        @lockLaunch="wasLaunched = true"
        @update:category="category = $event"
      />
      <div class="fixed --column">
        <fade-transition>
          <p v-if="category !== ''" class="winner">{{ category }}</p>
        </fade-transition>
        <BaseButton
          big
          color-secondary
          v-ripple
          @click="launch"
          class="draw-border"
          style="position: relative;"
        >
          {{ currentQuestionIndex === 0 ? "Jugar!🤞" : "¡Siguiente pregunta!" }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
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
    ...mapState("user", ["wasSidebarOpened"]),
    ...mapState("questions", ["currentQuestionIndex"]),
    ...mapGetters("questions", ["totalQuestions"])
  },
  mounted() {
    this.wasLaunched = false;
  },
  methods: {
    ...mapMutations("user", ["toggleSidebar"]),
    goToEdit() {
      this.$router.push("edit");
    },
    launch() {
      if (!this.wasLaunched) {
        this.wasLaunched = true;
        this.$emit("wasLaunched", true);
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
