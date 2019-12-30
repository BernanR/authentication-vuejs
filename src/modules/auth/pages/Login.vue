<template>
  <form @submit.prevent="submit()">
    <div class="login-page">    
      <div class="card">
        <div class="card-header">
          Login
        </div>
        <div class="card-body">
          <div class="form-group">
            <input 
              type="email"
              class="form-control"
              required
              placeholder="E-mail"
              v-model="form.email"
            >
          </div>
          <div class="form-group">
            <input 
              type="password"
              class="form-control"
              required
              v-model="form.password"
              placeholder="Senha"
            >
          </div>

          <button class="btn btn-primary w-100">Entrar</button>
        </div>
      </div>
    </div>
  </form>    
</template>

<script>

  import { mapActions } from 'vuex'

  export default {
    data : () => ({
      form:{
        email: '',
        password : ''
      }
    }),
  
    methods: {
      ...mapActions('auth',['ActionDoLogin']),
      async submit () {
        try {
          await this.ActionDoLogin(this.form)
          this.$router.push({ name: 'home'})
        } catch (err) {
          alert(err.data ? err.data.message : 'Não foi possível fazer o login' )
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-page{
    height: 50vh;
    display: flex;
    align-content: center;
    justify-content: center;
    .card{
      width: 30%;
    }
  }
</style>