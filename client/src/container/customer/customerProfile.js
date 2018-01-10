import { connect } from 'react-redux';
import Profile from '../../components/customer/profile';
import { getCustomerDetail } from '../../actions/customer';


const mapStateToProps = (state, ownProps) => {

    return {
        details: state.customer
    }
}

const mapDispatchToProps = dispatch => ({

    getCustomerDetail: () => {
        dispatch(getCustomerDetail());
    },

})



const CustomerProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)

export default CustomerProfile