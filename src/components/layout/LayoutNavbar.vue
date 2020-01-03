<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link 
            class="navbar-brand"
            href="#"
            :to="{ name: 'home'}"
        >
            Series Wished
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link
                    exact
                    :key="i"
                    tag="li"
                    class="nav-item"
                    exact-active-class="active"
                    :to="{ name: route.name }"
                    v-for="(route, i) in routes" 
                >
                    <a class="nav-link" href="#">{{route.meta.title }} <span class="sr-only">(current)</span></a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    computed : {
        routes () {
            return this.$router.options.routes.filter(route => (
                route.meta && route.meta.showNavbar
            ))
        }
    }
}
</script>