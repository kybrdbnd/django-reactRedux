import { connect } from 'react-redux';
import { loginCreditential } from '../actions/loginForm';
import Login from '../components/login'

const mapStateToProps = (state,props) => {
	return{
		token: state.companyListReducer
	}
}

const mapDispatchToProps = (dispatch, props) => ({

	formSubmit: (formData) => {
		let username = formData['username']
		let password = formData['password']
		dispatch(loginCreditential(username,password));
	},

})

const VendorLogin = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Login)

export default VendorLogin;