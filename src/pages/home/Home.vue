<template>
  <div class="hello">
    <h1>olá, {{user.name}} </h1>
    <p>Bem vindo ao Séries wished</p>
  </div>
</template>


<script>
  import { mapState } from 'vuex'

  export default {
    name : 'Home',
    computed : {
      ...mapState('auth',['user'])
    }
  }

</script>

<style lang="scss" scoped>

</style>