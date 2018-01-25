import { connect } from 'react-redux';
import Profile from '../../components/customer/profile';
import { getCustomerDetail, customerProfileUpdate } from '../../actions/customer';


const mapStateToProps = (state, ownProps) => {

    return {
        details: state.customer
    }
}

const mapDispatchToProps = dispatch => ({

    getCustomerDetail: () => {
        dispatch(getCustomerDetail());
    },

    updateCustomerProfile: (form_data) => {
    	dispatch(customerProfileUpdate(form_data))
    }

})



const CustomerProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)

export default CustomerProfile