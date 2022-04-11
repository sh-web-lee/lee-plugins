<template>
  <div class="app">
    <SlideNav/>
    <div class="main">
      <div class="main-cont">
        <router-view/>
      </div>
    </div>
    <!-- <el-container>
      <el-aside width="200px">
        <SlideNav/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container> -->
  </div>
</template>
<script>
import SlideNav from './components/SlideNav.vue'
export default {
  components: {
    SlideNav
  },
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
