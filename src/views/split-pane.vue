<template>
    <div class="split-pane-con">
        <split-pane :value.sync = 'offsetLeft' :triggerWidth = 'triggerWidth'>
            <div slot="left">今晚吃啥捏</div>
            <div slot="right">吃鸡可以吗</div>
        </split-pane>
    </div>
</template>

<script>
import splitPane from '_c/split-pane'
export default {
    name: 'splitPaneView',
    components: {
        splitPane
    },
    data(){
        return {
            offsetLeft: 20,
            triggerWidth: 8
        }
    },
    methods: {
        handleInput(param){
            this.offsetLeft = param
        }
    }
}
</script>

<style>
.split-pane-con{
    width: 400px;
    height: 200px;
}
</style>
