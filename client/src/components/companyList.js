import React, { Component } from 'react';
import {Button, Thumbnail, Col} from 'react-bootstrap';


class CompanyList extends Component{


	renderCompanyList(){

		let companyBlock = this.props.companies.map((company)=>
				<Col md={4} key={company.id}>
		        	<Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
		            	<h3>{company.name}</h3>
		           		<p>
		            		<Button>View</Button>
		            	</p>
		            </Thumbnail>
		        </Col>	
			)

		return companyBlock

	}

	render(){
		return(	<div>
				{this.renderCompanyList()}
				</div>
			)
	}
}

export default CompanyList;