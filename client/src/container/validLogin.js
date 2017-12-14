import { connect } from 'react-redux';
import { signinCreditential, signupCredentials } from '../actions/loginForm';
import Login from '../components/login'

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
	)(Login)

export default VendorLogin;