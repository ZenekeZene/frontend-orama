import firebase from "firebase/app";
import AuthService from "./AuthService";

export default class AuthGithubService extends AuthService {
  constructor(withLog = false) {
    super(withLog);
    this.provider = this.$_getGithubAuthProvider();
  }

  $_getGithubAuthProvider() {
    return new firebase.auth.GithubAuthProvider();
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

  $_handResponse(result) {
    if (!result.credential) throw new Error("Error with token or similar");
    return { token: result.credential.accessToken, user: result.user };
  }
}
