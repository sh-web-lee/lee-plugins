<template>
  <div class="app">
    <SlideNav/>
    <div class="main">
      <div class="main-cont">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.app {
  display: flex;
  width: 100%;
  height: 100vh;
  .main {
    padding-left: 272px;
    width: calc(100% - 272px);
    .main-cont {
     padding: 64px 64px 96px;
    }
  }
}
</style>
