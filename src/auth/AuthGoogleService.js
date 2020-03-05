import AuthService from "./AuthService";

export default class AuthGoogleService extends AuthService {
  constructor(withLog = false) {
    super(withLog);
    this.provider = this.$_getProvider("GoogleAuthProvider");
  }
}
