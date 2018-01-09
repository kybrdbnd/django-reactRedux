import React, { Component } from 'react';
import {Grid, Row, Col ,FormControl,ControlLabel,FormGroup, Button,Tabs, Tab} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
class Vendor extends Component{

	constructor(props){
		super(props)
		this.state = {
			username: "",
			password: "",
			first_name: "",
			last_name: "",
			email: "",
			phone_number: "",
			signup_password:"",
			confirm_password:""
		}
		this.handleChange = this.handleChange.bind(this);
		this._signInFormSubmit = this._signInFormSubmit.bind(this);
		this._signUpFormSubmit = this._signUpFormSubmit.bind(this);

	}

	handleChange(e){
		e.preventDefault();
		let name = e.target.name
		let value = e.target.value
		this.setState({[name]: value})
	}

	_signInFormSubmit(e){
		e.preventDefault();
		this.props.signInFormSubmit({username:this.state.username, password: this.state.password});
	}

	_signUpFormSubmit(e){
		e.preventDefault();
		if(this.state.signup_password===this.state.confirm_password){
			this.props.signUpFormSubmit({first_name:this.state.first_name, 
										last_name: this.state.last_name, 
										email: this.state.email,
										phone_number: this.state.phone_number,
										signup_password: this.state.signup_password,
										next_url: "/company"});
		}else{
			console.log('Check Password')
		}
	}
	
	renderSignupForm(){
		let formData = 
			<form onSubmit={this._signUpFormSubmit}>
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
							<ControlLabel htmlFor="phone_number">Phone Number:</ControlLabel>			
							<FormControl
			      				type="text" 
			      				name="phone_number" 
			      				value={this.state.phone_number}
			      				onChange={this.handleChange}
			    			/>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<ControlLabel htmlFor="signup_password">Password:</ControlLabel>			
							<FormControl
			      				type="password" 
			      				name="signup_password" 
			      				value={this.state.signup_password}
			      				onChange={this.handleChange}
			    			/>
						</Col>
						<Col md={4}>
							<ControlLabel htmlFor="confirm_password">Confirm Password</ControlLabel>	
							<FormControl
			      				type="password" 
			      				name="confirm_password" 
			      				value={this.state.confirm_password}
			      				onChange={this.handleChange}
			    			/>
						</Col>
					</Row>
					<Row>
						<Col md={2}>
						 	<Button bsStyle="primary" type="submit">Submit
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

	renderSigninForm(){
		let formData = 
			<form onSubmit={this._signInFormSubmit}>
				<FormGroup>
					<Row>
						<Col md={4}>
			    			<ControlLabel htmlFor="username">Enter Your Username</ControlLabel>			
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
			    			<ControlLabel htmlFor="password">Enter Your Password </ControlLabel>
							<FormControl
			      				type="password" 
			      				name="password" 
			      				value={this.state.password} 
			      				onChange={this.handleChange}
			    			/>
						</Col>
					</Row>
					<Row>
						<Col md={2}>
						 	<Button bsStyle="primary" type="submit">Submit
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
				<Grid>
					<Tabs defaultActiveKey={1} id="uncontrolled-tab">
					    <Tab eventKey={1} title="SignUp">{ this.renderSignupForm() }</Tab>
					    <Tab eventKey={2} title="SignIn">{ this.renderSigninForm() }</Tab>
					</Tabs>
				</Grid>
			
			)
	}
}

export default Vendor;