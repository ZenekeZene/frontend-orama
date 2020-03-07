<template>
  <div class="auth-user">
    <span
      v-if="!user"
      @click="loginUserWithPopup()"
      class="icon-twitter"
    ></span>
  </div>
</template>
<script>
import AuthCommonMixin from "../../mixins/AuthCommon.mixin";
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
