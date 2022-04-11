<!--
  功能：Dots
  作者：lee
  时间：2022年04月10日 15:24:42
  版本：v1.0
  修改人员：
  修改时间：
-->
<template>
  <div
   class="car-dots"
   v-if="hasDot"
  >
    <div
     class="dot-item"
     v-for="item in itemLen"
     :key="item"
    >
        <a
            href="javascript:;"
            class="dot-lk"
            :style="{ backgroundColor: (item - 1) === currentIndex ? dotBgColor : '#fff' }"
            @click="dotClick(item - 1)"
        ></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CarDots',
  props: {
    hasDot: {
        type: Boolean,
        default: true
    },
    itemLen: Number,
    currentIndex: Number,
    dotBgColor: {
        type: String,
        default: '#ff5000'
    }
  },
  setup (props, ctx) {
    const dotClick = (index) => {
        ctx.emit('dotClick', index)
    }
    return {
        dotClick
    }
  }
}
</script>
<style lang="scss" scoped>
  .car-dots {
    width: 70px;
    height: 13px;
    border-radius: 10px;
    position: absolute;
    bottom: 15px;
    text-align: center;
    font-size: 0;
    left: 50%;
    z-index: 1;
    margin-left: -39px;
    background-color: rgba(255, 255, 255, .3);
    .dot-item {
        display: inline-block;
        margin: 3px;
        .dot-lk {
            display: block;
            padding-top: 8px;
            width: 8px;
            height: 0;
            border-radius: 50%;
            background-color: #fff;
        }
    }
 }
</style>