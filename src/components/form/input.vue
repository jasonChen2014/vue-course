<template>
    <input 
        type="text"
        :value="currentVal"
        @input="handleInput"
        @blur="handleBlur"
    />
</template>

<script>
import emitter from '@/mixins/emitter'
export default {
    name: 'cInput',
    mixins: [emitter],
    props:{
        value: {
            type: [String,Number]
        }
    },
    data() {
        return {
            currentVal: this.value
        }
    },
    watch: {
        // 注意函数中需要添加参数指向变化后的值
        value(val){
            this.currentVal = val
        }
    },
    methods: {
        handleInput(e){
            const value = e.target.value
            this.currentValue = value
            this.$emit('input',value)
            this.dispatch('formItem','onHandleInput',value)
        },
        handleBlur(e){
            this.dispatch('formItem','onHandleBlur',this.currentValue)
        } 
    }
}
</script>

<style>

</style>
