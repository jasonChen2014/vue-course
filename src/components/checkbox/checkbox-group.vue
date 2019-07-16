<template>
    <div class="h-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
import emitter from '@/mixins/emitter'
import { findComponentsDownward } from '@/lib/util'
export default {
    name: 'hCheckboxGroup',
    mixins: [emitter],
    props: {
        value: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            model: this.value
        }
    },
    watch:{
        value(val) {
            this.model = val
        }
    },
    mounted(){
        const cboxes = findComponentsDownward(this,'hCheckbox')
        cboxes.forEach(item => {
            item.group = true
            item.model = this.model
        })
    },
    methods: {
        updateModel(model) {
            this.$emit('input',model)
            this.$emit('on-change',model)
            this.dispatch('formItem','onHandleBlur',model)
        }
    }
}
</script>

<style>

</style>
