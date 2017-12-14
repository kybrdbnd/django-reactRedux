import axios from 'axios';
import { vendor_company, company_packages, package_edit, package_create } from '../api_urls';
import { push } from 'react-router-redux'


export function getVendorDetail() {
    return (dispatch) => {
        axios({
                method: 'get',
                url: vendor_company,
                headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
            })
            .then(res => {
                if (res.data.length !== 0) {
                    return (dispatch(vendorDetailSuccess(res.data[0])))
                }else{
                    dispatch(push('/company-landing-steps'))
                }
            })
            .catch(error => {
                console.log(error)
                dispatch(push('/login'))

            });
    }
}


export function getPackages() {
    return (dispatch) => {
        axios({
                method: 'get',
                url: company_packages,
                headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
            })
            .then(res => {
                return (dispatch(packageSuccess(res.data)))
            })
            .catch(error => {
                console.log(error)
                dispatch(push('/login'))

            });
    }
}

export function updatePackage(package_form_data) {
    return (dispatch) => {
        axios({
                method: 'POST',
                url: package_edit + package_form_data.id + '/',
                headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
                data: {
                    name: package_form_data.name,
                    description: package_form_data.description,
                    price: package_form_data.price ? package_form_data.price : 0,
                    trial_price: package_form_data.trial_price ? package_form_data.price : 0,
                    image: package_form_data.image
                }
            })
            .then(res => {
                return (dispatch(savePackageSuccess(res.data)))
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export function createPackage(package_form_data) {
    return (dispatch) => {
        axios({
                method: 'POST',
                url: package_create,
                headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
                data: {
                    name: package_form_data.name,
                    description: package_form_data.description,
                    price: package_form_data.price ? package_form_data.price : 0
                }
            })
            .then(res => {
                console.log(res)
                return (dispatch(newPackageSuccess(res.data)))
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export function deletePackage(package_form_data) {
    return (dispatch) => {
        axios({
                method: 'DELETE',
                url: package_edit + package_form_data.id + '/',
                headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
                data: {
                    name: package_form_data.name,
                    description: package_form_data.description,
                    price: package_form_data.price ? package_form_data.price : 0
                }
            })
            .then(res => {
                return (dispatch(deletePackageSuccess(package_form_data)))
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export function deletePackageSuccess(data) {
    return { type: 'PACKAGE_DELETE_SUCCESS', data }
}

export function newPackageSuccess(data) {
    return { type: 'PACKAGE_NEW_SUCCESS', data }

}
export function savePackageSuccess(data) {
    return { type: 'PACKAGE_SAVE_SUCCESS', data }
}
export function packageSuccess(packages) {
    return { type: 'PACKAGES_SUCCESS', packages }
}

export function vendorDetailSuccess(details) {
    return { type: 'VENDOR_DETAIL_SUCCESS', details }
}