import { auth } from "../api/FirebaseService";

export default class AuthService {
  constructor(withLog = false) {
    this.auth = auth;

    if (withLog) {
      this.$_launchObserver();
    }
  }

  register(email, password) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(error => this.$_logError(error));
  }

  login(email, password) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.$_logError(error));
  }

  logout() {
    return this.auth.signOut().catch(error => this.$_logError(error));
  }

  $_launchObserver() {
    this.auth.onAuthStateChanged(user => {
      this.isSigned = user !== null;
      console.log("User is signed " + (user ? "in" : "out"));
    });
  }

  $_logError(error) {
    console.error(`${error.code} : ${error.message}`);
    if (error.code === "auth/wrong-password") {
      console.error("Wrong password.");
    } else {
      console.error("Wrong login.");
    }
  }
}
