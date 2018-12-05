<template>
    <list :list = 'list' :render='renderFunc'>
        <!-- <count-to slot="aa" slot-scope="count" :end-val="count.number"></count-to> -->
    </list>
</template>

<script>
import list from '_c/list'
import CountTo from '_c/countTo'
export default {
    name: 'render_page',
    components: {
        list,
        CountTo
    },
    data() {
        return {
            list: [
                {number: 100},
                {number: 200}
            ]
        }
    },
    methods: {
        renderFunc(h,number){
            return (
                // <i style={{color:'pink'}}>{name}</i>
                <CountTo nativeOn-click={this.handleClick} on-on-animation-end={this.handleEnd} endVal={number} style={{color: 'pink'}}></CountTo>
            )
        },
        handleClick(event) {
            console.log(event)
        },
        handleEnd(val) {
            console.log(val)
        }
    }
}
</script>

<style>

</style>
