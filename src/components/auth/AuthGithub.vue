<template>
  <div class="auth-user">
    <BaseSpinner v-if="isLoading" />
    <span
      v-if="!user && !isLoading"
      v-mobile-hover:#4992a9
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
