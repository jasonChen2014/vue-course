const state = {
    userName: 'hxchen'
}
const mutations = {

}
const actions = {

}
const getters = {
    userNameFirstLetter: state => {
        return state.userName.substr(0,1)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}