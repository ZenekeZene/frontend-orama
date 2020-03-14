<template>
  <div class="auth-user">
    <span
      v-mobile-hover:#4992a9
      @click="loginUserWithPopup($options.name)"
      class="icon-google"
      :class="{ timeout: isTimeout }"
    ></span>
  </div>
</template>
<script>
import AuthCommonMixin from "./AuthCommon.mixin";
export default {
  name: "AuthGoogle",
  services: ["$googleAuthService"],
  mixins: [AuthCommonMixin],
  data() {
    return {
      auth: this.$services.$googleAuthService
    };
  }
};
</script>
