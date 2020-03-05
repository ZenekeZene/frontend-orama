<template>
  <div class="github">
    <div v-if="user">
      <h2>Bienvenido, {{ user.displayName }}</h2>
      <img :src="user.photoURL" class="imageGithub" />
    </div>
    <BaseButton v-if="!user" simple @click="loginUserWithPopup()"
      >Register with Twitter <span class="icon-github"></span
    ></BaseButton>
  </div>
</template>
<script>
export default {
  name: "AuthGoogle",
  services: ["$authTwitterService"],
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.$services.$authTwitterService.getRedirectResult().then(({ user }) => {
      this.user = user;
    });
  },
  methods: {
    async loginUserWithRedirect() {
      const result = await this.$services.$authTwitterService.signInWithRedirect();
      this.user = result.user;
    },
    async loginUserWithPopup() {
      const result = await this.$services.$authTwitterService.signInWithPopup();
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
