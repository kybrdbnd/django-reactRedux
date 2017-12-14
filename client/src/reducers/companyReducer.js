
export default function companyListReducer(state = [], action){
	switch (action.type){
		case 'LOAD_COMPANIESLIST_SUCCESS':
			return action.companies
		case 'LOGIN_SUCCESSS':
			return action.token
		case 'SIGNUP_SUCCESSS':
			return action.token
		default:
			return state;
	}
}
