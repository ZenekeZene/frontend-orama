<template>
  <div class="user-auth">
    <div v-if="user">
      <h2>Bienvenido, {{ user.displayName }}</h2>
      <img :src="user.photoURL" class="image" />
    </div>
    <span v-if="!user" @click="loginUserWithPopup()" class="icon-google"></span>
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
