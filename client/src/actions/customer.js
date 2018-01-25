import axios from 'axios';
import { customer_detail, customer_landing, profile_update} from '../api_urls';
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



export function CustomerLandingStep(form_data) {
    return (dispatch) => {
        axios({
                method: 'POST',
                url: customer_landing,
                headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
                data: form_data
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


export function customerProfileUpdate(form_data){
    return(dispatch) => {
        axios({
            method: 'PUT',
            url: profile_update,
            headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
            data: form_data
        })
        .then(res=>{
            console.log(res.data.message)
        })
        .catch(error=>{
            console.log(error.response.data)
        })
    }
}


export function customerDetailSuccess(details) {
    return { type: 'CUSTOMER_DETAIL_SUCCESS', details }
}