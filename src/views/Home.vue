<template>
  <div class="home">
    <button @click="handleClick('back')">back</button>
    <button @click="handleClick('push')">push</button>
    <button @click="handleClick('replace')">replace</button>
    <div>{{food}}</div>
    <div>
      <hx-input v-model="inputVal" />
      <b>{{inputVal}}</b>
    </div>
    <div>
      <button @click="getInfo">getUserInfo</button>
    </div>
  </div>
</template>

<script>
import hxInput from "_c/hx-input.vue";
import {getUserInfo} from "@/api/user";
export default {
  name: "home",
  components: {
    hxInput
  },
  props: {
    food: {
      type: String,
      value: "orange"
    }
  },
  data() {
    return {
      inputVal: ""
    };
  },
  methods: {
    getInfo() {
      getUserInfo({userId: 520}).then(res => {
        console.log(res)
      })
    },
    handleClick(type) {
      if (type === "back") this.$router.go(-1);
      else if (type === "push") {
        this.$router.push({
          name: "about"
        });
      } else if (type === "replace") {
        this.$router.replace({
          name: "namedroute"
        });
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    //console.log('beforeRouteEnter')
    next(vm => {
      console.log(vm);
    });
  },
  beforeRouteUpdate(to, from, next) {
    //console.log('beforeRouteUpdate')
    next();
  },
  beforeRouteLeave(to, from, next) {
    //console.log('beforeRouteLeave');
    next();
  }
};
</script>
