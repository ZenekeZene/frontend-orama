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
      this.$emit("isLoading", true);
      this.auth.getRedirectResult().then(({ user }) => {
        this.setUser({ user });
        this.setRedirectWasLaunched({ redirectWasLaunched: false });
        this.$emit("isLoading", false);
      });
    }
  },
  methods: {
    ...mapMutations("user", ["setUser", "setRedirectWasLaunched"]),
    loginUserWithRedirect() {
      this.setRedirectWasLaunched({ redirectWasLaunched: true });
      this.auth.signInWithRedirect();
    },
    loginUserWithPopup() {
      this.$emit("isLoading", true);
      this.auth.signInWithPopup().then(({ user }) => {
        this.setUser({ user });
        this.$emit("isLoading", false);
      });
    }
  }
};
