import { connect } from 'react-redux';
import { CustomerLandingStep } from '../../actions/customer';
import LandingStep from '../../components/customer/landingStep'


const mapStateToProps = (state, ownProps) => {

    return {
    	state: ownProps
    }
}



const mapDispatchToProps = dispatch => ({

    landingStep: (form_data) => {
        dispatch(CustomerLandingStep(form_data))
    }
})

const CustomerLanding = connect(
	mapStateToProps,
     mapDispatchToProps
)(LandingStep)


export default CustomerLanding;