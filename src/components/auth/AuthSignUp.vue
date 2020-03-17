<template>
  <div>
    <AuthSocial
      @isLoading="$emit('isLoading', $event)"
      @timeout="timeoutSocialName = $event"
      :class="{ hidden: isEmailOpen }"
    />
    <p class="timeout" m-b-0 v-if="timeoutSocialName.length > 0">
      {{ timeoutSocialName }} está tardando demasiado en responder. Inténtelo
      más tarde.
    </p>
    <AuthEmail v-if="isEmailOpen" />
    <BaseButton
      simple
      transparent
      v-ripple
      class="or"
      m-b-0
      @click="isEmailOpen = !isEmailOpen"
      >{{
        !isEmailOpen ? "O usa tu cuenta de email" : "Registrarme con redes"
      }}</BaseButton
    >
  </div>
</template>
<script>
import AuthSocial from "./social/AuthSocial";
import AuthEmail from "./AuthEmail";
export default {
  name: "AuthSignUp",
  components: {
    AuthSocial,
    AuthEmail
  },
  data() {
    return {
      timeoutSocialName: "",
      isEmailOpen: false
    };
  }
};
</script>
