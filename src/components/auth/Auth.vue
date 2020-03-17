<template>
  <article class="auth">
    <section class="actions" v-if="!isLoading">
      <h2>
        <span
          :class="{ '--selected': panel === 'register' }"
          @click="panel = 'register'"
          >Regístrate</span
        >
        /
        <span
          :class="{ '--selected': panel === 'login' }"
          @click="panel = 'login'"
          >Accede</span
        >
      </h2>
      <fade-transition mode="in-out">
        <AuthSignUp
          v-if="panel === 'register' && !isLoading"
          key="register"
          @isLoading="isLoading = $event"
        />
        <AuthLogin v-else key="login" />
      </fade-transition>
    </section>
    <section v-show="isLoading" key="loading">
      <p>Identificando...</p>
      <BaseSpinner />
    </section>
  </article>
</template>
<script>
import AuthSignUp from "./AuthSignUp";
import AuthLogin from "./AuthLogin";
export default {
  name: "Auth",
  components: {
    AuthSignUp,
    AuthLogin
  },
  data() {
    return {
      isLoading: false,
      panel: "register"
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
.auth {
  padding: 1rem;

  .timeout,
  .or {
    text-align: center;
    font-family: "Museo Sans Rounded 100", sans-serif;
  }

  .actions {
    span {
      display: inline-block;
      cursor: pointer;
      opacity: 0.3;
      transition: opacity 250ms ease-in;

      &.--selected {
        opacity: 1;
      }
    }
  }
}
</style>
