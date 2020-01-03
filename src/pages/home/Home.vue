<template>
  <div id="home">
    <div class="user-info">
      <h1>olá, {{user.name}} </h1>
      <p>Bem vindo ao Séries wished :)</p>
    </div>

    <div class="home-links">

      <router-link  
        class="home-link" 
        :key="i"
        v-for="(route,i) in routes"
        :to="{ name : route.name }" 
      >
        <i class="material-icons md-48">playlist_play</i>
        <span>{{route.meta.label}}</span>
      </router-link>
        

      <a href="#" class="home-link">
        <i class="material-icons md-48">playlist_add_check</i>
        <span>Já assistir</span>
      </a>
      <a href="#" class="home-link">
        <i class="material-icons md-48">dvr</i>
        <span>Todas as séries</span>
      </a>
    </div>

  </div>
</template>


<script>
  import { mapState } from 'vuex'
  export default {
    name : 'Home',
    computed : {
      ...mapState('auth',['user']),
      routes () {
        return this.$router.options.routes.filter(route => (
            route.meta && route.meta.showNavbar
        ))
      }
    }
  }

</script>

<style lang="scss" scoped>

@mixin flex-center($columns: false){
  display: flex;
  align-items: center;
  justify-content: center;

  @if $columns {
    flex-direction: column;
  }
}
#home {
  width: 100%;
  height: 100vh;

  @include flex-center(true);
  justify-content: space-around;

  .user-info{
    text-align: center;
  }

  .home-links{
    width: 100%;
    @include flex-center();

    .home-link{
      flex: 0 0 25%;
      margin:0 15px;
      padding: 50px 0;
      transition: .4s;
      border : 1px solid;
      color : var(--white);
      @include flex-center(true);
      
      &:hover{
        transform: scale(1.1);
        text-decoration: none;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5)
      }
    }
    
    .home-link:first-child{background-color: var(--blue);}
    .home-link:nth-child(2){background-color: var(--orange);}
    .home-link:last-child{background-color: var(--red);}

  }
}
</style>