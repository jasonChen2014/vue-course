<template>
    <Form ref="form" :model="formData" :rules="ruleList" :label-width="200" class="form-wrap">
        <FormItem label="姓名" prop="name">
            <Input type="text" v-model="formData['name']" />
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input type="password" v-model="formData['password']" />
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit">提交</Button>
        </FormItem>
    </Form>
</template>

<script>
import { sendFormData } from '@/api/data'
const nameValidator = ( rule,value,callback ) => {
    console.log(rule)
    if(value !== 'haoxin') {
        callback(new Error('name should be haoxin'))
    }else{
        callback()
    }
}
export default {
    name: 'form_page',
    data() {
        return {
            formData: {
                name: '',
                password: ''
            },
            ruleList: {
                name: [
                    {required: true, message: 'empty name', trigger: 'blur'},
                    {validator: nameValidator, trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$refs.form.validate(valid => {
                if(valid) {
                    sendFormData(this.formData).then(res => {
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            })
        }
    }
}
</script>

<style lang="less">
.form-wrap{
    padding: 20px;
    width: 600px;
}
</style>

