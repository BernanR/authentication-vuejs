import Vue from "vue"
import VueResource from "vue-resource"
import services from "./services"
import interceptors from './interceptors'

Vue.use(VueResource);

const http = Vue.http;

http.options.root = "https://guarded-headland-11685.herokuapp.com/";
http.interceptors.push(interceptors);
//http.interceptors.push(interceptors);

/* Pega os endpoints do arquivo service e execulta automaticamente*/
Object.keys(services).map(service => {
    services[service] = Vue.resource('',{},services[service])
})

const setBearerToken = token => {
	http.headers.common['Authorization'] = `Bearer ${token}`
}

export { http , setBearerToken };
export default services;