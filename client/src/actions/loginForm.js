import axios from 'axios';
import { signin_url, signup_url } from '../api_urls';
import { push } from 'react-router-redux'

export function signinCreditential(username, password) {
    return (dispatch) => {
        axios({
                method: 'post',
                url: signin_url,
                data: {
                    username: username,
                    password: password
                }
            })
            .then(res => {
                dispatch(signinSuccess(res.data['token']))
                localStorage.setItem('token', res.data['token'])
                dispatch(push('/company'))
            })
            .catch(function(error) {
                console.log(error)
            });
    }
}

export function signupCredentials(formData) {
    return (dispatch) => {
        axios({
                method: 'post',
                url: signup_url,
                data: {
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    email: formData.email,
                    phone_number: formData.phone_number,
                    password: formData.signup_password
                }
            })
            .then(res => {
                localStorage.setItem('token', res.data['token'])
                dispatch(signupSuccess(res.data['token']))
                dispatch(push('/company'))
            })
            .catch(function(error) {
                console.log(error)
            })
    }
}


export function signinSuccess(token) {
    return { type: 'LOGIN_SUCCESSS', token }
}

export function signupSuccess(token) {
    return { type: 'SIGNUP_SUCCESS', token }
}