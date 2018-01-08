import React, { Component } from 'react';
import {Button, Row, Thumbnail, Col, Modal} from 'react-bootstrap';
import PackageEdit from './packageEdit'

class PackageList extends Component{

	constructor(props){
		super(props)
		this.state = {
			selected_package: {
					'name': '',
					'description': '',
					'price': ''
			},
			openPackageModel: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.close = this.close.bind(this)
	}

	packageDelete(package_delete){
		this.props.delete(package_delete)
	}


	close(){
		this.setState({openPackageModel: false})
	}

	handleChange(e){
		let temp_name = e.target.name
		let value = e.target.value 
		let temp_package = this.state.selected_package
		temp_package[temp_name] = value
		this.setState({selected_package:temp_package})
	}

	getSelectedPackage(package_id){
		let selected_package = this.props.packages.find(p => p.id === package_id)
		this.setState({selected_package: selected_package})
		this.setState({openPackageModel: true})
	}

	renderPackages(){
		const packages = this.props.packages.map((c_package) => 
		        <Col md={4} key={c_package.id}>
		        	<Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
		            	<h3>{c_package.name}</h3>
		            	<p>{c_package.description}</p>
		           		<p>
		            		<Button onClick={this.getSelectedPackage.bind(this,c_package.id)}>Edit</Button>
		            		<Button onClick={this.packageDelete.bind(this,c_package)}>Delete</Button>
		            	</p>
		            </Thumbnail>
		        </Col>		
		);
		return packages
	}

	render(){
		return(
			<Row>
				{this.renderPackages()}
				<Modal show={this.state.openPackageModel} onHide={this.close}>
				    <PackageEdit action={this.props.update} name="Edit Package" package={this.state.selected_package} close={this.close}/>
				</Modal>
			</Row>)
	}
}

export default PackageList;