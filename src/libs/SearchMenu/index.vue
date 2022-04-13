<!--
  功能：search-menu 自定义插件
  作者：lee
  时间：2022年04月13日 14:26:38
  版本：v1.0
-->
<template>
  <div class="selector" v-focus>
    <SearchInput
      placeholder="请选择"
      :value="InputValue"
      @searchValue="search"
    />
    <SearchMenu
      :selectormenu="selectorData"
      @selectItemValue="setInputValue"
      :searchValue="searchValue"
    />
  </div>
</template>
<script>
import SearchInput from './input.vue'
import SearchMenu from './menu.vue'
import focus from './focus'
import { reactive, toRefs } from 'vue'
export default {
  name: 'Selector',
  directives: {
    focus
  },
  components: {
    SearchInput,
    SearchMenu
  },
  props: {
    selectorData: Array
  },
  setup () {
    const state = reactive({
      InputValue: '',
      searchValue: ''
    })
    const search = (value) => {
      state.searchValue = value
    }
    const setInputValue = (item) => {
      state.InputValue = item.text
    }

    return {
      setInputValue,
      ...toRefs(state),
      search
    }
  }
}
</script>
<style lang="scss" scoped>
 .selector {
    position: relative;
    width: 300px;
 }
</style>