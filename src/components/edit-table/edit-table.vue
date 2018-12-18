<template>
    <div>
        <Table :columns='insideColumns' :data='value'></Table>
    </div>
</template>

<script>
import clonedeep from 'clonedeep'
export default {
    name: 'EditTable',
    props: {
        columns : {
            type: Array,
            default: () => []
        },
        value : {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            insideColumns: [],
            edittingId: '',
            edittingContent: ''
        }
    },
    watch: {
        columns(){
            this.initColumns() 
        }
    },
    methods: {
        handleClick({row, index, column}){
            if(this.edittingId === `${column.key}_${index}`) {
                //save
                let tableData = clonedeep(this.value)
                tableData[index][column.key] = this.edittingContent
                this.$emit('input',tableData)
                this.edittingId = ''
                this.edittingContent = ''
            }else{
                //edit
                this.edittingId = `${column.key}_${index}`
                this.edittingContent = row[column.key]//防止用户未输入而保存为空
            }
        },
        handleInput(newval) {
            this.edittingContent = newval
        },
        initColumns(){
            let insideColumns = this.columns.map((item) => {
                if(item.isEditAble && !item.render) {
                    item.render = (h,{row, index, column}) => {//箭头函数绑定固定作用域
                        //console.log({row, index, column})
                        const isEditting = this.edittingId === `${column.key}_${index}`
                        return (
                            <div>
                                {isEditting?<i-input style="width:50px;" value={row[column.key]} on-input={this.handleInput}></i-input> : <span>{row[column.key]}</span>}
                                <i-button on-click={this.handleClick.bind(this, { row, index, column })}>{ isEditting ? '保存' : '编辑' }</i-button>
                            </div>
                        )
                    }
                    return item
                }else return item
            })
            this.insideColumns = insideColumns
        }
    },
    mounted(){
        this.initColumns()
    }
}
</script>

<style>

</style>
