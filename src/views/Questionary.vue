<template>
  <div class="questionary">
    <h1>{{ question.title }}</h1>
    <ul
      class="options"
      :class="{ '--is-completed': completed }"
      v-if="!noteIsVisible"
    >
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
          :key="`option-${index}-${option}`"
          :data-index="index"
          class="option"
          :class="{
            '--selected': optionSelectedIndex === index,
            '--incorrect': question.correctIndex !== index && completed,
            '--correct': question.correctIndex === index && completed
          }"
          @click="selectOption(index)"
        >
          {{ option }}
          <fade-transition>
            <span
              v-if="
                question.correctIndex === index && completed && question.note
              "
              class="icon-book"
            ></span>
          </fade-transition>
        </button>
      </transition-group>
    </ul>
    <ul class="options" v-else>
      <li>
        <button simple class="option --correct">
          {{ question.options[question.correctIndex] }}
        </button>
      </li>
    </ul>
    <div v-if="noteIsVisible">
      <p v-html="question.note.description" class="explanation"></p>
      <vue-code-highlight
        v-for="(embed, index) in question.note.embeds"
        :key="`embed-${index}`"
      >
        {{ embed.value }}
      </vue-code-highlight>
    </div>
    <fade-transition>
      <div v-if="clockIsVisible" class="clock">{{ seconds }}s</div>
    </fade-transition>
    <button class="next" v-if="nextIsVisible">Siguiente</button>
  </div>
</template>
<script>
import { component as VueCodeHighlight } from "vue-code-highlight";

export default {
  name: "Questionary",
  components: {
    VueCodeHighlight
  },
  data() {
    return {
      question: {
        title: "¿Qué lenguaje toca todo txus pero no lo sabe usar ni Perry?",
        options: ["XML", "CSS", "HTML", "JS"],
        correctIndex: 1,
        note: {
          description:
            "Es porque la gente denosta este lenguaje: <a href='http://www.google.es/' target='_BLANK'>Link</a>",
          embeds: [
            {
              type: "code",
              value: `
const foo = (a, b) => {
  return a + b;
}
              `
            },
            {
              type: "code",
              value: `
.class {
  border-radius: 50%;
}
              `
            }
          ]
        }
      },
      seconds: 1,
      optionSelectedIndex: -1,
      completed: false,
      nextIsVisible: false,
      clockIsVisible: true,
      noteIsVisible: false
    };
  },
  mounted() {
    const timer = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        this.completed = true;
        this.clockIsVisible = false;
        this.nextIsVisible = true;
        clearInterval(timer);
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
      if (!this.completed) {
        this.optionSelectedIndex = index;
      } else {
        if (index === this.question.correctIndex && this.question.note) {
          this.noteIsVisible = true;
        }
      }
    }
  }
};
</script>
