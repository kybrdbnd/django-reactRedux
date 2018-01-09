import { connect } from 'react-redux';
import { getPackages, deletePackage, createPackage,updatePackage } from '../../actions/vendor';
import Package from '../../components/company/package';

const mapStateToProps = (state,ownProps) => {

	return {
		packages: state.packages
	}
}

const mapDispatchToProps = dispatch => ({

	getPackages: () => {
		dispatch(getPackages());
	},

	deletePackage: (package_data) => {
		dispatch(deletePackage(package_data))
	},
	
	createPackage: (form_data) => {
		dispatch(createPackage(form_data));
	},

	updatePackage: (form_data) => {
		dispatch(updatePackage(form_data));
	},

})

const VendorPackage = connect(
	mapStateToProps,
	mapDispatchToProps
)(Package)


export default VendorPackage
