<template>
    <i :class="classes" :style="style"></i>
</template>

<script>
import '@/assets/font/iconfont.css'
export default {
    name: 'IconFont',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: {
            type: Number,
            default: 12
        },
        color: {
            type: String,
            default: '#515a6e'
        }
    },
    computed: {
        classes(){
            return ['iconfont',`icon-${this.type}`]
        },
        style(){
            return {
                fontSize: this.size+'px',
                color: this.color
            }
        }
    }
}
</script>

<style lang="less">
@font-face {
  font-family: "iconfont";
  src: url("../../assets/font/iconfont.eot");
  src: url("../../assets/font/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../../assets/font/iconfont.woff") format("woff"),
    url("../../assets/font/iconfont.ttf") format("truetype"),
    url("../../assets/font/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

</style>

