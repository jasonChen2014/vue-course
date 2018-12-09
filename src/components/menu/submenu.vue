<template>
  <li>
    <div>{{subItem.title}}</div>
    <ul>
      <template v-for="(item,index) in subItem.children">
        <menu-item v-if="!item.children" :key="`${parentKey}_${index}`">{{item.title}}</menu-item>
        <submenu
          v-else
          :subItem="item"
          :key="`${parentKey}_${index}`"
          :parentKey="`${parentKey}_${index}`"
        ></submenu>
      </template>
    </ul>
  </li>
</template>

<script>
import Submenu from '_c/menu/submenu.vue'
import MenuItem from '_c/menu/menu-item.vue'
export default {
  name: "Submenu",
  props: {
    subItem: {
      type: Object,
      default: () => ({})
    },
    parentKey: String
  },
  components: {
    Submenu,
    MenuItem
  }
};
</script>

<style>
</style>
