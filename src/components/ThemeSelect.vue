<template>
  <ol class="theme">
    <li
      class="theme__item"
      v-for="(item, index) in themes"
      :key="`theme-${index}`"
      :style="{ backgroundColor: item.primary }"
      @click="selectTheme(index)"
    ></li>
  </ol>
</template>
<script>
export default {
  name: "ThemeSelect",
  data() {
    return {
      root: document.documentElement,
      themes: [
        {
          primary: "#5a5da5",
          secondary: "#d87a53",
          tertiary: "#d5c553",
          dark: "#333560"
        },
        {
          primary: "#1b262c",
          secondary: "#0f4c81",
          tertiary: "#ed6663",
          dark: "#333560"
        },
        {
          primary: "#0f4c81",
          secondary: "#ed6663",
          tertiary: "#ffa372",
          dark: "#1b262c"
        }
      ]
    };
  },
  methods: {
    selectTheme(index) {
      const theme = Object.entries(this.themes[index]);
      theme.forEach(([key, value]) => {
        this.root.style.setProperty(`--color-${key}`, value);
      });
    }
  }
};
</script>
<style lang="scss">
.theme {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  padding: 1rem;

  &__item {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    border: 1px solid white;
    cursor: pointer;
    transition: all 150ms ease-in;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
