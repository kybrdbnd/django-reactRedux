import { connect } from 'react-redux';
import { getVendorDetail, updateCompanyProfile, getCompanyProfile } from '../../actions/vendor';
import Profile from '../../components/company/profile';



const mapStateToProps = (state, ownProps) => {

    return {
        details: state.vendor,
        profile: state.companyListReducer
    }
}



const mapDispatchToProps = dispatch => ({

    getCompanyProfile: () => {
        dispatch(getCompanyProfile())
    },

    getVendorDetail: () => {
        dispatch(getVendorDetail());
    },

    updateCompanyProfile: (form_data) => {
        dispatch(updateCompanyProfile(form_data))
    }

})

const VendorProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)


export default VendorProfile