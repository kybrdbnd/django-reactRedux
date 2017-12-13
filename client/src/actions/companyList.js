import axios from 'axios';
import { fetch_companies } from '../api_urls'

export function updateCompanyFromServer(){
	return (dispatch) => {
	axios.get(fetch_companies)
        .then(res => {
        	return dispatch(loadCompanyListSuccess(res.data))
        })
        .catch(err=>{
        	console.log(err)
        })
	}
}




export function loadCompanyListSuccess(companies) {  
  return {type: 'LOAD_COMPANIESLIST_SUCCESS', companies};
}