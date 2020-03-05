import firebase from "firebase/app";
import { auth } from "../api/FirebaseService";

export default class AuthService {
  constructor(idProvider, withLog = false) {
    this.auth = auth;
    if (idProvider) this.provider = this.$_getProvider(idProvider);

    if (withLog) {
      this.$_launchObserver();
    }
  }

  $_getProvider(idProvider) {
    return new firebase.auth[idProvider]();
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

  $_handResponse(result) {
    if (!result.credential) throw new Error("Error with token or similar");
    return {
      token: result.credential.accessToken,
      user: result.user
    };
  }

  async signInWithPopup() {
    try {
      const result = await this.auth.signInWithPopup(this.provider);
      return this.$_handResponse(result);
    } catch (error) {
      this.$_logError(error);
      return error;
    }
  }

  async signInWithRedirect() {
    try {
      const result = await this.auth.signInWithRedirect(this.provider);
      return this.$_handResponse(result);
    } catch (error) {
      this.$_logError(error);
      return error;
    }
  }

  async getRedirectResult() {
    try {
      const result = await this.auth.getRedirectResult();
      return this.$_handResponse(result);
    } catch (error) {
      this.$_logError(error);
      return error;
    }
  }
}
