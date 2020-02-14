<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
#app {
  position: relative;
  max-width: 375px;
  max-height: 812px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  background: url(https://raw.githubusercontent.com/khadkamhn/secret-project/master/img/background.jpg) center no-repeat;
  background-size: cover;
  background-position-y: 177%;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
  border-radius: 25px;
  transition: all 250ms ease-in;

  &:hover {

    @media screen and (min-width: 500px) {
      transform: scale(1.01) rotate3d(1, 1, 1, -2deg);
      box-shadow: -5px 12px 15px 0 rgba(0, 0, 0, .24), -5px 17px 50px 0 rgba(0, 0, 0, .19);
    }
  }

  & > div {
    position: relative;
    z-index: 1;

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      min-height: 100vh;
      height: 100%;
      background: linear-gradient(to bottom, #5a5da5 0%, rgba(0, 0, 0, 0.7) 44%, #5a5da5 90%);
      transform: rotate3d(-45deg);
    }
  }
}
</style>
