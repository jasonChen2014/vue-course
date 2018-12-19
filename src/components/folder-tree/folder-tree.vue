<template>
    <div class="tree-wrapper">
        <Tree :data='treeData' :render='renderFun'></Tree>
    </div>
</template>

<script>
import { putFileInFolder,transferFolderToTree } from '@/lib/util'
import clonedeep from 'clonedeep'
export default {
    name: 'FolderTree',
    props: {
        fileList: {
            type: Array,
            default: () => []
        },
        folderList: {
            type: Array,
            default: () => []
        },
        beforeDelete: Function
    },
    data() {
        return {
            treeData: [],
            edittingId: '',
            edittingContent: ''
        }
    },
    methods: {
        transferTreeData(){
            this.treeData = transferFolderToTree(putFileInFolder(this.fileList,this.folderList))
        },
        isFolder(item){
            return item.type === 'folder'
        },
        handleTreeItem(data,operation){
            if(operation === 'rename') {
                this.handleRename(data)
            }else{
                this.handleDelete(data)
            }
        },
        handleRename(data) {
            this.edittingId = `${data.type || 'file'}_${data.id}`
            this.edittingContent = data.title
        },
        updateList(data){
            const list = data.type === 'folder' ? this.folderList : this.fileList
            const updateList = clonedeep(list).filter(item => item.id !== data.id)
            this.$emit(`update:${data.type || "file"}List`,updateList)
        },
        handleDelete(data) {
            this.$Modal.confirm({
                title: `确定要删除${data.type === "folder" ? "文件夹" : "文件"}《${data.title}》吗？`,
                onOk: () => {
                    this.beforeDelete ? this.beforeDelete().then(res => {
                        this.updateList(data)
                    }) : this.updateList(data)
                },
                onCancel: () => {
                    //this.$Message.info('Clicked cancel');
                }
            })
        },
        handleCheck(data) {
            const list = data.type === 'folder' ? this.folderList : this.fileList
            const updateList = clonedeep(list).map(item => {
                if(item.id === data.id) {
                    item.name = this.edittingContent
                }
                return item
            })
            this.edittingId = ''
            this.$emit(`update:${data.type || "file"}List`,updateList)
        },
        handleCancel() {
            this.edittingId = ''
            this.edittingContent = ''
        },
        handleInput(newVal) {
            this.edittingContent = newVal
        },
        renderFun(h,{ root, node, data }){
            const isEditting = this.edittingId === `${data.type || 'file'}_${data.id}` 
            return (
                <div class="tree-item">
                    { this.isFolder(data) ?  <icon type="ios-folder" color="#2d8cf0" size="16"/> : ''}
                    { isEditting
                        ? <span>
                            <i-input value={data.title} class="tree-item-rename" on-input={this.handleInput}></i-input>
                            <icon type="md-checkmark" size="16" on-click={this.handleCheck.bind(this,data)}/>
                            <icon type="md-close" size="16" on-click={this.handleCancel}/>
                        </span> 
                        : <span>
                            {data.title}
                            <dropdown placement="right-start" on-on-click={this.handleTreeItem.bind(this,data)}>
                                <i-button type="text">
                                    <icon type="md-more" />
                                </i-button>
                                <dropdownMenu slot="list">
                                    <dropdownItem name="rename">重命名</dropdownItem>
                                    <dropdownItem name="delete">删除</dropdownItem>
                                </dropdownMenu>
                            </dropdown>
                        </span>
                    }
                </div>
            )
        }
    },
    watch: {
        fileList() {
            this.transferTreeData()
        },
        folderList() {
            this.transferTreeData()
        }
    },
    mounted(){
        this.transferTreeData()
    }
}
</script>

<style lang="less">
.tree-wrapper{
    width: 100%;
    .tree-item {
        display: inline-block;
        width: ~"calc(100% - 50px)";
        height: 30px;
        line-height: 30px;
        & > span {
            display: inline-block;
            width: ~"calc(100% - 20px)";
        }
        & > .ivu-icon{
            margin-right: 5px;
        }
        &  .ivu-dropdown {
            float: right;
            ul{
                margin: 0 0 0 3px;
                padding: 0;
            }
            li{
                margin: 4px 0;
            }
        }
        &-rename {
            width: ~"calc(100% - 80px)";
        }
    }
}
</style>

