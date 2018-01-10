import React, { Component } from 'react';
import Sidebar from './sidebar'
import {Grid, Row, Col ,FormControl,ControlLabel,FormGroup, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Profile extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			username: "",
			age: ""
		}
		this.handleChange = this.handleChange.bind(this)
	}

	componentWillMount(){
		this.props.getCustomerDetail()
	}

	handleChange(e){
		e.preventDefault()
		let name = e.target.name
		let value = e.target.value
		this.setState({[name]: value})
	}

	renderProfileForm(){
		let formData = 
			<form>
				<FormGroup>
					<Row>
						<Col md={4}>
							<ControlLabel htmlFor="username">Username:</ControlLabel>			
							<FormControl
			      				type="text" 
			      				name="username" 
			      				value={this.state.username}
			      				onChange={this.handleChange}
			    			/>
						</Col>
					</Row>
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
		return (
			<div>
			<Sidebar/>
			<Grid>
			{this.renderProfileForm()}
			</Grid>
			</div>
			)
	}
}

export default Profile;