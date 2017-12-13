import Sidebar from './sidebar'
import React, { Component } from 'react';
import PackageList from './packageList'
import {Button, Row, Grid, Modal, Col, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Package extends Component{

	constructor(props){
		super(props)
		this.state = {
			packageDetail: {
					'name': '',
					'description': '',
					'price': ''
				},
			showPackageModal: false
		}
		this.addPackage = this.addPackage.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.savePackage = this.savePackage.bind(this)
		this.close = this.close.bind(this)
	}

	componentDidMount(){
		this.props.getPackages()
	}

	handleChange(e){
		let temp_name = e.target.name
		let value = e.target.value 
		let temp_package = this.state.packageDetail
		temp_package[temp_name] = value
		this.setState({packageDetail:temp_package})
	}

	addPackage(){
		this.setState({showPackageModal: true})

	}

	close(){
		this.setState({showPackageModal: false})
	}

	savePackage(){
		this.props.createPackage(this.state.packageDetail)
		this.setState({showPackageModal: false})
	}

	renderPackageAdd(){
		let packageBlock = 
			<Grid>
				<form>
        			<FormGroup>
						<Row>
							<Col md={4}>
				          		<ControlLabel htmlFor="name">Name</ControlLabel>
								<FormControl id="name" name="name" type="text" onChange={this.handleChange}/>
				          	</Col>
			          	</Row>
						<Row>
				          	<Col md={4}>
				          		<ControlLabel htmlFor="description">Description</ControlLabel>
								<FormControl id="description" name="description" type="text" onChange={this.handleChange}/>
				          	</Col>
			          	</Row>
						<Row>
				          	<Col md={4}>
				          		<ControlLabel htmlFor="price">Price</ControlLabel>
								<FormControl id="price" name="price" type="text" onChange={this.handleChange}/>
				          	</Col>
			          	</Row>
	          		</FormGroup>
	          	</form>
          	</Grid>
       return packageBlock
	}

	render(){
		return (
				<Row>
				<Sidebar/>
				<Grid>
					<Button bsStyle="info" onClick={this.addPackage}>Add Package
						<FontAwesome
	        						name='plus'
	        						/>
        			</Button>
					<PackageList packages={this.props.packages} delete={this.props.deletePackage} update={this.props.updatePackage}/>
					<Modal show={this.state.showPackageModal} onHide={this.close}>
				      	<Modal.Header>
				      		<Modal.Title>New Package</Modal.Title>
				      	</Modal.Header>
				      	<Modal.Body>
				      		{this.renderPackageAdd()}
				    	</Modal.Body>
				    <Modal.Footer>
				      <Button>Save As Draft</Button>
				      <Button onClick={this.savePackage}>Publish</Button>
				      <Button onClick={this.close}>Cancel</Button>
				    </Modal.Footer>
				    </Modal>
				</Grid>
				</Row>
			

			)
	}
}

export default Package;