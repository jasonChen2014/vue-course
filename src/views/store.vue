<template>
    <div>
        <p><input v-model="statevalue"/></p>
        <p>statevalue is: {{statevalue}}</p>
        <p>appName is: {{appName}}</p>
        <p>appNameWithVertion is: {{appNameWithVertion}}</p>
        <p>username is: {{userName}}</p>
        <p>userNameFirstLetter is: {{userNameFirstLetter}}</p>
        <div>
            <p>
                <button @click="updateAppName">修改appName</button>
            </p>
            <p>
                <button @click="modifyUserName">修改userName</button>
            </p>
            <p>
                <button @click="setAge">设置年龄</button>
                {{age}}
            </p>
            <p><button @click="registerModule">动态创建模块</button></p>
            <p>
                list is:
            </p>
            <p>
                <ul>
                    <li v-for="(item,index) in list" :key="index">
                        {{item}}
                    </li>
                </ul>
            </p>
        </div>
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
    name: 'store',
    computed: {
        ...mapState({
            appName: state => state.appName,
            userName: state => state.user.userName,
            age: state => state.age,
            list: state => state.todo?state.todo.list : [],
            //statevalue: state => state.statevalue
        }),
        statevalue: {
            get(){
                return this.$store.state.statevalue
            },
            set(value){
                //console.log('set statevalue is:' +value)
                this.SET_STATEVALUE(value)
            }
        },
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
    },
    methods: {
        ...mapMutations(['UPDATE_APP_NAME','MODIFY_USER_NAME','SET_AGE','SET_STATEVALUE']),
        ...mapMutations('user',['MODIFY_USER_NAME']),
        ...mapActions(['updateAppNameAction']),
        updateAppName(){
            //this.$store.commit('UPDATE_APP_NAME','newApp')
            //this.UPDATE_APP_NAME('newApp')
            //this.$store.dispatch('updateAppNameAction')
            this.updateAppNameAction()
        },
        modifyUserName(){
            this.MODIFY_USER_NAME('chenhaoxin')
        },
        setAge(){
            this.SET_AGE('18')
        },
        registerModule() {
            //动态注册模块
            this.$store.registerModule('todo',{
                state: {
                    list:[
                        'list item 1',
                        'list item 2'
                    ]
                }
            })
        }
    }
}
</script>

<style>

</style>
