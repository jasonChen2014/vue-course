import {getAppName} from '@/api/app'
const actions = {
    async updateAppNameAction({commit}){
        try {
            const {info:{appName}} = await getAppName()
            commit('UPDATE_APP_NAME',appName)
        } catch (error) {
            console.log(error)
        } 
    }
}

export default actions