<template>
  <article class="auth-sign-up">
    <section>
      <h2>Registrate con {{ isEmailOpen ? "email" : "redes" }}</h2>
      <AuthSocial
        @isLoading="isLoading = $event"
        @timeout="timeoutSocialName = $event"
        :class="{ hidden: isLoading || isEmailOpen }"
      />
      <p
        class="timeout"
        m-b-0
        v-if="timeoutSocialName.length > 0 && !isLoading"
      >
        {{ timeoutSocialName }} está tardando demasiado en responder. Inténtelo
        más tarde.
      </p>
      <AuthEmail v-if="!isLoading && isEmailOpen" />
      <BaseButton
        simple
        transparent
        v-ripple
        class="or"
        m-b-0
        @click="isEmailOpen = !isEmailOpen"
        v-if="!isLoading"
        >{{
          !isEmailOpen ? "O usa tu cuenta de email" : "Registrarme con redes"
        }}</BaseButton
      >
    </section>
    <section v-show="isLoading" key="loading">
      <p>Identificando...</p>
      <BaseSpinner />
    </section>
  </article>
</template>
<script>
import AuthSocial from "./AuthSocial";
import AuthEmail from "./AuthEmail";
export default {
  name: "AuthSignUp",
  components: {
    AuthSocial,
    AuthEmail
  },
  data() {
    return {
      isLoading: false,
      timeoutSocialName: "",
      isEmailOpen: false
    };
  },
  watch: {
    isEmailOpen() {
      this.timeoutSocialName = "";
    }
  }
};
</script>
<style lang="scss">
.auth-sign-up {
  padding: 1rem;

  .timeout,
  .or {
    text-align: center;
    font-family: "Museo Sans Rounded 100", sans-serif;
  }
}
</style>
