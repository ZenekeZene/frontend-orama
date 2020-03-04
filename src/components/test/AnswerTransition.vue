<template>
  <transition-group
    appear
    name="list"
    tag="ul"
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <slot></slot>
  </transition-group>
</template>
<script>
import Velocity from "velocity-animate";
export default {
  name: "AnswerTransition",
  props: {
    optionsLength: {
      type: Number,
      default: 0
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(el, { opacity: 1 }, { complete: done });
      }, delay);
    },
    leave(el, done) {
      const delay = (this.optionsLength - el.dataset.index) * 150;
      setTimeout(() => {
        Velocity(el, { opacity: 0 }, { duration: 1000 }, { complete: done });
      }, delay);
    }
  }
};
</script>
