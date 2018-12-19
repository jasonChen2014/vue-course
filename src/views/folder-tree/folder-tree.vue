<template>
    <div class="tree-outer">
        <folder-tree 
            :fileList.sync='fileList' 
            :folderList.sync='folderList'
            :beforeDelete='beforeDelete'
        />
    </div>
</template>

<script>
import { getFileList,getFolderList } from '@/api/data'
import FolderTree from '_c/folder-tree'
export default {
    name: 'FolderTreePage',
    components: {
        FolderTree
    },
    data(){
        return {
            fileList: [],
            folderList: []
        }
    },
    methods: {
        beforeDelete(){
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve()
                },1000)
            })
        }
    },
    mounted(){
        Promise.all([getFileList(),getFolderList()]).then(res => {
            this.fileList = res[0].data.fileList
            this.folderList = res[1].data.folderList
        })
    }
}
</script>

<style lang="less">
.tree-outer{
    width: 300px;
}
</style>

