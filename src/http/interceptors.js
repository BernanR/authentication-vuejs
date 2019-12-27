import store from "../store";

export default req => {
    return ({ status }) => {
        console.log(req);
        if(status === 401){
            store.dispatch('auth/ActionSignOut')
            window._Vue.$router.push({ name : 'login'}) // variável window recebe uma instancia do vuew
        }
    }
}