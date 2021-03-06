import React, { Component } from 'react';
import {Grid, Row, Col ,FormControl,ControlLabel,FormGroup, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import 'react-select/dist/react-select.css';

class LandingStep extends Component{

	constructor(props){
		super(props)
		this.state = {
			username: "",
			age: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.landingFormSubmit = this.landingFormSubmit.bind(this);
	}

	handleChange(e){
		e.preventDefault();
		let name = e.target.name
		let value = e.target.value
		this.setState({[name]: value})
	}

	landingFormSubmit(e){
		e.preventDefault();
		let landing_data = {
			"username": this.state.username,
			"age": this.state.age
		}
		this.props.landingStep(landing_data)
	}

	renderLandingSteps(){

		let landingSteps = 
			<form onSubmit={this.landingFormSubmit}>
				<FormGroup>
					<Row>
						<Col md={4}>
			    			<ControlLabel htmlFor="username">Enter Your Username:</ControlLabel>			
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
			    			<ControlLabel htmlFor="age">Enter Your age:</ControlLabel>			
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
						 	<Button bsStyle="primary" type="submit">Submit
							<FontAwesome
        						name='paper-plane'
        						/>
							</Button>
						</Col>
					</Row>
				</FormGroup>
			</form>

		return landingSteps

	}
	render(){
		return (
				<Grid>{this.renderLandingSteps()}</Grid>
			)
	}
}

export default LandingStep