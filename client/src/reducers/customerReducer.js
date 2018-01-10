export function customer(state = [], action) {
    switch (action.type) {
        case 'CUSTOMER_DETAIL_SUCCESS':
            return action.details
        default:
            return state
    }
}
