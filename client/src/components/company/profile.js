import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import {Button, Row, Col, FormGroup, ControlLabel} from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import ProfileBasic from './profileBasic';


class Profile extends Component{

	componentDidMount(){
		this.props.getVendorDetail()
		this.props.getCompanyProfile()
	}

	companyCategories(){
		let categories = this.props.details['categories'].map((category)=>
				<li key={category.id}>{category.name}</li>
			);
		return categories
	}

	render(){
			let profileBasicComponent;
				if(Object.keys(this.props.profile).length){
					profileBasicComponent = <ProfileBasic profile = {this.props.profile} updateCompanyProfile={this.props.updateCompanyProfile}/>
				} else{
						profileBasicComponent = null
				}
		return (
				<Grid>
					<h1>{this.props.details['name']}</h1>
					{this.props.details['owner'] == null ? '' :
						<div>
							<h1>{this.props.details['owner']['username']}</h1>
							<ul>{this.companyCategories()}</ul>
						</div>
					}
					{profileBasicComponent}
				</Grid>
			)
	}
}

export default Profile;