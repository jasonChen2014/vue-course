<template>
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
        <div class="d-flex flex-column align-items-center login-box">
            <div class="title">登录</div>
            <input type="text" v-model="userName" placeholder="请输入用户名">
            <input type="password" v-model="password" placeholder="请输入密码">
            <button @click="handleClick">登录</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'login_page',
    data(){
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        handleClick(){
            this.login({userName:this.userName,password:this.password}).then(() => {
                this.$router.push({name: 'home'})
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>
