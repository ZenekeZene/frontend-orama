import { auth } from "./FirebaseService";

export default class AuthenticationService {
  constructor(withLog = false) {
    if (withLog) {
      this.$_launchObserver();
    }
  }

  $_launchObserver() {
    auth.onAuthStateChanged(user =>
      console.log(`User is signed ${user}` ? "in" : "out")
    );
  }

  login(email, password) {
    return auth.signInWithEmailAndPassword(email, password).catch(error => {
      this.$_logError(error);
      if (error.code === "auth/wrong-password") {
        console.error("Wrong password.");
      } else {
        console.error("Wrong login.");
      }
    });
  }

  logout() {
    return auth.signOut().catch(error => this.$_logError(error));
  }

  register(email, password) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .catch(error => this.$_logError(error));
  }

  $_logError(error) {
    console.error(`${error.code} : ${error.message}`);
  }
}
