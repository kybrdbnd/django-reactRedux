import { connect } from 'react-redux';
import { updateCustomerUsername } from '../../actions/customer';
import LandingStep from '../../components/customer/landingStep'


const mapStateToProps = (state, ownProps) => {

    return {
    	user: ownProps
    }
}



const mapDispatchToProps = dispatch => ({

    updateUsername: (username) => {
        dispatch(updateCustomerUsername(username))
    }
})

const CustomerLanding = connect(
	mapStateToProps,
     mapDispatchToProps
)(LandingStep)


export default CustomerLanding;