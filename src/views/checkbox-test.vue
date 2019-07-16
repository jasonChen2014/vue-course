<template>
    <div>
        <h-checkbox v-model="val" trueValue=1 falseValue=0 @on-change="handleChange">
            <span>老板喝咖啡吗</span>
        </h-checkbox>
        <h-checkbox-group v-model="fruits" @on-change="handleChange2">
            <h-checkbox label='apple'>
                <span>apple</span>
            </h-checkbox>
            <h-checkbox label='pair'>
                <span>pair</span>
            </h-checkbox>
            <h-checkbox label='orange'>
                <span>orange</span>
            </h-checkbox>
        </h-checkbox-group>
    </div>
</template>

<script>
import HCheckbox from '@/components/checkbox/checkbox'
import HCheckboxGroup from '@/components/checkbox/checkbox-group'
export default {
    name: 'testCheckbox',
    components: {
        HCheckbox,
        HCheckboxGroup
    },
    data(){
        return {
            val: 1,
            fruits: ['apple','pair','orange']
        }
    },
    methods: {
        handleChange(value){
            console.log(value)
        },
        handleChange2(value) {
            console.log('handleChange2',value)
        }
    }
}
</script>

<style>

</style>
