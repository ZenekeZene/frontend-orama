<template>
  <div class="about">
    <h1>Editar</h1>
    <p>Título:</p>
    <div class="input --title">
      <textarea rows="1" :ref="'title'" type="text" v-model="titleLocal"></textarea>
      <span class="input__clear" @click="clearTitle">X</span>
    </div>
    <p>Opciones:</p>
    <ul class="list">
      <li class="input" v-for="(player, index) in playersLocal" :key="`player-${index}`">
        <input :ref="`player-${index}`" type="text" v-model="playersLocal[index]">
        <span class="input__clear" @click="clearInput(index)">X</span>
        <span class="input__delete" @click="deletePlayer(index)"></span>
      </li>
      <button class="add" :class="{ '--disabled': !isEnabledToAdd }" @click="addPlayer()">+</button>
    </ul>
    <button class="save" :class="{ '--disabled': !isEnabledToSave }" @click="save()">Guardar</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'About',
  data() {
    return {
      playersLocal: [],
      titleLocal: '',
    }
  },
  mounted() {
    this.playersLocal = [...this.players];
    this.titleLocal = this.title;
  },
  computed: {
    ...mapState(['players', 'title']),
    isEnabledToAdd() {
      return this.playersLocal.every(player => player !== '');
    },
    isEnabledToSave() {
      return this.playersLocal.every(player => player !== '') && this.playersLocal.length > 1;
    },
  },
  methods: {
    ...mapMutations(['setPlayers', 'setTitle']),
    clearTitle() {
      this.titleLocal = '';
      this.$refs[`title`].focus();
    },
    clearInput(index) {
      this.playersLocal.splice(index, 1, '');
      this.$refs[`player-${index}`][0].focus();
    },
    deletePlayer(index) {
      this.playersLocal.splice(index, 1);
    },
    addPlayer() {
      if (this.isEnabledToAdd) {
        this.playersLocal.push('');
      }
    },
    save() {
      if (this.isEnabledToAdd) {
        this.setTitle({ title: this.titleLocal });
        this.setPlayers({ players: this.playersLocal });
        this.$router.push('/');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

p {
  width: 100%;
  text-align: left;
}

.save {
  position: absolute;
  bottom: 1rem;
}

.list {
  width: 100%;
  max-height: 57vh;
  overflow-y: auto;
}

button {
  margin-top: 1rem;
}

.add {
  display: block;
  width: 4rem;
  height: 4rem;
  margin: 1rem auto;
  font-size: 2rem;
  line-height: 3rem;
  padding: 0;

}

.--disabled {
  opacity: 0.5;
}
</style>