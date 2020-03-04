export const answersValidation = {
  data() {
    return {
      $_validators: [
        {
          message: "Inserta al menos 2 respuestas",
          validator: () => this.answers.length > 1
        },
        {
          message: "No dejes ninguna respuesta vacía",
          validator: () => this.answers.every(answer => answer.length > 0)
        },
        {
          message: "Identifica una respuesta como la correcta",
          validator: () =>
            this.correctAnswerIndex >= 0 &&
            this.correctAnswerIndex < this.answers.length
        },
        {
          message: "Inserta el enunciado de la pregunta",
          validator: () => this.question.length > 0
        }
      ],
      errors: [],
      flagValidate: false
    };
  },
  computed: {
    haveErrors() {
      return this.errors.length > 0;
    }
  },
  watch: {
    question() {
      this.$_validate();
    },
    answers() {
      if (!this.flagValidate) {
        this.flagValidate = true;
      }
      this.$_validate();
    },
    correctAnswerIndex() {
      this.$_validate();
    }
  },
  mounted() {
    this.$_validate();
  },
  methods: {
    $_validate() {
      this.errors = this.$data.$_validators.filter(validator => {
        return !validator.validator({
          question: this.question,
          answers: this.answers
        });
      });
    }
  }
};
