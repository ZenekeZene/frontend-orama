import AuthService from "./AuthService";

export default class AuthTwitterService extends AuthService {
  constructor(withLog = false) {
    super(withLog);
    this.provider = this.$_getProvider("TwitterAuthProvider");
  }
}
