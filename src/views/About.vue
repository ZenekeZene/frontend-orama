<template>
  <div class="about">
    <span
      @click="goBack()"
      class="icon-forward --left"
      :class="{ '--disabled': !isEnabledToAdd }"
    ></span>
    <h1 style="margin-bottom: 1rem;">Editar</h1>
    <span
      @click="save()"
      class="icon-save"
      :class="{
        '--not-saved': haveBeenChanges,
        '--disabled': !isEnabledToSave,
      }"
    ></span>
    <p>Título:</p>
    <div class="input --title">
      <textarea rows="1" maxlength="42" ref="title" type="text" v-model="titleLocal"></textarea>
      <span class="input__clear" @click="clearTitle">X</span>
    </div>
    <p>Opciones:</p>
    <ul class="list">
      <li class="input"
        v-for="(player, index) in playersLocal" :key="`player-${index}`"
      >
        <input :ref="`player-${index}`" type="text" maxlength="20" v-model="playersLocal[index]" />
        <span
          v-if="playersLocal[index].length > 0"
          class="input__clear"
          @click="clearInput(index)"
        >X</span>
        <span class="input__delete icon-trash" @click="deletePlayer(index)"></span>
      </li>
    </ul>
    <v-dialog
      name="save-dialog"
      :adaptive="true"
      :pivotY="0"
      width="320"
      height="auto"
      transition="fadeInDown"
    ></v-dialog>
    <div class="fixed --right">
    <button
      class="add fab"
      :class="{ '--disabled': !isEnabledToAdd }"
      @click="addPlayer(0)"
    >
      <span class="icon-plus"></span>
    </button>
  </div>
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
      this.$refs["title"].focus();
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
        this.playersLocal.unshift("");
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
      if (this.isEnabledToAdd) {
        if (this.haveBeenChanges) {
          this.handleDialog();
        } else {
          this.$router.back();
        }
      }
    },
    getCopyOfPlayersState() {
      return this.players.slice();
    },
    handleDialog() {
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
            title: "Cancelar",
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
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  display: block;
  padding: 1rem;
}

p {
  width: 100%;
  text-align: left;
  font-family: Helvetica;
  font-weight: 700;
  letter-spacing: initial;
}

.save {
  margin-top: auto;
}

.list {
  width: 100%;
  max-height: 60vh;
  overflow-y: auto;
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
  font-size: 1.5rem;
}

.icon-save {
  top: 3px;
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
