<!--
  功能：Caousel
  作者：lee
  时间：2022年04月10日 14:32:48
  版本：v1.0
  修改人员：
  修改时间：
-->
<template>
  <div
   class="carousel"
   @mouseenter="mouseEnter"
   @mouseleave="mouseLeave"
  >
    <div class="inner">
        <CarDot
            :hasDot="hasDot"
            :itemLen="itemLength"
            :currentIndex="currentIndex"
            :dotBgColor="dotBgColor"
            @dotClick="dotClick"
        />
        <CarDirector
            :hasDirector="hasDirector"
            dir="prev"
            @dirClick="dirClick"
        />
        <CarDirector
            dir="next"
            @dirClick="dirClick"
        />
        <slot></slot>
    </div>
  </div>
</template>
<script>
import {
    getCurrentInstance,
    onBeforeUnmount,
    onMounted,
    reactive,
    toRefs
} from 'vue'
import CarDot from './dots'
import CarDirector from './director'
export default {
  name: 'Carousel',
  components: {
    CarDot,
    CarDirector
  },
  props: {
    autoplay: {
        type: Boolean,
        default: true
    },
    duration: {
        type: Number,
        default: 3000
    },
    initial: {
        type: Number,
        default: 0
    },
    hasDot: {
        type: Boolean,
        default: true
    },
    hasDirector: {
        type: Boolean,
        default: true
    },
    dotBgColor: String
  },
  setup (props) {
    const instance = getCurrentInstance()

    const state = reactive({
        currentIndex: props.initial,
        itemLength: 0
    })

    let timer = null
    const autoplay = () => {
        if (props.autoplay) {
            timer = setInterval(() => {
                setIndex('next')
            }, props.duration)
        }
    }

    const setIndex = (dir) => {
        switch (dir) {
            case 'next':
                state.currentIndex += 1
                if (state.currentIndex === state.itemLength) {
                    state.currentIndex = 0
                }
                break
            case 'prev':
                state.currentIndex -= 1
                if (state.currentIndex === -1) {
                    state.currentIndex = state.itemLength - 1
                }
                break
            default:
                break
        }
    }

    const mouseEnter = () => {
        _clearIntervalFn()
    }

    const mouseLeave = () => {
        autoplay()
    }
    
    const dotClick = (index) => {
        state.currentIndex = index
    }

    const dirClick = (dir) => {
        setIndex(dir)
    }

    onMounted(() => {
        state.itemLength = instance.slots.default()[0].children.length
        autoplay()
    })

    onBeforeUnmount(() => {
        _clearIntervalFn()
    })

    function _clearIntervalFn () {
        clearInterval(timer)
        timer = null
    }

    return {
        ...toRefs(state),
        mouseEnter,
        mouseLeave,
        dotClick,
        dirClick
    }
  }
}
</script>
<style lang="scss" scoped>
.carousel {
    position: relative;
    width: 520px;
    height: 280px;
    margin: 0 auto;
    .inner {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .car-item {
            img {
                width: 100%;
            }
        }
    }
}
</style>
