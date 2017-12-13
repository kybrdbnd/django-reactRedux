import {combineReducers} from 'redux'; 
import companyListReducer from './companyReducer';
import { vendor, packages } from './vendorReducer'

export const socialWeaver = combineReducers({
	companyListReducer,vendor,packages
})  
