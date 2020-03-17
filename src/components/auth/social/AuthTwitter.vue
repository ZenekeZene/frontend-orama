<template>
  <div class="auth-user">
    <span
      v-mobile-hover:#4992a9
      @click="loginUserWithPopup($options.name)"
      class="icon-twitter"
      :class="{ timeout: isTimeout }"
    ></span>
  </div>
</template>
<script>
import AuthCommonMixin from "./AuthCommon.mixin";
export default {
  name: "AuthTwitter",
  services: ["$twitterAuthService"],
  mixins: [AuthCommonMixin],
  data() {
    return {
      auth: this.$services.$twitterAuthService
    };
  }
};
</script>
