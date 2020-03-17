<template>
  <section>
    <input type="email" placeholder="Inserta tu email" />
    <input type="password" placeholder="Inserta tu contraseña" m-b-1 />
    <BaseButton m-b-0 simple>Acceder</BaseButton>
    <a href="#" class="remember">He olvidado mi contraseña</a>
  </section>
</template>
<script>
export default {
  name: "Login"
};
</script>
<style lang="scss">
.remember {
  display: block;
  margin-top: 1rem;
  text-align: center;
}
</style>
