<template>
  <Dropdown placement="right-start">
    <dropdown-item>
      <Icon :type="parent.icon" :color="iconColor" :size="size"/>
      {{showTitle?parent.title:""}}
    </dropdown-item>
    <dropdown-menu slot="list">
      <template v-for="item in parent.children">
        <dropdown-item :key="item.title" v-if="!item.children">
          <Icon :type="item.icon" color="#ddd"/>
          {{item.title}}
        </dropdown-item>
        <re-sider-dropdwon :key="item.title" v-if="item.children" :parent="item"></re-sider-dropdwon>
      </template>
    </dropdown-menu>
  </Dropdown>
</template>

<script>
export default {
  name: "ReSiderDropdwon",
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    showTitle: {
        type: Boolean,
        default: true
    }
  },
  computed: {
      iconColor(){
          return this.showTitle?'#707070':'#fff'
      },
      size(){
          return this.showTitle?24:32
      }
  }
};
</script>

<style>
</style>
