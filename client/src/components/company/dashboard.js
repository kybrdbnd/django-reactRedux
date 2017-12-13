import React, { Component } from 'react';
import Sidebar from './sidebar'

class Dashboard extends Component{

	componentDidMount(){
		this.props.getVendorDetail()
	}

	render(){
		return (
				<div className="main_content">
					<Sidebar/>
					<h1>{this.props.details['name']}</h1>
					{this.props.details['owner'] == null ? '' :
					<h1>{this.props.details['owner']['username']}</h1>
				}
				</div>
		
			)
	}
}


export default Dashboard;