<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'cForm',// 不能用保留字
    provide(){
        return {
            form: this
        }
    },
    props: {
        model: {
            type: Object,
            default: () => ({})
        },
        rules: {
            type: Object,
            default: () => ({})
        }
    },
    data(){
        return {
            // 通过fields存储form-item，方便在提交表单的时候调用没一个formitem的校验函数
            fields: []
        }
    },
    created(){
        // 缓存子组件formitem，由于组件渲染顺序由内到外，因此子组件渲染完成到时候，父组件可能未完成渲染，因此在created中监听
        this.$on('storageFormItem',item => {
            this.fields.push(item)
        })
        // 子组件销毁时需要清除缓存
        this.$on('removeFormItem',item => {
            this.fields.splice(this.fields.indexOf(item),1)
        })
    },
    methods: {
        // 公开方法：全部重置数据
        resetFields() {
            this.fields.forEach(field => {
                field.resetField();
            });
        },
        // 共开方法：表单校验
        validata(callback) {
            return new Promise(resolve => {
                let valid = true
                let count = 0
                this.fields.forEach(field => {
                    field.validate('',error => {
                        if(error) {
                            valid = false
                        }
                        if (++count === this.fields.length) {
                            resolve(valid)
                            if(typeof callback === 'function') {
                                callback(valid)
                            }
                        }
                    })
                })
            })
        }
    }
}
</script>

<style>

</style>
