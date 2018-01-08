import { connect } from 'react-redux';
import { saveVendorCompany } from '../actions/vendor';
import LandingStep from '../components/company/landingStep'



const mapStateToProps = (state, ownProps) => {

    return {
        name: "prnav"
    }
}



const mapDispatchToProps = dispatch => ({
    saveCompany: (company_name) => {
        dispatch(saveVendorCompany(company_name))
    }
})

const VendorLanding = connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingStep)


export default VendorLanding