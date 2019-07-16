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

const downloadFile = ({url,params}) => {
    const form = document.createElement('form')
    form.setAttribute('action',url)
    form.setAttribute('method','post')
    for(let key in params) {
        const input = document.createElement('input')
        input.setAttribute('type','hidden')
        input.setAttribute('name',key)
        input.setAttribute('value',params[key])
        form.appendChild(input)
    }
    document.body.appendChild(form)
    form.submit()
    form.remove()
}

// 由一个组件，向上找到最近的指定组件
function findComponentUpward (context, componentName) {
    let parent = context.$parent;
    let name = parent.$options.name;
  
    while (parent && (!name || [componentName].indexOf(name) < 0)) {
      parent = parent.$parent;
      if (parent) name = parent.$options.name;
    }
    return parent;
}

// 由一个组件，向上找到所有的指定组件
function findComponentsUpward (context, componentName) {
    let parents = [];
    const parent = context.$parent;
  
    if (parent) {
      if (parent.$options.name === componentName) parents.push(parent);
      return parents.concat(findComponentsUpward(parent, componentName));
    } else {
      return [];
    }
}

// 由一个组件，向下找到最近的指定组件
function findComponentDownward (context, componentName) {
    const childrens = context.$children;
    let children = null;
  
    if (childrens.length) {
      for (const child of childrens) {
        const name = child.$options.name;
  
        if (name === componentName) {
          children = child;
          break;
        } else {
          children = findComponentDownward(child, componentName);
          if (children) break;
        }
      }
    }
    return children;
}

// 由一个组件，向下找到所有指定的组件
function findComponentsDownward (context, componentName) {
    return context.$children.reduce((components, child) => {
      if (child.$options.name === componentName) components.push(child);
      const foundChilds = findComponentsDownward(child, componentName);
      return components.concat(foundChilds);
    }, []);
}

// 由一个组件，找到指定组件的兄弟组件
function findBrothersComponents (context, componentName, exceptMe = true) {
    let res = context.$parent.$children.filter(item => {
      return item.$options.name === componentName;
    });
    let index = res.findIndex(item => item._uid === context._uid);
    if (exceptMe) res.splice(index, 1);
    return res;
}

export {
    setTitle,
    setToken,
    getToken,
    putFileInFolder,
    transferFolderToTree,
    downloadFile,
    findComponentUpward,
    findComponentsUpward,
    findComponentDownward,
    findComponentsDownward,
    findBrothersComponents
}