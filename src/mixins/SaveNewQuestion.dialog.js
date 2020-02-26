export default {
  methods: {
    handGoBack() {
      if (this.haveBeenChanges) {
        this.handleDialog();
      } else {
        this.$router.back();
      }
    },
    goBack() {
      this.$router.back();
    },
    handleDialog() {
      this.$modal.show("dialog", {
        title:
          "¿Quieres guardar la pregunta? Podrás seguir con ella más adelante.",
        text: "Tus cambios se perderán si no los guardas.",
        adaptive: true,
        buttons: [
          {
            title: "No guardar",
            handler: () => {
              this.goBack();
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
              this.goBack();
            }
          }
        ]
      });
    }
  }
};
