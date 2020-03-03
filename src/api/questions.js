const _db = window.db;

const _COLLECTIONS = {
  QUESTIONS: {
    id: "questions",
    async get() {
      return _db
        .collection(this.id)
        .get()
        .then(snapshot => snapshot.docs);
    }
  }
};

export default {
  async loadQuestions() {
    const questionDocs = await _COLLECTIONS.QUESTIONS.get();
    const questions = [];
    questionDocs.forEach(question => questions.push(question.data()));
    return questions;
  },
  async loadQuestionsByLimit() {}
};
