<!--
  功能：slide-nav
  作者：lee
  时间：2022年04月11日 10:55:12
  版本：v1.0
  修改人员：
  修改时间：
-->
<template>
  <div class="slide-nav">
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1.1"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu
         v-for="item in menuData"
         :key="item.index"
         :index="item.index"
        >
            <template #title>
                <span>{{ item.label }}</span>
            </template>
            <el-menu-item
             v-for="subItem in item.children"
             :key="subItem.index"
             :index="subItem.index"
            >
                <router-link class="view-lk" :to="subItem.path">{{ subItem.label }}</router-link>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
  </div>
</template>
<script>
import menuData from '@/data/slidenav'
export default {
  name: 'SlideNav',
  setup () {
    const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
    }
    return {
        handleOpen,
        handleClose,
        menuData
    }
  }
}
</script>
<style lang="scss" scoped>
 .slide-nav {
    position: fixed;
    width: 272px;
    height: 100%;
    background-color: #545c64;
    overflow-y: auto;
    transform: translate(0);
 }
 .is-active {
    .view-lk {
        color: #ffd04b;
    }
 }
 .view-lk {
    display: block;
    width: 100%;
    color: #fff;
    text-decoration: none;
 }
</style>