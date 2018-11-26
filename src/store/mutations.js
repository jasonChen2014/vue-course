import vue from 'vue'
const mutation = {
    UPDATE_APP_NAME(state,params) {
        state.appName = params
    },
    //动态添加state
    SET_AGE(state,params) {
        vue.set(state,'age',params)
    }
}
export default mutation