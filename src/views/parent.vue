<template>
    <div>
        <p>I am parent</p>
        <router-view/>
        <router-view name="email"/>
        <router-view name="tel"/>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
