<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{ name:'about' }">About</router-link>
    </div>
    <transition-group name="page-transition">
      <router-view key="default"/>
      <router-view key="email" name="email"/>
      <router-view key="tel" name="tel"/>
    </transition-group>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.page-transition-enter{
  opacity: 0;
}
.page-transition-enter-active{
  transition: opacity 1s ease;
}
.page-transition-enter-to{
  opacity: 1;
}
.page-transition-leave{
  opacity: 1;
}
.page-transition-leave-active{
  transition: opacity 1s ease;
}
.page-transition-leave-to{
  opacity: 0;
}
</style>
