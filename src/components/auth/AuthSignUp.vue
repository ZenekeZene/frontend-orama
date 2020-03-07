<template>
  <article class="auth-sign-up">
    <fade-transition mode="in-out">
      <section v-if="!isLoading" key="sign-up">
        <h2>Registrate con</h2>
        <AuthSocial @isLoading="isLoading = $event" />
        <p class="or">O usa tu cuenta de email:</p>
        <input type="email" placeholder="Inserta tu email" />
        <input type="password" placeholder="Inserta tu contraseña" />
        <input type="password" placeholder="¡Repite la contraseña!" />
        <BaseButton simple @click="registerUser()">Registrar</BaseButton>
      </section>
      <section v-else key="loading">
        <p>Identificando...</p>
        <BaseSpinner />
      </section>
    </fade-transition>
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
      isLoading: false
    };
  }
};
</script>
<style lang="scss">
.auth-sign-up {
  padding: 1rem;

  .or {
    font-family: "Museo Sans Rounded 100", sans-serif;
  }
}
</style>
