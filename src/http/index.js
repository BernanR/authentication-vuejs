import Vue from "vue"
import VueResource from "vue-resource"
import services from "./services"

Vue.use(VueResource);

const http = Vue.http;

http.options.root = "https://guarded-headland-11685.herokuapp.com/";

/* Pega os endpoints do arquivo service e execulta automaticamente*/
Object.keys(services).map(service => {
    services[service] = Vue.resource('',{},services[service])
})

export { http };
export default services;