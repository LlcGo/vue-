
<template>
  <div>
    User
  </div>
</template>

<script >

export default {
  name:'UserTest',
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
