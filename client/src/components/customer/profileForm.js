import React, { Component } from 'react';
import {Row, Col ,FormControl,ControlLabel,FormGroup, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class ProfileForm extends Component {
	
	
	constructor(props){
		super(props)
		this.state = {
			first_name: props.details['first_name'],
			last_name: props.details['last_name'],
			email: props.details['email'],
			username: props.details['username'],
			age: props.details['profile']['extra_info']['age']
		}
		this.handleChange = this.handleChange.bind(this)
		this.saveProfile = this.saveProfile.bind(this)
	}


	handleChange(e){
		e.preventDefault()
		let name = e.target.name
		let value = e.target.value
		this.setState({[name]: value})
	}

	saveProfile(e){
		e.preventDefault()
		let form_data = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			extra_info: {
				age: this.state.age
			}
		}
		this.props.updateProfile(form_data)
	}	

	renderProfileForm(){
		let formData = 
			<form onSubmit={this.saveProfile}>
				<Row>
					<Col md={4}>
						<h3>Username:</h3> {this.state.username}
					</Col>
				</Row>
				<FormGroup>
					<Row>
						<Col md={4}>
							<ControlLabel htmlFor="first_name">First Name:</ControlLabel>			
							<FormControl
			      				type="text" 
			      				name="first_name" 
			      				value={this.state.first_name}
			      				onChange={this.handleChange}
			    			/>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<ControlLabel htmlFor="last_name">Last Name:</ControlLabel>	
							<FormControl
			      				type="text" 
			      				name="last_name" 
			      				value={this.state.last_name}
			      				onChange={this.handleChange}
			    			/>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<ControlLabel htmlFor="email">Email:</ControlLabel>			
							<FormControl
			      				type="text" 
			      				name="email" 
			      				value={this.state.email}
			      				onChange={this.handleChange}
			    			/>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<ControlLabel htmlFor="age">Age:</ControlLabel>			
							<FormControl
			      				type="number" 
			      				name="age" 
			      				value={this.state.age}
			      				onChange={this.handleChange}
			    			/>
						</Col>
					</Row>
					<Row>
						<Col md={2}>
						 	<Button bsStyle="primary" type="submit">Save
							<FontAwesome
        						name='paper-plane'
        						/>
							</Button>
						</Col>
					</Row>
				</FormGroup>
			</form>
			return formData
	}

	render(){
		return(
			<div>
				{this.renderProfileForm()}
			</div>
			)
	}
}

export default ProfileForm;