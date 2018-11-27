import axios from './index'

export const getUserInfo = function ({userId}) {
    return axios.request({
        url: '/users/userinfo',
        method: 'post',
        data: {
            userId
        }
    })
}