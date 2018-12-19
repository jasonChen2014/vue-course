<template>
    <div class="table-wrapper">
        <!-- <edit-table :columns = 'columns' v-model="tableData"></edit-table> -->
        <edit-table-mul :columns = 'columns' v-model="tableData"></edit-table-mul>
    </div>
</template>

<script>
//import EditTable from '_c/edit-table'
import EditTableMul from '_c/edit-table-mul'
import { getTableData } from '@/api/data'
export default {
    name: 'TablePage',
    components:{
        EditTableMul
    },
    data() {
        return {
            columns: [
                {
                    title: '姓名',
                    key: 'name',
                    isEditAble: false
                },
                {
                    title: '年龄',
                    key: 'age',
                    isEditAble: true
                },
                {
                    title: '邮箱',
                    key: 'email',
                    isEditAble: true
                }
            ],
            tableData: []
        }
    },
    mounted(){
        getTableData().then((res)=>{
            console.log(res)
            this.tableData = res.data.tableData
        })
    }
}
</script>

<style lang="less">
.table-wrapper {
    margin-top: 20px;
}
</style>

