import axios from './index'

export const getTableData = function () {
    return axios.request({
        url: '/getTableData',
        method: 'get',
    })
}