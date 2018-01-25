import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';

class Dashboard extends Component{

	componentDidMount(){
		this.props.getVendorDetail()
	}

	companyCategories(){
		let categories = this.props.details['categories'].map((category)=>
				<li key={category.id}>{category.name}</li>
			);
		return categories
	}

	render(){
		return (
					<Grid>
					<h1>{this.props.details['name']}</h1>
					{this.props.details['owner'] == null ? '' :
						<div>
							<h1>{this.props.details['owner']['username']}</h1>
							<ul>{this.companyCategories()}</ul>
						</div>
					}
					</Grid>
		
			)
	}
}


export default Dashboard;