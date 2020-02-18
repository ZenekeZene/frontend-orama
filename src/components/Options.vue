<template>
  <ul class="options" :class="{ '--is-completed': showCorrect }">
    <transition-group
      appear
      name="list"
      tag="li"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <button
        simple
        v-for="(option, index) in options"
        :key="`option-${index}-${option}`"
        :data-index="index"
        class="option"
        :class="{
          '--selected': optionSelectedIndex === index,
          '--incorrect': correctIndex !== index && showCorrect,
          '--correct': correctIndex === index && showCorrect
        }"
        @click="selectOption(index)"
      >
        {{ option }}
        <fade-transition>
          <span
            v-if="correctIndex === index && showCorrect && hasNote"
            class="icon-book"
          ></span>
        </fade-transition>
      </button>
    </transition-group>
  </ul>
</template>
<script>
export default {
  name: "Options",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    correctIndex: {
      type: Number,
      default: -1
    },
    hasNote: {
      type: Boolean,
      default: false
    },
    showCorrect: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      optionSelectedIndex: -1
    };
  },
  methods: {
    selectOption(index) {
      this.optionSelectedIndex = index;
      this.$emit("optionSelected", index);
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 1 }, { complete: done });
      }, delay);
    },
    leave(el, done) {
      const delay = (this.options.length - el.dataset.index) * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 0 }, { duration: 1000 }, { complete: done });
      }, delay);
    }
  }
};
</script>
