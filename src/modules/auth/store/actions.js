import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'

export const ActionDoLogin = ({ dispatch }, payload) => {
    return services.auth.login(payload).then(res =>{
        dispatch('ActionSetUser',res.data.user )
        dispatch('ActionSetToken',res.data.token )
    })
}

export const ActionCheckToken = ({dispatch,state}) =>{
	console.log("action check")
	if(state.token){
		return Promise.resolve(state.token)
	}

	const token = storage.getLocalToken()

	if (!token) return Promise.reject(new Error('Token Inválido'))

	dispatch('ActionSetToken', token)

	return dispatch('ActionLoadSession')

}

export const ActionLoadSession = ({ dispatch }) => {
	console.log("ActionLoadSession")
	return new Promise(async (resolve, reject) => {
		try {
			const { data : {user} } = await services.auth.loadSession()

			dispatch('ActionSetUser', user)
			//o token já esta sendo setado na ActionCheckToken
			resolve()
		} catch (err) {
			dispatch('ActionSignOut')
			reject(err)
		}
	});
}

export const ActionSetUser = ({ commit }, payload) => {
    commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
	storage.setLocalToken(payload)
	storage.setHeaderToken(payload)
    commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
	storage.setLocalToken('')
	storage.setHeaderToken()    
    dispatch('ActionSetUser', {})
	dispatch('ActionSetToken', '')
}