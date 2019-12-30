import services from '@/http'
import * as types from './mutation-types';

export const ActionSetWatchlist = ({ commit }) => (
	services.watchilist.findWitchlist().then(res =>{
		commit(types.SET_WATCHLIST, res.data.data);
	})
)