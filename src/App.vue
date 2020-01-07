<template>
  <div id="app">
    <layout-navbar v-if="showNavbar" />
    <router-view class="view one" />
  </div>
</template>

<script>
  import LayoutNavbar from './components/layout/LayoutNavbar'

  export default {
    components : {
      LayoutNavbar
    },
    computed: {
      showNavbar( ){
        return this.$route.name != 'home' && this.$route.name != 'login'
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
