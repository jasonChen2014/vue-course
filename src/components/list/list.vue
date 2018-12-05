<template>
    <div>
        <ul @click.stop="handleClick">
            <li v-for="(item,index) in list" :key="`item_index_${index}`" @click.stop="handleClick">
                <span v-if="!render">{{item.name}}</span>
                <render-dom v-else :render-func='render' :number='item.number'></render-dom>
                <!-- <slot name="aa" :number='item.number'></slot> -->
            </li>
        </ul>
    </div>
</template>

<script>
import renderDom from '_c/render-dom'
export default {
    name: 'list',
    props: {
        list: {
            type: Array,
            default: () => {
                return []
            }
        },
        render: {
            type: Function,
            default: () =>{}
        }
    },
    components: {
        renderDom
    },
    methods: {
        handleClick(event){
            console.log('innerevent')
        }
    }
}
</script>

<style>

</style>
