import Cookies from 'js-cookie'
const setTitle = (title = 'vue-course') => {
    document.title = title;
}
const setToken = (token,tokenName='token')=>{
    Cookies.set(tokenName,token)
}
const getToken = (tokenName='token') => {
    return Cookies.get(tokenName)
}
export {
    setTitle,
    setToken,
    getToken
}