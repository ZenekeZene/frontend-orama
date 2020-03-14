<template>
  <transition-group
    appear
    name="list"
    tag="ol"
    class="ranking-table"
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <li
      v-for="(player, index) in mockPlayersFiltered"
      :key="`option-${index}`"
      :data-index="index"
    >
      <RankingPlayer :player="player" withIndex :index="index" />
    </li>
  </transition-group>
</template>
<script>
import RankingPlayer from "./RankingPlayer";
export default {
  name: "RankingTable",
  components: {
    RankingPlayer
  },
  props: {
    numPlayers: {
      type: Number,
      default: 10
    }
  },
  computed: {
    mockPlayersFiltered() {
      return this.mockPlayers.slice(0, this.numPlayers);
    }
  },
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
        },
        {
          name: "Fulanito",
          link: "http://www.google.es",
          record: 65,
          message: "Último?"
        },
        {
          name: "Fulanito",
          link: "http://www.google.es",
          record: 65,
          message: "Último?"
        },
        {
          name: "Fulanito",
          link: "http://www.google.es",
          record: 65,
          message: "Último?"
        },
        {
          name: "Fulanito",
          link: "http://www.google.es",
          record: 65,
          message: "Último?"
        },
        {
          name: "Fulanito",
          link: "http://www.google.es",
          record: 65,
          message: "Último?"
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
<style lang="scss">
.ranking-table {
  list-style: none;

  &-wrapper {
    position: relative;
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 1rem 0rem 2rem 0rem;
    background: linear-gradient(-180deg, #292a3a, transparent);
  }

  &-title {
    padding: 1rem 2rem 1rem;
    font-size: 1.5rem;
    text-align: center;
    background-color: var(--color-dark);
  }
}
</style>
