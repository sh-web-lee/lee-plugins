<!--
  功能：search-menu组件
  作者：lee
  时间：2022年04月13日 14:55:01
  版本：v1.0
-->
<template>
  <div class="selector-menu">
      <template v-if="searchData.length > 0">
        <div
        class="menu-item"
        v-for="(item, index) of searchData"
        :key="index"
        @click="setInputValue(item)"
        >
            {{ item.text }}
        </div>
      </template>
      <NoDataTips v-else />
  </div>
</template>
<script>
import NoDataTips from './nodatatips.vue'
import { onMounted, ref, watch } from 'vue-demi'
export default {
  name: 'SelectorMenu',
  props: {
    selectormenu: Array,
    searchValue: ''
  },
  components: {
    NoDataTips
  },
  setup (props, ctx) {
    const searchData = ref([])

    const setInputValue = (item) => {
        ctx.emit('selectItemValue', item)
    }
    const filterData = (value) => {
        searchData.value = props.selectormenu.filter(item => {
            return item.text.toLowerCase().includes(value.toLowerCase())
        })
    }

    onMounted(() => {
        searchData.value = props.selectormenu
    })

    watch(() => {
        return props.searchValue
    }, (value) => {
        filterData(value)
    })
    
    return {
        setInputValue,
        searchData
    }
  }
}
</script>
<style lang="scss" scoped>
 .selector-menu {
    display: none;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    border-radius: 5px;
    .menu-item {
        cursor: pointer;
        height: 35px;
        text-align: center;
        line-height: 35px;
        color: #666;
        margin: 10px 0;
        transition: background-color .3s;
        &:hover {
            background-color: #ededed;
        }
    }
 }
</style>