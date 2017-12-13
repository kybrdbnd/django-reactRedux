import React, { Component } from 'react';
import {Grid, Row, Col ,FormControl,ControlLabel,FormGroup, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
class Login extends Component{

	constructor(props){
		super(props)
		this.state = {
			username: "",
			password: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this._formSubmit = this._formSubmit.bind(this);

	}

	handleChange(e){
		e.preventDefault();
		const name = e.target.name
		const value = e.target.value
		this.setState({[name]: value})
	}

	_formSubmit(e){
		e.preventDefault();
		this.props.formSubmit({username:this.state.username, password: this.state.password});
	}

	renderLoginForm(){
		const formData = 
			<form onSubmit={this._formSubmit}>
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
				{ this.renderLoginForm() }
				</Grid>
			
			)
	}
}

export default Login;