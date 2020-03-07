<template>
  <article class="auth-social">
    <section v-if="isLoading" key="empty">
      <BaseSpinner />
    </section>
    <section v-else key="social">
      <AuthGithub @isLoading="isLoading = $event" />
      <AuthTwitter @isLoading="isLoading = $event" />
      <AuthGoogle @isLoading="isLoading = $event" />
    </section>
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
