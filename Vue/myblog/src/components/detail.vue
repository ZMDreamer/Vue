<template>
<div>{{msg}}<hr>
<br>
 <button @click="jumpto">点击跳转</button>
</div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: '详情'
    }
  },
  methods:{
    jumpto(){
    this.$router.push({name:'HelloWorld'});
    }
  }
}
</script>
<style scoped>
    div{
        color: red;
    }
</style>

