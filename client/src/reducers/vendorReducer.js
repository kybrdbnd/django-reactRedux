export function vendor(state = [], action){
	switch(action.type){
		case 'VENDOR_DETAIL_SUCCESS':
			return action.details
		default:
			return state
	}
}

export function packages(state = [], action){
	switch(action.type){
		case 'PACKAGES_SUCCESS':
			return action.packages
		case 'PACKAGE_SAVE_SUCCESS':
			return state
		case 'PACKAGE_NEW_SUCCESS':
			return [action.data,...state]
		case 'PACKAGE_DELETE_SUCCESS':
			let packageId = action.data.id
			return state.filter(pckg => pckg.id!==packageId)
		default:
			return state
	}
}