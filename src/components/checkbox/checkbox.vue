<template>
    <label>
        <span>
            <input 
                v-if="group"
                type="checkbox"
                :disabled="disabled"
                :value="label"
                v-model="model"
                @change="handleChange"
            />
            <input 
                v-else
                type="checkbox"
                :disabled="disabled"
                :checked="currentValue"
                @change="handleChange"
            />
        </span>
        <slot></slot>
    </label>
</template>

<script>
import emitter from '@/mixins/emitter'
import { findComponentUpward } from '@/lib/util'
export default {
    name: 'hCheckbox',
    mixins: [emitter],
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: [Boolean, String, Number],
            default: false
        },
        trueValue: {
            type: [Boolean, String, Number],
            default: true
        },
        falseValue: {
            type: [Boolean, String, Number],
            default: true
        },
        label: {
            type: [Boolean, String, Number],
            default: true
        }
    },
    data(){
        return {
            currentValue: this.value,
            group: false,
            model: []
        }
    },
    watch: {
        value(val) {
            // 优化原因：修改父组件传入的值必须符合组件属性要求
            if (val === this.trueValue || val === this.falseValue) {
                this.updateModel();
            } else {
                throw 'Value should be trueValue or falseValue.';
            }
        }
    },
    methods: {
        updateModel(){
            this.currentValue = this.value === this.trueValue
        },
        handleChange(event) {
            const checked = event.target.checked
            if(this.disabled) return
            if(!this.group) {
                const value = checked ? this.trueValue : this.falseValue
                this.$emit('input',value)
                this.$emit('on-change',value)
                this.dispatch('formItem','onHandleBlur',value)
            } else {
                const hgroup = findComponentUpward(this,'hCheckboxGroup')
                if(hgroup) {
                    hgroup.updateModel(this.model)
                }
            }
        }
    }
}
</script>

<style>

</style>
