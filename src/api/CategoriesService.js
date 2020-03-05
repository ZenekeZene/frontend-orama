import { database } from "./FirebaseService";
const _db = database;

const COLLECTION = {
  id: "categories",
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
  async loadAll() {
    const snapshot = await COLLECTION.ref().get();
    return getDocs(snapshot);
  }

  async loadByLimit(limitSize) {
    const snapshot = await COLLECTION.ref()
      .limit(limitSize)
      .get();
    return getDocs(snapshot);
  }
}
