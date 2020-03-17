<template>
  <article class="auth-social">
    <AuthGithub
      @isLoading="$emit('isLoading', $event)"
      @timeout="$emit('timeout', $event)"
    />
    <AuthTwitter
      @isLoading="$emit('isLoading', $event)"
      @timeout="$emit('timeout', $event)"
    />
    <AuthGoogle
      @isLoading="$emit('isLoading', $event)"
      @timeout="$emit('timeout', $event)"
    />
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
  }
};
</script>
<style lang="scss">
.auth-social {
  display: flex;
  justify-content: center;

  .auth-user {
    padding: 0 1rem 0 1rem;
    font-size: 2rem;
    cursor: pointer;
  }
}
</style>
