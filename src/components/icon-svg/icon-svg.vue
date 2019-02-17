<template>
    <svg class="icon" aria-hidden="true" :style="style">
        <use :xlink:href="href"></use>
    </svg>
</template>

<script>
import '@/assets/font/iconfont.js'
export default {
    name: 'IconSvg',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: {
            type: Number,
            default: 20
        }
    },
    computed: {
         href(){
             return `#icon-${this.type}`
         },
        style(){
            return {
                fontSize: `${this.size}px`
            }
        }
    }
}
</script>

<style lang="less">
.icon {
  width: 1em;
  height: 1em;
  font-size: 20px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

