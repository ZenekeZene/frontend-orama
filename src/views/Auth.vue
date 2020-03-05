<template>
  <section page class="auth">
    <TheHeader
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      :withBack="false"
    />
    <section class="form">
      <p>Registro con email:</p>
      <input v-model="email" type="email" placeholder="Inserta tu email" />
      <input
        v-model="password"
        type="password"
        placeholder="Inserta tu contraseña"
      />
      <BaseButton simple @click="registerUser()">Registrar</BaseButton>
    </section>
    <section class="form">
      <p>Login con email:</p>
      <input v-model="emailLogin" type="email" placeholder="Inserta tu email" />
      <input
        v-model="passwordLogin"
        type="password"
        placeholder="Inserta tu contraseña"
      />
      <BaseButton simple @click="loginUser()">Login</BaseButton>
    </section>
    <section class="form">
      <p>Registro con Github</p>
      <AuthGithub />
    </section>
    <section class="form">
      <p>Registro con Google</p>
      <AuthGoogle />
    </section>
    <section class="form">
      <p>Registro con Twitter</p>
      <AuthTwitter />
    </section>
    <section class="form">
      <BaseButton simple @click="logoutUser()">Logout</BaseButton>
    </section>
  </section>
</template>
<script>
import AuthService from "@/auth/AuthService";
import AuthGithub from "@/components/auth/AuthGithub";
import AuthGoogle from "@/components/auth/AuthGoogle";
import AuthTwitter from "@/components/auth/AuthTwitter";

export default {
  name: "Auth",
  components: {
    AuthGithub,
    AuthGoogle,
    AuthTwitter
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
  min-height: auto !important;
  overflow-y: scroll;

  .form {
    padding: 0 2rem;

    > * {
      margin-bottom: 1rem;
    }
  }

  .imageGithub {
    width: 100px;
    border-radius: 50%;
  }
}
</style>
