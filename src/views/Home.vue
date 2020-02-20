<template>
  <div class="home" page>
    <textarea
      class="--fixed"
      rows="1"
      maxlength="42"
      type="text"
      v-model="title"
      disabled
    ></textarea>
    <wheel :forceAngularVelocity="angularVelocity"></wheel>
    <button style="display: none" class="edit" @click="goToEdit">
      <span class="icon-pencil"></span>
    </button>
    <button
      class="launch"
      @click="angularVelocity = calculateAngularVelocity()"
    >
      ¡Lanzar!🤞
    </button>
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
    ...mapState(["title"])
  },
  data() {
    return {
      angularVelocity: 0,
      minAngularVelocity: 10,
      maxAngularVelocity: 20
    };
  },
  methods: {
    goToEdit() {
      this.$router.push("edit");
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
