<template>
  <section>
    <input type="email" placeholder="Inserta tu email" />
    <input type="password" placeholder="Inserta tu contraseña" />
    <input type="password" placeholder="¡Repite la contraseña!" m-b-1 />
    <BaseButton m-b-0 simple>Registrarme</BaseButton>
  </section>
</template>
<script>
export default {
  name: "AuthEmail"
};
</script>
