import axios from './index'

export const getTableData = function () {
    return axios.request({
        url: '/getTableData',
        method: 'get',
    })
}

export const getFileList = function () {
    return axios.request({
        url: '/getFileList',
        method: 'get',
    })
}

export const getFolderList = function () {
    return axios.request({
        url: '/getFolderList',
        method: 'get',
    })
}

export const getFilesList = function ({userId}) {
    return axios.request({
        url: '/get_file_list',
        method: 'get',
        params: {
            userId
        }
    })
}

export const getFile = function ({ key,type }) {
    return axios.request({
        url: '/get_file',
        method: 'post',
        data: {
            key,
            type
        }
    })
}

export const sendFormData = function ( {name,password} ) {
    return axios.request({
        url: '/sentFormData',
        method: 'post',
        data: {
            name,
            password
        }
    })
}