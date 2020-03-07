<template>
  <article class="auth-social">
    <AuthGithub @isLoading="isLoading = $event" />
    <AuthTwitter @isLoading="isLoading = $event" />
    <AuthGoogle @isLoading="isLoading = $event" />
  </article>
</template>
<script>
import AuthGithub from "./AuthGithub";
import AuthTwitter from "./AuthTwitter";
import AuthGoogle from "./AuthGoogle";
export default {
  name: "AuthSocial",
  components: {
    AuthGithub,
    AuthTwitter,
    AuthGoogle
  },
  data() {
    return {
      isLoading: false
    };
  }
};
</script>
<style lang="scss">
.auth-social {
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  .auth-user {
    padding: 1rem;
    font-size: 2rem;
  }
}
</style>
