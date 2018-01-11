import React, { Component } from 'react';
import Sidebar from './sidebar'
import { Grid } from 'react-bootstrap';
import ProfileForm from './profileForm';

class Profile extends Component {
	
	componentWillMount(){
		this.props.getCustomerDetail()
	}

	
	render(){
		let profileComponent;
		if(this.props.details.length > 0 || Object.keys(this.props.details).length){
			profileComponent = <ProfileForm details = {this.props.details}/>
		}else{
			profileComponent = null
		}
		return (
			<div>
			<Sidebar/>
			<Grid>
				{profileComponent}
			</Grid>
			</div>
			)
	}
}

export default Profile;