<template>
    <div>
        <Table :columns='insideColumns' :data='value'></Table>
    </div>
</template>

<script>
import clonedeep from 'clonedeep'
export default {
    name: 'EditTableMul',
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
            edittingContent: '',
            insideData: []
        }
    },
    watch: {
        columns(){
            this.initColumns() 
        },
        value() {
            this.initColumns()//要修改insideData
        }
    },
    methods: {
        handleClick({row, index, column}){
            let rowObj = this.insideData[index]
            if(rowObj.edittingKeyArr && rowObj.edittingKeyArr.indexOf(column.key) > -1) {//注意这里要判断大于-1
                //save
                console.log('save')
                let keyIndex = rowObj.edittingKeyArr.indexOf(column.key)
                rowObj.edittingKeyArr.splice(keyIndex,1)
                this.insideData.splice(index,1,rowObj)
                this.$emit('input',this.insideData)
            }else{
                //edit
                rowObj.edittingKeyArr = rowObj.edittingKeyArr?[...rowObj.edittingKeyArr,column.key] : [column.key]
                this.insideData.splice(index,1,rowObj)
            }
        },
        handleInput(row, index, column, newval) {
            this.insideData[index][column.key] = newval
            console.log(this.insideData)
        },
        initColumns(){
            this.insideData = clonedeep(this.value)
            let insideColumns = this.columns.map((item) => {
                if(item.isEditAble && !item.render) {
                    item.render = (h,{row, index, column}) => {//箭头函数绑定固定作用域
                        //console.log({row, index, column})
                        const isEditting = this.insideData[index].edittingKeyArr && this.insideData[index].edittingKeyArr.indexOf(column.key)>-1
                        return (
                            <div>
                                {isEditting?<i-input style="width:50px;" value={row[column.key]} on-input={this.handleInput.bind(this, row, index, column)}></i-input> : <span>{row[column.key]}</span>}
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
