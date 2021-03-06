import React, { Component } from 'react';
import {Button, Row, Col, Modal, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class PackageEdit extends Component{
	
	constructor(props) {
		super(props)
		this.state = {
			selected_package: {
					'name': '',
					'description': '',
					'price': ''
			}
		}
		this.handleChange = this.handleChange.bind(this)
	}
	
	componentDidMount() {
	    this.setState({selected_package: this.props.package });
	  }

	handleChange(e){
		let temp_name = e.target.name
		let value = e.target.value 
		let temp_package = this.state.selected_package
		temp_package[temp_name] = value
		this.setState({selected_package:temp_package})
	}
	
	packageAction(pck){
		this.props.action(pck)
		this.props.close()
	}

	render(){
		return (
			<div>
				<Modal.Header>
					<Modal.Title>
						{this.props.name}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<FormGroup>
							<Row>
								<Col md={8}>
			          				<ControlLabel htmlFor="name">Name</ControlLabel>
									<FormControl id="name" name="name" type="text" value={this.props.package.name} onChange={this.handleChange}/>
			          			</Col>
		          			</Row>
							<Row>
			          			<Col md={8}>
			          				<ControlLabel htmlFor="description">Description</ControlLabel>
							 		<FormControl id="description" name="description" type="text" value={this.props.package.description} onChange={this.handleChange}/>
			          			</Col>
		          			</Row>
							<Row>
			          			<Col md={8}>
			          				<ControlLabel htmlFor="price">Price</ControlLabel>
							 		<FormControl id="price" name="price" type="text" value={this.props.package.price} onChange={this.handleChange}/>
			          			</Col>
		          			</Row>
		          		</FormGroup>
					</form>
				</Modal.Body>
				<Modal.Footer>
			    	<Button onClick={this.packageAction.bind(this,this.state.selected_package)}>Save</Button>
			    	<Button onClick={this.props.close}>Cancel</Button>
				</Modal.Footer>
			</div>
			)
	}
}

export default PackageEdit;