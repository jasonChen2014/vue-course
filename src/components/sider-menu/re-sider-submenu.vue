<template>
    <Submenu :name="parent.title">
        <template slot="title">
            <Icon :type="parent.icon" :size="size"/>
            {{parent.title}}
        </template>
        <template v-for="item in parent.children">
            <menu-item :key="item.title" :name="item.title" v-if="!item.children">
                <Icon :type="item.icon" :size="size"/>
                {{item.title}}
            </menu-item>
            <re-sider-submenu :key="item.title" v-if="item.children" :parent='item'></re-sider-submenu>
        </template>
    </Submenu>
</template>

<script>
export default {
    name: 'ReSiderSubmenu',
    props: {
        parent: {
            type: Object,
            default: () => ({})
        },
        size: {
            type: Number,
            default: 20
        }
    }
}
</script>

<style>

</style>
