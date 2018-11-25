<template>
    <div>
        <button @click="handleClick">click me</button>
    </div>

</template>

<script>
export default {
    name: 'email',
    methods: {
        handleClick(){
            this.$bus.$emit('on-click','hello vue')
        }
    }
}
</script>

<style>

</style>
