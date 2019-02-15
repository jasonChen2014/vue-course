<template>
    <Form v-if="Object.keys(valueList).length" ref="form" :label-width="labelWidth" :model="valueList" :rules="ruleList">
        <FormItem 
            v-for="(item,index) in list" 
            :key="`${_uid}_${index}`" 
            :label="item.label"
            label-position="left"
            :prop="item.name"
            :error="errorStore[item.name]"
        >
            <component :is="item.type" v-model="valueList[item.name]" :range="item.range">
                <template v-if="item.children" >
                    <component 
                        v-for="(child,i) in item.children.list" 
                        :key="`${_uid}_${index}_${i}`" 
                        :is="item.children.type"
                        :label="child.label"
                    >
                    {{child.title}}
                    </component>
                </template>
            </component>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit">提交</Button>
            <Button @click="handleReset">重置</Button>
        </FormItem>
    </Form>
</template>

<script>
import clonedeep from 'clonedeep'
import { sendFormData } from '@/api/data'
export default {
    name: 'FormGroup',
    props: {
        url: {
            type: String,
            required: true
        },
        list: {
            type: Array,
            default: () => []
        },
        labelWidth: {
            type: Number,
            default: 120
        }
    },
    data() {
        return {
            ruleList: {},
            valueList: {},
            initValueList: {},
            errorStore: {}
        }
    },
    methods: {
        initInsideData(){
            let ruleList = {}
            let valueList = {}
            let initValueList = {}
            let errorStore = {}
            let cloneList = clonedeep(this.list)
            cloneList.forEach((item,index) => {
                valueList[item.name] = item.value
                initValueList[item.name] = item.value
                ruleList[item.name] = item.rule
                errorStore[item.name] = ''
            })
            this.ruleList = ruleList
            this.valueList = valueList
            this.initValueList = initValueList
            this.errorStore= errorStore
        },
        handleSubmit(){
            this.$refs.form.validate(valid => {
                if(valid) {
                    sendFormData({ url: this.url, data: this.valueList }).then(res => {
                        this.$Message.success('提交成功')
                    }).catch(err => {
                        //console.log(err)
                        for( let key in err ) {
                            this.errorStore[key] = err[key]
                        }
                        this.$Message.error('提交失败')
                    })
                }
            })
        },
        handleReset(){
            this.valueList = clonedeep(this.initValueList)
        }
    },
    watch:{
        list(){
            this.initInsideData()
        }
    },
    mounted() {
        this.initInsideData()
    }
}
</script>

<style>

</style>
