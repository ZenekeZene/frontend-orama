// Inversion Of Control:
import Vuec from "vue-container";
import AuthService from "../auth/AuthService";

export default {
  install(Vue) {
    Vue.use(Vuec);
    Vue.$ioc.register("$authService", new AuthService());
    Vue.$ioc.register(
      "$githubAuthService",
      new AuthService("GithubAuthProvider")
    );
    Vue.$ioc.register(
      "$googleAuthService",
      new AuthService("GoogleAuthProvider")
    );
    Vue.$ioc.register(
      "$twitterAuthService",
      new AuthService("TwitterAuthProvider")
    );
  }
};
