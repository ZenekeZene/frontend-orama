<template>
  <div class="questionary">
    <h1>{{ question.title }}</h1>
    <ul class="options">
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
          v-for="(option, index) in question.options"
          :key="`option-${index}`"
          :data-index="index"
          @click="selectOption(index)"
          class="option"
          :class="{
            '--selected': optionSelectedIndex === index,
            '--incorrect': question.correctIndex !== index && completed,
            '--correct': option.state === 'correct' && completed
          }"
        >
          {{ option.value }}
        </button>
      </transition-group>
    </ul>
    <fade-transition>
      <div v-if="clockIsVisible" class="clock">{{ seconds }}s</div>
    </fade-transition>
    <button class="next" v-if="nextIsVisible">Siguiente</button>
  </div>
</template>
<script>
export default {
  name: "Questionary",
  data() {
    return {
      question: {
        title: "¿Qué lenguaje toca todo txus pero no lo sabe usar ni Perry?",
        options: [
          {
            state: "incorrect",
            value: "XML"
          },
          {
            state: "correct",
            value: "CSS"
          },
          {
            state: "incorrect",
            value: "HTML"
          },
          {
            state: "incorrect",
            value: "JS"
          }
        ],
        correctIndex: 1
      },
      seconds: 10,
      optionSelectedIndex: -1,
      completed: false,
      nextIsVisible: false,
      clockIsVisible: true
    };
  },
  computed: {
    options: function() {
      if (!this.completed) {
        return this.question.options;
      } else {
        return this.question.options[this.question.correctIndex];
      }
    }
  },
  mounted() {
    setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        this.completed = true;
        this.clockIsVisible = false;
        setTimeout(() => {
          this.nextIsVisible = true;
        }, 2000);
      }
    }, 1000);
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
    },
    enter: function(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 1 }, { complete: done });
      }, delay);
    },
    leave: function(el, done) {
      const delay = (this.question.options.length - el.dataset.index) * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 0 }, { duration: 1000 }, { complete: done });
      }, delay);
    },
    selectOption(index) {
      this.optionSelectedIndex = index;
    }
  }
};
</script>
