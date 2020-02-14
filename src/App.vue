<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
#app {
  position: relative;
  max-width: 375px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  background: url(https://raw.githubusercontent.com/khadkamhn/secret-project/master/img/background.jpg) center no-repeat;
  background-size: cover;
  background-position-y: 177%;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
  border-radius: 25px;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(90, 93, 165, .8);
    background: linear-gradient(to bottom, #5a5da5 0%, rgba(0, 0, 0, 0.7) 44%, #5a5da5 90%);
  }

  & > div {
    position: relative;
    z-index: 2;
  }
}
</style>
