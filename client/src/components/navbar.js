import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
class AppNavbar extends Component{
	render(){
		return (
			<Navbar inverse collapseOnSelect>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a>Sample App</a>
			      </Navbar.Brand>
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav pullRight>
			      	<LinkContainer to="/about">
			        <NavItem eventKey={1}>About</NavItem>
			        </LinkContainer>
			        <LinkContainer to="/login">
			        <NavItem eventKey={2}>Login</NavItem>
			        </LinkContainer>
			      </Nav>
    			</Navbar.Collapse>
  			</Navbar>
		)
	}
}

export default AppNavbar;
