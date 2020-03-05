import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("user", ["user", "redirectWasLaunched"])
  },
  created() {
    if (this.redirectWasLaunched) {
      this.auth.getRedirectResult().then(({ user }) => {
        this.setUser({ user });
        this.setRedirectWasLaunched({ redirectWasLaunched: false });
      });
    }
  },
  methods: {
    ...mapMutations("user", ["setUser", "setRedirectWasLaunched"]),
    loginUserWithRedirect() {
      const result = this.auth.signInWithRedirect();
      this.setUser({ user: result.user });
      this.setRedirectWasLaunched({ redirectWasLaunched: true });
    },
    loginUserWithPopup() {
      this.auth.signInWithPopup().then(({ user }) => {
        this.setUser({ user });
      });
    }
  }
};
