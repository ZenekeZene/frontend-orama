<template>
  <article class="auth-sign-up">
    <h2>Registrate con</h2>
    <AuthSocial />
    <p class="or">O usa tu cuenta de email</p>
    <input type="email" placeholder="Inserta tu email" />
    <input type="password" placeholder="Inserta tu contraseña" />
    <input type="password" placeholder="¡Repite la contraseña!" />
    <BaseButton simple @click="registerUser()">Registrar</BaseButton>
  </article>
</template>
<script>
import AuthSocial from "./AuthSocial";
export default {
  name: "AuthSignUp",
  components: {
    AuthSocial
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
