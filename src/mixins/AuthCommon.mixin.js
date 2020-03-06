import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("user", ["user", "redirectWasLaunched"])
  },
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    if (this.redirectWasLaunched) {
      this.isLoading = true;
      this.auth.getRedirectResult().then(({ user }) => {
        this.setUser({ user });
        this.setRedirectWasLaunched({ redirectWasLaunched: false });
      });
    }
  },
  methods: {
    ...mapMutations("user", ["setUser", "setRedirectWasLaunched"]),
    loginUserWithRedirect() {
      this.isLoading = true;
      const result = this.auth.signInWithRedirect();
      this.setUser({ user: result.user });
      this.setRedirectWasLaunched({ redirectWasLaunched: true });
      this.isLoading = false;
    },
    loginUserWithPopup() {
      this.auth.signInWithPopup().then(({ user }) => {
        this.setUser({ user });
        this.isLoading = false;
      });
    }
  }
};
