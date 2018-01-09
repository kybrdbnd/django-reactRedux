import { connect } from 'react-redux';
import { signinCreditential, signupCredentials } from '../../actions/loginForm';
import Vendor from '../../components/login/vendor'

const mapStateToProps = (state,props) => {
	return{
		token: state.companyListReducer
	}
}

const mapDispatchToProps = (dispatch, props) => ({

	signInFormSubmit: (formData) => {
		let username = formData['username']
		let password = formData['password']
		dispatch(signinCreditential(username,password));
	},

	signUpFormSubmit: (formData) => {
		dispatch(signupCredentials(formData));
	}

})

const VendorLogin = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Vendor)

export default VendorLogin;