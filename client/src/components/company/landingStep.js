import React, { Component } from 'react';
import {Grid, Row, Col ,FormControl,ControlLabel,FormGroup, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class LandingStep extends Component{

	constructor(props){
		super(props)
		this.state = {
			company_name: ""
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
		this.props.saveCompany(this.state.company_name)
	}

	renderLandingSteps(){
		let landingSteps = 
			<form onSubmit={this.landingFormSubmit}>
				<FormGroup>
					<Row>
						<Col md={4}>
			    			<ControlLabel htmlFor="company_name">Enter Your Company Name:</ControlLabel>			
							<FormControl
			      				type="text" 
			      				name="company_name" 
			      				value={this.state.company_name}
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