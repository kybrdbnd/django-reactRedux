import { connect } from 'react-redux';
import { updateCompanyFromServer } from '../actions/companyList';
import Home from '../components/home'

const mapStateToProps = (state,ownProps) => {
	return{
		companies: state.companyListReducer
	}
}

const mapDispatchToProps = dispatch => ({

	updateCompanyFromServer: () => {
		dispatch(updateCompanyFromServer());
	},

})

const DisplayCompanyList = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Home)

export default DisplayCompanyList;