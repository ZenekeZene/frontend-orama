<template>
  <div class="user-auth">
    <BaseSpinner v-if="isLoading" />
    <span
      v-if="!user && !isLoading"
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
