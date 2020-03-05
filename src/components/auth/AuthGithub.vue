<template>
  <div class="user-auth">
    <div v-if="user">
      <h2>Bienvenido, {{ user.displayName }}</h2>
      <img :src="user.photoURL" class="image" />
    </div>
    <span
      v-if="!user"
      @click="loginUserWithRedirect()"
      class="icon-github"
    ></span>
  </div>
</template>
<script>
import AuthCommonMixin from "../../mixins/AuthCommon.mixin";

export default {
  name: "AuthGithub",
  services: ["$githubAuthService"],
  mixins: [AuthCommonMixin],
  data() {
    return {
      auth: this.$services.$githubAuthService
    };
  }
};
</script>
