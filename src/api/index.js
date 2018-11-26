export const getAppName = function(){
    return new Promise((resolve,reject) => {
        const err = null
        setTimeout(()=>{
            if(!err) {
                resolve({code:200,info:{appName:'appNameFromApi'}})
            }else{
                reject(err)
            }
        })
    })
}