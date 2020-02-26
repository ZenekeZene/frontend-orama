<template>
  <transition-group
    appear
    name="list"
    tag="ol"
    class="ranking"
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <li
      v-for="(player, index) in mockPlayers"
      :key="`option-${index}`"
      :data-index="index"
    >
      <a :href="player.link">
        <img src="../../assets/boy2.gif" />
        <div class="info">
          <span class="name">{{ player.name }}</span>
          <span class="message">- {{ player.message }}</span>
        </div>
        <span class="value">{{ player.record }}</span>
      </a>
    </li>
  </transition-group>
</template>
<script>
export default {
  name: "RankingTable",
  data() {
    return {
      mockPlayers: [
        {
          name: "ZenekeZene",
          link: "http://www.google.es",
          record: 105,
          message: "Ueeee, voy primero"
        },
        {
          name: "JorgeF",
          link: "http://www.google.es",
          record: 102,
          message: "¡Y yo segundo!"
        },
        {
          name: "Diana Aveces",
          link: "http://www.google.es",
          record: 100,
          message: "TOP 3!!!!"
        },
        {
          name: "Maria",
          link: "http://www.google.es",
          record: 91,
          message: "..."
        },
        {
          name: "Fulanito",
          link: "http://www.google.es",
          record: 65,
          message: "Último?"
        }
      ]
    };
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
