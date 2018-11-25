<template>
    <div>
        <input type="text" :value="value" @input="handleInput">
    </div>
</template>

<script>
export default {
    name: 'hx-input',
    props: {
        value: {
            type: String,
            value: 'hello vue'
        }
    },
    methods: {
        handleInput(e){
            console.log(e);
            this.$emit('input',e.target.value);
        }
    }
}
</script>

<style>

</style>
