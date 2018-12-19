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