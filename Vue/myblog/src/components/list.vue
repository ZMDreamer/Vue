<template>
<div>{{msg}}
    <router-view></router-view>
</div>
</template>
<script>
export default {
  name: 'list',
  data () {
    return {
      msg: '我是列表'
    }
  }
}
</script>
<style scoped>
    div{
        color: red;
    }
</style>

