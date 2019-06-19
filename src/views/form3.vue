<template>
    <div class="form-outer">
        <i-form ref="myform" :model="model" :rules="rules">
            <i-form-item label="name" prop="name">
                <i-input v-model="model.name"/>
            </i-form-item>
            <i-form-item label="age" prop="age">
                <i-input v-model="model.age"/>
            </i-form-item>
            <i-form-item label="email" prop="email">
                <i-input v-model="model.email"/>
            </i-form-item>
        </i-form>
        <div class="operation-group">
            <div class="btn-submit" @click="handleSubmit">提交</div>
            <div class="btn-reset" @click="handleReset">重置</div>
        </div>
    </div>
</template>

<script>
import iForm from '@/components/form/form.vue'
import iFormItem from '@/components/form/form-item.vue'
import iInput from '@/components/form/input.vue'
export default {
    name: 'form3',
    data(){
        return {
            model: {
                name: '',
                age: 0,
                email: ''
            },
            rules: {
                name: [
                    {required: true, message: '名字不能为空', trigger: 'blur'},
                ],
                age: [
                    {required: true, message: '年龄不能为空', trigger: 'blur'},
                    {type: "number",message: '年龄必须为数字', trigger: 'blur'}
                ],
                email: [
                    {required: true, message: '邮箱不能为空', trigger: 'blur'},
                    {type: 'email', message: '邮箱格式不正确', trigger: 'blur'},
                ]
            }
        }
    },
    components: {
        iForm,
        iFormItem,
        iInput
    },
    methods: {
        handleSubmit(){
            this.$refs.myform.validata(valid => {
                if(valid) {
                    alert('校验成功')
                }else {
                    alert('校验失败')
                }
            })
        },
        handleReset() {
            this.$refs.myform.resetFields()
        }
    }
}
</script>

<style>
.form-outer{
    width: 200px;
    margin: 0 auto;
    margin-top: 30px;
}
.operation-group {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
}
.btn-submit{
    width: 120px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    color: #fff;
    background: #3399ff;
    border: 1px solid #3399ff;
    border-radius: 6px;
    margin-right: 10px;
}
.btn-reset{
    width: 120px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    color: #333;
    background: #fff;
    border: 1px solid #d7dde4;
    border-radius: 6px;
}
</style>
