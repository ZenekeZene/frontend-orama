<template>
  <div class="github">
    <div v-if="user">
      <h2>Bienvenido, {{ user.displayName }}</h2>
      <img :src="user.photoURL" class="imageGithub" />
    </div>
    <BaseButton v-if="!user" simple @click="loginUserWithPopup()"
      >Register with Github</BaseButton
    >
  </div>
</template>
<script>
export default {
  name: "AuthGithub",
  services: ["$authGithubService"],
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.$services.$authGithubService.getRedirectResult().then(({ user }) => {
      this.user = user;
    });
  },
  methods: {
    async loginUserWithRedirect() {
      const result = await this.$services.$authGithubService.signInWithRedirect();
      this.user = result.user;
    },
    async loginUserWithPopup() {
      const result = await this.$services.$authGithubService.signInWithPopup();
      this.user = result.user;
    }
  }
};
</script>
<style lang="scss" scoped>
.github {
  padding: 1rem;
}
</style>
