<template>
    <div>
        <ul class="menu-box">
            <template v-for="(item,index) in list">
                <menu-item v-if="!item.children" :key="`menu_item_${index}`">
                    {{item.title}}
                </menu-item>
                <submenu v-else :subItem="item" :key='`menu_item_${index}`' :parentKey='`menu_item_${index}`'>
                </submenu>
            </template>
        </ul>
    </div>
</template>

<script>
import Submenu from '_c/menu/submenu.vue'
import MenuItem from '_c/menu/menu-item.vue'
// import menuIndex from '_c/menu'
// const { Menu,Submenu,MenuItem } = menuIndex
//不知为啥报错
export default {
    name: 'Menu',
    components: {
        Submenu,MenuItem
    },
    props: {
        list: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style lang="less">
    .menu-box {
        width: 300px;
        margin: 0;
        padding: 0;
        list-style: none;
        li{
            list-style: none;
        }
    }
</style>
