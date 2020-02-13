<template>
  <div class="about">
    <span @click="goBack()" class="icon-forward --left"></span>
    <h1>Editar</h1>
    <span
      @click="save()"
      class="icon-save"
      :class="{ '--not-saved': haveBeenChanges, '--disabled': !isEnabledToSave }"
    ></span>
    <p>Título:</p>
    <div class="input --title">
      <textarea rows="1" maxlength="42" ref="'title'" type="text" v-model="titleLocal"></textarea>
      <span class="input__clear" @click="clearTitle">X</span>
    </div>
    <p>Opciones:</p>
    <ul class="list">
      <li class="input" v-for="(player, index) in playersLocal" :key="`player-${index}`">
        <input :ref="`player-${index}`" type="text" v-model="playersLocal[index]" />
        <span class="input__clear" @click="clearInput(index)">X</span>
        <span class="input__delete icon-trash" @click="deletePlayer(index)"></span>
      </li>
    </ul>
    <button class="add" :class="{ '--disabled': !isEnabledToAdd }" @click="addPlayer(playersLocal.length)">
      <span class="icon-plus"></span>
    </button>
    <v-dialog
      name="save-dialog"
      :adaptive="true"
      :pivotY="0"
      width="320"
      height="auto"
      transition="fadeInDown"
    >hello, world!</v-dialog>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "About",
  data() {
    return {
      playersLocal: [],
      titleLocal: ""
    };
  },
  mounted() {
    this.playersLocal = this.getCopyOfPlayersState();
    this.titleLocal = this.title;
  },
  computed: {
    ...mapState(["players", "title"]),
    isEnabledToAdd() {
      return this.playersLocal.every(player => player !== "");
    },
    isEnabledToSave() {
      return (
        this.titleLocal.length > 0 &&
        this.playersLocal.every(player => player !== "") &&
        this.playersLocal.length > 1
      );
    },
    haveBeenChanges() {
      const diffPlayers = this.playersLocal.filter(x =>
        this.players.includes(x)
      );
      return (
        this.playersLocal.length !== this.players.length ||
        this.playersLocal.length != diffPlayers.length ||
        this.titleLocal !== this.title
      );
    }
  },
  methods: {
    ...mapMutations(["setPlayers", "setTitle"]),
    clearTitle() {
      this.titleLocal = "";
      this.$refs[`title`].focus();
    },
    clearInput(index) {
      this.playersLocal.splice(index, 1, "");
      this.$refs[`player-${index}`][0].focus();
    },
    deletePlayer(index) {
      this.playersLocal.splice(index, 1);
    },
    addPlayer(index) {
      if (this.isEnabledToAdd) {
        this.playersLocal.push("");
        this.$nextTick(() => {
          this.$refs[`player-${index}`][0].focus();
        });
      }
    },
    save() {
      if (this.isEnabledToAdd) {
        this.setTitle({ title: this.titleLocal });
        this.setPlayers({ players: this.playersLocal });
        this.playersLocal = this.getCopyOfPlayersState();
      }
    },
    goBack() {
      if (this.haveBeenChanges) {
        this.$modal.show("dialog", {
          title: "¿Quieres guardar los cambios?!",
          text: "Tus cambios se perderán si no los guardas.",
          adaptive: true,
          buttons: [
            {
              title: "No guardar",
              handler: () => {
                this.$router.back();
              }
            },
            {
              title: "Cancelar", // Button title
              default: true,
              handler: () => {
                this.$modal.hide("dialog");
              }
            },
            {
              title: "Guardar",
              class: "v-dialog-save",
              handler: () => {
                this.save();
                this.$router.back();
              }
            }
          ]
        });
      } else {
        this.$router.back();
      }
    },
    getCopyOfPlayersState() {
      return this.players.slice();
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 1rem;
}

p {
  width: 100%;
  text-align: left;
}

.save {
  margin-top: auto;
}

.list {
  width: 100%;
  max-height: 62vh;
}

button {
  margin-top: 1rem;
}

.add {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin: 0;
  padding: 0;
  font-size: 2rem;
  border-radius: 50%;

  [class^="icon-"] {
    width: 1.95rem;
  }
}

.--disabled {
  opacity: 0.5;
}

.icon-forward,
.icon-save {
  position: absolute;
  top: 0;
  padding: 1rem;
}

.icon-forward {
  left: 0;
}

.icon-save {
  right: 0;

  &.--not-saved {
    &:after {
      $size: 0.8rem;
      content: "";
      position: absolute;
      top: 0.2rem;
      left: 0.2rem;
      display: inline-block;
      width: $size;
      height: $size;
      background-color: orange;
      border-radius: 50%;
    }
  }
}
</style>