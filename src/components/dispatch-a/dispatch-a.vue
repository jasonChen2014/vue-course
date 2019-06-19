<template>
    <div class="main">
        <div>测试自定义dispatch</div>
        <div>
            <div @click="handleClick"></div>
        </div>
    </div>
</template>

<script>
import Emitter from '@/mixins/emitter.js'
export default {
    name: 'DispatchA',
    mixins: [Emitter],
    methods: {
        handleClick() {
            this.dispatch('DispatchB','on-message','hello my parent')
        }
    }
}
</script>

<style>

</style>
