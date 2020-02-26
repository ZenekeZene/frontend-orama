export const answersValidation = {
  watch: {
    question() {
      this.validate();
    },
    answers() {
      if (!this.flagValidate) {
        this.flagValidate = true;
      }
      this.validate();
    },
    correctAnswerIndex() {
      this.validate();
    }
  },
  data() {
    return {
      validators: [
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
  mounted() {
    this.validate();
  },
  methods: {
    validate() {
      this.errors = this.validators.filter(validator => {
        return !validator.validator({
          question: this.question,
          answers: this.answers
        });
      });
    }
  }
};
