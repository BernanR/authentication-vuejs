import services from '@/http'
import * as types from './mutation-types';

export const ActionFindSerie = ({ commit }, payload) => (
	
	services.showSerie.findSerie({ id: payload }).then(res =>{
		console.log(payload);
		commit(types.SET_SERIE, res.data.data);
	})
)