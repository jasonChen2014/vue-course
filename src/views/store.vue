<template>
    <div>
        <p>appName is: {{appName}}</p>
        <p>appNameWithVertion is: {{appNameWithVertion}}</p>
        <p>username is: {{userName}}</p>
        <p>userNameFirstLetter is: {{userNameFirstLetter}}</p>
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    name: 'store',
    computed: {
        ...mapState({
            appName: state => state.appName,
            userName: state => state.user.userName
        }),
        ...mapGetters(['appNameWithVertion']),
        ...mapGetters('user',['userNameFirstLetter']),
        //...mapState('user',['userName']),
        // ...mapGetters(['appNameWithVertion']),
        // ...mapGetters('user',['userNameFirstLetter']),
        // appName(){
        //     return this.$store.state.appName
        // },
        // appNameWithVertion(){
        //     return this.$store.getters.appNameWithVertion
        // },
        // userName(){
        //     return this.$store.state.user.userName
        // }
    }
}
</script>

<style>

</style>
