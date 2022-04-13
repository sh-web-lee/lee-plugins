<!--
  功能：search-menu input输入框组件
  作者：lee
  时间：2022年04月13日 14:27:54
  版本：v1.0
-->
<template>
  <div class="search-menu-input">
    <label class="placeholder">{{ placeholder }}</label>
    <input
     class="input"
     type="text"
     :value="value"
     ref="inputValue"
     @input="emitValue($event)"
     @blur="setValue(value)"
    />
    <span class="iconfont icon-arrow-down"></span>
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue'
export default {
  name: 'SearchMenuInput',
  props: {
    placeholder: String,
    value: String
  },
  setup (props, ctx) {
    const instance = getCurrentInstance()

    const emitValue = (e) => {
      ctx.emit('searchValue', e.target.value)
    }
    const setValue = (value) => {
      if (value.length != 0) {
        const _input = instance.refs.inputValue
        _input.value.length > 0 ? _input.value = value : ''
      }
    }

    return {
      emitValue,
      setValue
    }
  }
}
</script>
<style lang="scss" scoped>
 .search-menu-input {
    position: relative;
    width: 100%;
    height: 34px;
    .placeholder {
        position: absolute;
        left: 15px;
        top: 12px;
        color: #999;
    }
    .input {
        width: 100%;
        height: 100%;
        padding: 0 40px 0 15px;
        background-color: #fff;
        border: 1px solid #999;
        border-radius: 5px;
        outline: none;
        transition: all .2s linear;
        font-size: 16px;
        &:focus {
            border-color: #1890ff;
            box-shadow: 0 0 3px #1890ff;
        }
    }
    .iconfont {
        position: absolute;
        right: 15px;
        top: 10px;
        color: #999;
        cursor: pointer;
        &.icon-search {
            font-size: 22px;
            top: 8px;
        }
    }
 }
</style>