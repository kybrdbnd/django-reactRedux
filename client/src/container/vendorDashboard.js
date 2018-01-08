import { connect } from 'react-redux';
import { getVendorDetail } from '../actions/vendor';
import Dashboard from '../components/company/dashboard';



const mapStateToProps = (state,ownProps) => {
	
	return {
		details: state.vendor
	}
}



const mapDispatchToProps = dispatch => ({

	getVendorDetail: () => {
		dispatch(getVendorDetail());
	},

})

const VendorDashboard = connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard)


export default VendorDashboard