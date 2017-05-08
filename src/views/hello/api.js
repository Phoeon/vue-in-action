import axios from 'axios';

const API = {
	CREATE : "",
	REMOVE : "",
	UPDATE : "",
	QUERY  : ""
}

export default {
	query(params){
		return axios.get(API.QUERY,params);
	},
	update(params){
		return axios.post(API.UPDATE,params);
	}
}