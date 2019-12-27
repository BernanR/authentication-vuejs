import store from '../store';

export default async (to, from, next) => {
    console.log(to);
    document.title = to.name + ' Series Wished';

    if(to.name != 'login' && !store.getters['auth/hasToken']){
        try{
            console.log("aqui");

            await store.dispatch('auth/ActionCheckToken')
            next({ name : to.name })
        } catch(err){
            next({ name: 'login'})
        }
    }else{
        if(to.name == 'login' && store.getters['auth/hasToken']){
            next({name : 'home' })
        }else{
            next()
        }

    }

    next()
}