<template>
    <div class="form-wrap">
        <form-group :list="list" :url="url"></form-group>
    </div>
</template>

<script>
import formGroup from '@/components/form-group'
export default {
    name: 'form2',
    components: {
        formGroup
    },
    data() {
        return {
            url: "/sentFormData",
            list: [
                {
                    label: '用户名',
                    name: 'username',
                    type: 'i-input',
                    value: '',
                    rule: [
                        { required: true, message: 'empty name', trigger: 'blur' }
                    ]
                },
                {
                    label: '范围',
                    name: 'range',
                    type: 'slider',
                    value: [10,100],
                    range: true
                },
                {
                    label: '性别',
                    name: 'sex',
                    type: 'radioGroup',
                    value: 'man',
                    children: {
                        type: 'radio',
                        list: [
                            { title: '男', label: 'man' },
                            { title: '女', label: 'women' }
                        ]
                    }
                },
                {
                    label: '技能',
                    name: 'skill',
                    type: 'checkboxGroup',
                    value: [],
                    children: {
                        type: 'checkbox',
                        list: [
                            { title: 'java', label: 'java' },
                            { title: 'vue', label: 'vue' },
                            { title: 'nodejs', label: 'nodejs' }
                        ]
                    }
                }
            ]
        }
    }
}
</script>

<style lang="less">
.form-wrap{
    width: 600px;
    padding: 20px;
}
</style>

