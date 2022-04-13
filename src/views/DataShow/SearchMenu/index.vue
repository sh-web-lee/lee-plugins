<!--
  功能：搜索下拉选择菜单
  作者：lee
  时间：2022年04月13日 14:17:24
  版本：v1.0
  修改人员：
  修改时间：
-->
<template>
  <div class="selector-page">
    <h1 class="page-title">This is SearchMenu page </h1>
    <selector
      :selectorData="selectorData"
    />
  </div>
</template>
<script>
import selectorData from '@/data/selector'
export default {
  name: 'SelectorPage',
  setup () {
    return {
      selectorData
    }
  }
}
</script>
<style lang="scss" scoped>
 .page-title {
   margin: 2rem 0;
   font-size: 1.3rem;
   font-weight: bold;
 }
</style>