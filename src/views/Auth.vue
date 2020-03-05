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
    <AuthGithub />
    <BaseButton simple @click="logoutUser()">Logout</BaseButton>
  </section>
</template>
<script>
import AuthService from "@/auth/AuthService";
import AuthGithub from "@/components/auth/AuthGithub";

export default {
  name: "Auth",
  components: {
    AuthGithub
  },
  data() {
    return {
      authService: new AuthService(),
      email: "",
      password: "",
      emailLogin: "asdf@gmail.com",
      passwordLogin: "asdf@gmail.com",
      githubImageUrl: "",
      githubNick: ""
    };
  },
  methods: {
    registerUser() {
      this.authService.register(this.email, this.password);
    },
    loginUser() {
      this.authService
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
      this.authService.logout();
    },
    loginUserWithGithub() {
      this.authService.launchGithubAuth().then(user => {
        this.githubImageUrl = user.photoURL;
        this.githubNick = user.displayName;
      });
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

  .imageGithub {
    width: 100px;
    border-radius: 50%;
  }
}
</style>
