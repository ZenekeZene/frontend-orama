import { database } from "./FirebaseService";
const _db = database;

const QUESTIONS = {
  id: "questions",
  ref() {
    return _db.collection(this.id);
  },
  async get() {
    return _db
      .collection(this.id)
      .get()
      .then(snapshot => snapshot.docs);
  }
};

function getDocs(snapshot) {
  const docs = [];
  snapshot.forEach(item => docs.push(item.data()));
  return docs;
}

export default class QuestionsService {
  async loadQuestions() {
    const snapshot = await QUESTIONS.ref().get();
    return getDocs(snapshot);
  }

  async loadQuestionsByLimit(limitSize) {
    const snapshot = await QUESTIONS.ref()
      .limit(limitSize)
      .get();
    return getDocs(snapshot);
  }
}
