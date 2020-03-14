<template>
  <article class="auth-sign-up">
    <section>
      <h2>Registrate con</h2>
      <AuthSocial
        :class="{ hidden: isLoading }"
        @isLoading="isLoading = $event"
        @timeout="timeoutSocialName = $event"
      />
      <p class="timeout" v-if="timeoutSocialName.length > 0 && !isLoading">
        {{ timeoutSocialName }} está tardando demasiado en responder.
      </p>
      <div :class="{ hidden: isLoading }">
        <p class="or">O usa tu cuenta de email:</p>
        <input type="email" placeholder="Inserta tu email" />
        <input type="password" placeholder="Inserta tu contraseña" />
        <input type="password" placeholder="¡Repite la contraseña!" m-b-1 />
        <BaseButton m-b-0 simple @click="registerUser()">Registrar</BaseButton>
      </div>
    </section>
    <section v-show="isLoading" key="loading">
      <p>Identificando...</p>
      <BaseSpinner />
    </section>
  </article>
</template>
<script>
import AuthSocial from "./AuthSocial";
export default {
  name: "AuthSignUp",
  components: {
    AuthSocial
  },
  data() {
    return {
      isLoading: false,
      timeoutSocialName: ""
    };
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
