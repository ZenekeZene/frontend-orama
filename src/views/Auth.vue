<template>
  <section page class="auth">
    <TheHeader
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      :withBack="false"
    />
    <section class="form">
      <input v-model="email" type="email" placeholder="Inserta tu email" />
      <input
        v-model="password"
        type="password"
        placeholder="Inserta tu contraseña"
      />
      <BaseButton simple @click="registerUser()">Registrar</BaseButton>
    </section>
    <section class="form">
      <input v-model="emailLogin" type="email" placeholder="Inserta tu email" />
      <input
        v-model="passwordLogin"
        type="password"
        placeholder="Inserta tu contraseña"
      />
      <BaseButton simple @click="loginUser()">Login</BaseButton>
    </section>
    <BaseButton simple @click="logoutUser()">Logout</BaseButton>
  </section>
</template>
<script>
import AuthenticationService from "../api/AuthenticationService";
export default {
  name: "Auth",
  data() {
    return {
      authenticationService: new AuthenticationService(),
      email: "",
      password: "",
      emailLogin: "asdf@gmail.com",
      passwordLogin: "asdf@gmail.com"
    };
  },
  methods: {
    registerUser() {
      this.authenticationService.register(this.email, this.password);
    },
    loginUser() {
      this.authenticationService
        .login(this.emailLogin, this.passwordLogin)
        .then(result => {
          if (!result) {
            console.log("No existe el usuario");
          } else if (result.user) {
            console.log("Existe!");
          }
        });
    },
    logoutUser() {
      this.authenticationService.logout();
    }
  }
};
</script>
<style lang="scss">
.auth {
  display: block;

  .form {
    padding: 3rem;
  }
}
</style>
