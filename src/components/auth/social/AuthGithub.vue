<template>
  <div class="auth-user">
    <span
      v-mobile-hover:#4992a9
      @click="loginUserWithRedirect($options.name)"
      class="icon-github"
      :class="{ timeout: isTimeout }"
    ></span>
  </div>
</template>
<script>
import AuthCommonMixin from "./AuthCommon.mixin";

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
