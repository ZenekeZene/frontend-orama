import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("userS", ["user", "redirectWasLaunched"])
  },
  created() {
    if (this.redirectWasLaunched) {
      this.auth.getRedirectResult().then(({ user }) => {
        this.setUser({ user });
        this.redirectWasLaunched = false;
      });
    }
  },
  methods: {
    ...mapMutations("userS", ["setUser", "setRedirectWasLaunched"]),
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
