<template>
  <section page class="auth">
    <TheHeader
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      :withBack="false"
    />
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
      <p>Registro con email:</p>
      <input v-model="email" type="email" placeholder="Inserta tu email" />
      <input
        v-model="password"
        type="password"
        placeholder="Inserta tu contraseña"
      />
      <BaseButton simple @click="registerUser()">Registrar</BaseButton>
    </section>
    <p class="socials-intro">o identificarse con:</p>
    <div class="socials">
      <AuthGithub />
      <AuthGoogle />
      <AuthTwitter />
    </div>
    <div class="form">
      <BaseButton simple @click="logoutUser()">Logout</BaseButton>
    </div>
  </section>
</template>
<script>
import AuthGithub from "@/components/auth/social/AuthGithub";
import AuthGoogle from "@/components/auth/social/AuthGoogle";
import AuthTwitter from "@/components/auth/social/AuthTwitter";

export default {
  name: "Auth",
  services: ["$authService"],
  components: {
    AuthGithub,
    AuthGoogle,
    AuthTwitter
  },
  data() {
    return {
      auth: this.$services.$authService,
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
      this.auth.register(this.email, this.password);
    },
    loginUser() {
      this.auth.login(this.emailLogin, this.passwordLogin);
    },
    logoutUser() {
      this.auth.logout();
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

  .image {
    width: 100px;
    border-radius: 50%;
  }

  .socials {
    display: flex;
    justify-content: space-around;
    max-width: 62%;
    margin: 1rem auto;

    &-intro {
      text-align: center;
    }

    .user-auth {
      padding: 1rem;
      cursor: pointer;
    }
  }
}
</style>
