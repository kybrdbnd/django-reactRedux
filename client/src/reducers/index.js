import {combineReducers} from 'redux'; 
import companyListReducer from './companyReducer';
import { vendor, packages } from './vendorReducer'
import { customer } from './customerReducer'

export const socialWeaver = combineReducers({
	companyListReducer,vendor,packages,customer
})  
