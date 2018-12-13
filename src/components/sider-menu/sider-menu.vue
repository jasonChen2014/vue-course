<template>
    <div class="sider-menu-wrapper">
        <Menu :theme='theme' :mode = 'mode' width="200px" v-show="!collapsed">
            <template v-for="item in list">
                <menu-item :name='item.title' :key="item.title" v-if="!item.children">
                    <Icon :type="item.icon" size="24"/>{{item.title}}
                </menu-item>
                <re-sider-submenu :key="item.title" v-if="item.children" :parent='item'></re-sider-submenu>
            </template>
        </menu>
        <div class="drop-wrapper" v-show="collapsed">
            <template v-for="item in list">
                <Tooltip :content="item.title" :key="item.title" v-if="!item.children" placement="right">
                    <Icon :type="item.icon" size="32" color="#fff"/>
                </Tooltip>
                <re-sider-dropdwon :key="item.title" v-if="item.children" :parent="item" :showTitle="false"></re-sider-dropdwon>
            </template>
        </div>
    </div>
</template>

<script>
import ReSiderSubmenu from './re-sider-submenu.vue'
import ReSiderDropdwon from './re-sider-dropdown.vue'
export default {
    name: 'SiderMenu',
    props: {
        list: {
            type: Array,
            default: ()=>[]
        },
        theme: {
            type: String,
            default: 'dark'
        },
        mode: {
            type: String,
            default: 'vertical'
        },
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    components: {
        ReSiderSubmenu,
        ReSiderDropdwon
    }
}
</script>

<style lang="less">
.sider-menu-wrapper{
    .drop-wrapper{
        text-align: center;
        &>div{
            margin: 8px 0;
        }
    }
}
</style>

