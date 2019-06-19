<template>
    <div class="form-item">
        <div v:if="label" class="form-label" :class="{ 'i-form-item-label-required': isRequired }">{{this.label}}</div>
        <div>
            <slot/>
            <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
        </div>
    </div>
</template>

<script>
import emitter from '@/mixins/emitter'
import AsyncValidator from 'async-validator'
export default {
    name: 'formItem',
    inject: ['form'],
    mixins: [emitter],
    props: {
        label: {
            type: String
        },
        prop: {
            type: String,
            required:true
        },
        isRequired: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            validateState: '',
            validateMessage: ''
        }
    },
    mounted(){
        // 设置初始值，以便在重置时恢复默认值
        this.initialValue = this.form.model[this.prop]
        //表单组件渲染成功，触发父组件即form组件缓存自己
        this.dispatch('cForm','storageFormItem',this)
        //输入框值发生变化，执行校验
        this.$on('onHandleInput',() => {
            this.handleInput()
        })
        this.$on('onHandleBlur',() => {
            this.handleBlur()
        })
    },
    destroyed(){
        //销毁表单组件后需要通知父组件清除缓存中到该组件
        this.dispatch('cForm','removeFormItem',this)
    },
    methods: {
        // 输入框值发生变化，触发校验
        handleInput() {
            this.validate('input')
        },
        handleBlur() {
            this.validate('blur')
        },
        // 获取验证规则
        getRules(){
            const formRules = this.form.rules
            const rules = formRules ? formRules[this.prop] : []
            return [].concat(rules || []) // 返回一个新的副本
        },
        // 返回跟触发方式相关的规则
        getFilterRules(trigger){
            const rules = this.getRules()
            return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
        },
        validate(trigger,callback = () => {}){
            const rules = this.getFilterRules(trigger)
            if(!rules || rules.length === 0) return true
            const val = this.form.model[this.prop]
            const descriptor = {
                [this.prop]: rules
            }
            const validator = new AsyncValidator(descriptor)
            const model = {
                [this.prop]: val
            }
            validator.validate(model,{ firstFields: true }, (errors,fields) => {
                this.validateState = !errors ? 'success' : 'error'
                this.validateMessage = errors ? errors[0].message : ''
                callback(this.validateMessage)
            })
        },
        // 重置数据
        resetField () {
            this.validateState = ''
            this.validateMessage = ''

            this.form.model[this.prop] = this.initialValue
        }
    }
}
</script>

<style>
    .form-item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 48px;
    }
    .form-label {
        width: 120px;
        text-align: justify;
    }
    .i-form-item-label-required:before {
        content: '*';
        color: red;
    }
    .i-form-item-message {
        color: red;
    }
</style>
