<template>
  <div class="auth-user">
    <BaseSpinner v-if="isLoading" />
    <span
      v-if="!user && !isLoading"
      @click="loginUserWithRedirect()"
      class="icon-google"
    ></span>
  </div>
</template>
<script>
import AuthCommonMixin from "../../mixins/AuthCommon.mixin";
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
