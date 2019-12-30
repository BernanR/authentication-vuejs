<template>
    <h1>Wachlist</h1>
</template>

<script>

    import { mapActions } from 'vuex'

    export default {
        mounted (){
            this.ActionSetWatchlist()
        },
        methods:{
            ...mapActions('watchlist', ['ActionSetWatchlist'] )
        }
    }
</script>