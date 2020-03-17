import { mapState, mapMutations } from "vuex";
import timeLimit from "time-limit-promise";
export default {
  computed: {
    ...mapState("user", ["user", "redirectWasLaunched"])
  },
  data() {
    return {
      isLoading: false,
      isTimeout: false
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
    loginUserWithPopup(nameComponent) {
      this.$emit("isLoading", true);
      this.isTimeout = false;
      timeLimit(this.auth.signInWithPopup(), 20000, {
        rejectWith: new Error("timeout")
      })
        .then(res => {
          if (res) {
            this.setUser({ user: res.user });
          }
          this.isTimeout = false;
        })
        .catch(err => {
          const nameComponentCleaned = nameComponent.replace("Auth", "");
          this.isTimeout = true;
          this.$emit("timeout", nameComponentCleaned);
          console.error(
            `[Error: ${err.message} ]: Está tardando demasiado ${nameComponentCleaned}`
          );
        })
        .finally(() => {
          this.$emit("isLoading", false);
        });
    }
  }
};
