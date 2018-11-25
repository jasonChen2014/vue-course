<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b>{{name}}</b>
  </div>
</template>
<script>
export default {
  name: 'about',
  props: {
    name: {
      type: String,
      value: 'apple'
    }
  },
  beforeRouteEnter(to,from,next) {
    //console.log('beforeRouteEnter')
    next(vm => {
      console.log(vm)
    });
  },
  beforeRouteUpdate(to,from,next) {
    //console.log('beforeRouteUpdate')
    next();
  },
  beforeRouteLeave(to,from,next) {
    //console.log('beforeRouteLeave');
    next();
  }
}
</script>

