import React, { Component } from 'react';
import {Grid, Row, Col ,FormControl,ControlLabel,FormGroup, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class LandingStep extends Component{

	constructor(props){
		super(props)
		this.state = {
			company_name: "",
			categories: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.landingFormSubmit = this.landingFormSubmit.bind(this);
		this.selectCategory = this.selectCategory.bind(this)
	}

	handleChange(e){
		e.preventDefault();
		let name = e.target.name
		let value = e.target.value
		this.setState({[name]: value})
	}

	componentDidMount(){
		this.props.getCategories()
	}

	landingFormSubmit(e){
		e.preventDefault();
		let categories_list = this.state.categories.split(',')
		let company_detail = {
			'name': this.state.company_name,
			'categories': categories_list
		}
		this.props.saveCompany(company_detail)
	}

	
	companyCategories(){
		let categories = []
		this.props.categories.map((category)=>
				categories.push({
					'value': category.name,
					'label': category.name
				})
		)
		return categories
	}

	selectCategory(val){
		this.setState({categories:val})
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
	    				<Col md={4}>
	    					<Select
	    					multi
							  options={this.companyCategories()}
							    value={this.state.categories}
							    onChange={this.selectCategory}
							    simpleValue
							    placeholder="Choose Your Categories"
							    closeOnSelect={false}
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