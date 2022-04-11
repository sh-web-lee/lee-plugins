<!--
  功能：Carousel-page
  作者：lee
  时间：2022年04月11日 11:30:46
  版本：v1.0
  修改人员：
  修改时间：
-->
<template>
  <div class="car-view">
    <carousel
      :autoplay="true"
      :duration="3000"
      :initial="0"
      :hasDot="true"
      :hasDirector="true"
    >
      <car-item
        v-for="(item, index) of carData"
        :key="index"
        >
        <img :src="require(`@/assets/img/${ item.image_name }`)" alt="">
        </car-item>
    </carousel>
  </div>
</template>
<script>
import carData from '@/data/carousel'
export default {
  name: 'Car-view',
  setup () {
    return {
        carData
    }
  }
}
</script>
<style lang="scss" scoped>
 
</style>