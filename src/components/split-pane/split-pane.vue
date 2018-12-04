<template>
    <div class="split-pane-wrapper" ref="outer">
        <div class="pane pane-left" :style="{ width: offsetLeftPercent, 'padding-right': `${this.triggerWidth/2}px` }">
            <slot name="left"></slot>
        </div>
        <div class="pane-trigger" @mousedown="handleDown" :style="{ left: triggerLeft }"></div>
        <div class="pane pane-right" :style="{ left: offsetLeftPercent ,'padding-left': `${this.triggerWidth/2}px`}">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'splitPane',
    props: {
        min: {
            type: Number,
            default: 10
        },
        max: {
            type: Number,
            default: 90
        },
        value: {
            type: Number,
            validator: (value)=>{
                return value && value > 0 && value < 100
            }
        },
        triggerWidth: {
            type: Number,
            default: 8
        }
    },
    data(){
        return {
            initOffset: 0,
            canMove: false
        }
    },
    computed: {
        triggerLeft(){
            return `calc(${this.value}% - ${this.triggerWidth/2}px)`
        },
        offsetLeftPercent(){
            return `${this.value}%`
        }
    },
    methods: {
        handleDown(event) {
            this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
            document.addEventListener('mousemove',this.handleMove)
            document.addEventListener('mouseup',this.handleUp)
            this.canMove = true
        },
        handleMove(event) {
            if(!this.canMove) return
            const outerRect = this.$refs.outer.getBoundingClientRect()
            let offsetLeft = (event.pageX - outerRect.left - this.initOffset + this.triggerWidth/2)/outerRect.width*100
            if(offsetLeft < this.min) offsetLeft = this.min
            else if(offsetLeft > this.max) offsetLeft = this.max
            this.$emit('update:value',offsetLeft)
        },
        handleUp(event) {
            this.canMove = false
        }
    }
}
</script>

<style lang='less'>
.split-pane-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    .pane{
        position: absolute;
        top: 0;
        height: 100%;
        box-sizing: border-box;
        &-left{
            width: 30%;
            left: 0;
            background: palegoldenrod;
        }
        &-right {
            right: 0;
            left: 30%;
            background: palegreen;
        }
        &-trigger{
            position: absolute;
            width: 8px;
            left: calc(30% - 4px);
            background: red;
            height: 100%;
            top: 0;
            user-select: none;
            z-index: 10;
            cursor: col-resize;
        }
    }
}
</style>
