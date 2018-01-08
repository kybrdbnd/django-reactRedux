import { connect } from 'react-redux';
import { saveVendorCompany, getCategories } from '../actions/vendor';
import LandingStep from '../components/company/landingStep'



const mapStateToProps = (state, ownProps) => {

    return {
        categories: state.vendor
    }
}



const mapDispatchToProps = dispatch => ({

	getCategories: () => {
		dispatch(dispatch(getCategories))
	},

    saveCompany: (company_details) => {
        dispatch(saveVendorCompany(company_details))
    }
})

const VendorLanding = connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingStep)


export default VendorLanding