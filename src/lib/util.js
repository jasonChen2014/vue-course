import Cookies from 'js-cookie'
import clonedeep from 'clonedeep'

const setTitle = (title = 'vue-course') => {
    document.title = title;
}
const setToken = (token,tokenName='token')=>{
    Cookies.set(tokenName,token)
}
const getToken = (tokenName='token') => {
    return Cookies.get(tokenName)
}

const putFileInFolder = (fileList,folderList) => {
    const fileListCopy = clonedeep(fileList)
    const folderListCopy = clonedeep(folderList)
    //console.log(folderListCopy)
    return folderListCopy.map(folderItem => {
        let id = folderItem.id
        let index = fileListCopy.length
        while(--index >= 0) {
            if(fileListCopy[index].folder_id === id) {
                let file = fileListCopy.splice(index,1)[0]//注意splice返回的是一个数组
                file.title = file.name
                if(folderItem.children) folderItem.children.push(file)
                else folderItem.children = [file]
            }
        }
        folderItem.type = 'folder'
        folderItem.title = folderItem.name
        return folderItem
    })
}

const transferFolderToTree = (folderList) => {
    if (!folderList.length) return []
    const folderListCopy = clonedeep(folderList)
    let handle = (id) => {
        let arr = []
        folderListCopy.forEach(folderItem => {
            if(folderItem.folder_id === id){
                const children = handle(folderItem.id)
                if(folderItem.children) {
                    folderItem.children = [].concat(folderItem.children, children)
                }else{
                    folderItem.children = children
                }
                arr.push(folderItem)
            }
        });
        return arr
    }
    return handle(0)
}

export {
    setTitle,
    setToken,
    getToken,
    putFileInFolder,
    transferFolderToTree
}