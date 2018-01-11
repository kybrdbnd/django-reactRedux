import axios from 'axios';
import { customer_detail, update_customer_username } from '../api_urls';
import { push } from 'react-router-redux'


export function getCustomerDetail() {
    return (dispatch) => {
        axios({
                method: 'get',
                url: customer_detail,
                headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
            })
            .then(res => {
                if (res.data[0].profile === null) {
                    dispatch(push('/customer-landing-steps'))
                } else {
                    return (dispatch(customerDetailSuccess(res.data[0])))
                }
            })
            .catch(error => {
                console.log(error)
                dispatch(push('/customer_login'))

            });
    }
}



export function updateCustomerUsername(username) {
    return (dispatch) => {
        axios({
                method: 'POST',
                url: update_customer_username,
                headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
                data: {
                    username: username
                },
            })
            .then(res => {
                localStorage.clear();
                localStorage.setItem('token', res.data['token'])
                dispatch(push('/profile'))
            })
            .catch(error => {
                console.log(error.response.data)
            });
    }
}



export function customerDetailSuccess(details) {
    return { type: 'CUSTOMER_DETAIL_SUCCESS', details }
}