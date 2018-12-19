<template>
    <div class="tree-wrapper">
        <Tree :data='treeData'></Tree>
    </div>
</template>

<script>
import { getFileList,getFolderList } from '@/api/data'
import { putFileInFolder,transferFolderToTree } from '@/lib/util'
export default {
    name: 'FolderTreePage',
    data(){
        return {
            treeData: []
        }
    },
    mounted(){
        Promise.all([getFileList(),getFolderList()]).then(res => {
            this.treeData = transferFolderToTree(putFileInFolder(res[0].data.fileList,res[1].data.folderList))
        })
    }
}
</script>

<style>

</style>
