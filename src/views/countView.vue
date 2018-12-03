<template>
    <div>
        <count-to ref="number" :end-val='endVal'></count-to>
        <button @click="getNumber">获取数值</button>
        <button @click="updateNumber">更新数值</button>
    </div>
</template>

<script>
import countTo from '_c/countTo'
export default {
    name: 'countView',
    data(){
        return {
            endVal: 100
        }
    },
    components: {
        countTo
    },
    mounted(){
        //console.log(this)
    },
    methods: {
        getNumber() {
            console.log(this.$refs.number.getNumber())
        },
        updateNumber(){
            this.endVal += Math.random()*100
        }
    }
}
</script>

<style>

</style>
