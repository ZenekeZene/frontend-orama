import AuthService from "./AuthService";

export default class AuthGithubService extends AuthService {
  constructor(withLog = false) {
    super(withLog);
    this.provider = this.$_getProvider("GithubAuthProvider");
  }
}
