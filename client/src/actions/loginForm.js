import axios from 'axios';
import { login_url } from '../api_urls';
import { push } from 'react-router-redux'

export function loginCreditential(username, password){
	return(dispatch)=>{
		axios({
			  method: 'post',
			  url: login_url,
			  data: {
			    username: username,
			    password: password 
			  }
			})
			.then(res => {
				dispatch(loginSuccess(res.data['token']))
				localStorage.setItem('token',res.data['token'])
				dispatch(push('/company'))
            })
			.catch(function(error){
				console.log(error)
			});
	}
}

export function loginSuccess(token) {
	return{type:'LOGIN_SUCCESSS',token}
}