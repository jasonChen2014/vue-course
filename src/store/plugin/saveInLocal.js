export default store => {
    if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
    store.subscribe((mutation,state)=>{
        //console.log('savestate')
        localStorage.state = JSON.stringify(state)
    })
}