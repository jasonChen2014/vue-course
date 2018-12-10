<template>
    <div>
        <Menu :list='list'></Menu>
    </div>
</template>

<script>
import menuIndex from '_c/menu'
const { Menu } = menuIndex
export default {
    name: 'menu_page',
    components: {
        Menu
    },
    data(){
        return {
            list: [
                {
                    title: 'menu1'
                },
                {
                    title: 'menu2',
                    children: [
                        {
                            title: 'menu2_1'
                        },
                        {
                            title: 'menu2_2'
                        }
                    ]
                },
                {
                    title: 'menu3',
                    children: [
                        {
                            title: 'menu3_1'
                        },
                        {
                            title: 'menu3_2',
                            children: [
                                {
                                    title: 'menu3_2_1'
                                },
                                {
                                    title: 'menu3_2_2'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style>

</style>
