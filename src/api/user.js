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

export const login = function ({userName,password}) {
    return axios.request({
        url: '/users/login',
        method: 'post',
        data: {
            userName,password
        }
    })
}

export const authorization = function (token) {
    return axios.request({
        url: '/users/authorization',
        method: 'get'
    })
}