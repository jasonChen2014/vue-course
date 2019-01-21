<template>
    <div>
        <Upload :action="`${baseUrl}/upload_file`" :before-upload="beforeUpload" :on-success="handleSuccess">
            <i-button icon="ios-cloud-upload-outline">上传文件</i-button>
        </Upload>
        <Table :columns="column" :data="fileList"></Table>
        <Modal
            v-model="showModal"
            title="文本内容"
            >
            {{fileConetnt}}
        </Modal>
    </div>
</template>

<script>
import { baseUrl } from '@/config'
import { getFilesList,getFile } from '@/api/data'
import { downloadFile } from '@/lib/util'
export default {
    data() {
        return {
            baseUrl,
            file: {},
            fileList: [],
            column: [
                { title: '文件key', key: 'key' },
                { title: '文件保存路径', key: 'path' },
                { title: '文件名', key: 'file_name' },
                { title: '文件类型', key: 'file_type' },
                { title: '文件大小', key: 'file_size' },
                { 
                    title: '保存时间', 
                    key: 'storage_time',
                    render: (h,{row}) => {
                        return (
                            <span>{row.storage_time ? row.storage_time : '永久'}</span>
                        )
                    }
                },
                {
                    title: '操作',
                    key: 'handle',
                    render: (h, {row} ) => {
                        return (
                            <span>
                                <i-button on-click = {this.handleDownLoad.bind(this,row)}>下载</i-button>
                                <i-button disabled = {!row.file_type.includes('text')} on-click = {this.handleShowContent.bind(this,row.key)}>显示文本</i-button>
                            </span>
                        )
                    }
                }
            ],
            fileConetnt: '',
            showModal: false
        }
    },
    mounted(){
        console.log(process.env.NODE_ENV)
        this.getFiles_List()
    },
    methods: {
        beforeUpload(file) {
            this.file = file
        },
        handleSuccess() {
            this.getFiles_List()
        },
        getFiles_List() {
            getFilesList({ userId: 1 }).then(res => {
                this.fileList = res
            })
        },
        handleDownLoad(row) {
            downloadFile({url: `${baseUrl}/get_file`, params: { key: row.key, type: 'download' }})
        },
        handleShowContent(key) {
            getFile({ key,type: 'text' }).then(res => {
                this.fileConetnt = res
                this.showModal = true
            })
        }
    }
}
</script>

<style>

</style>
