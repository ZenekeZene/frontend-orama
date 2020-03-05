export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    this.auth.getRedirectResult().then(({ user }) => {
      this.user = user;
    });
  },
  methods: {
    async loginUserWithRedirect() {
      const result = await this.auth.signInWithRedirect();
      this.user = result.user;
    },
    async loginUserWithPopup() {
      const result = await this.auth.signInWithPopup();
      this.user = result.user;
    }
  }
};
