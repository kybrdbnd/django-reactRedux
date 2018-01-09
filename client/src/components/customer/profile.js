import React, { Component } from 'react';
import Sidebar from './sidebar'
import {Grid} from 'react-bootstrap';


class Profile extends Component {
	render(){
		return (
			<div>
			<Sidebar/>
			<Grid>
			<h1>Welcome Customer!!!</h1>
			</Grid>
			</div>
			)
	}
}

export default Profile;