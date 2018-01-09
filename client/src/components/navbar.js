import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
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
			      	<NavDropdown eventKey={1} title="Partner With Us" id="basic-nav-dropdown">
				        <LinkContainer to="/vendor_login">
				        	<MenuItem eventKey={1.1}>
				        		Register as a Service Provider
				        	</MenuItem>
				        </LinkContainer>
				        <MenuItem divider />
				        <MenuItem eventKey={1.2}>Claim a Business Listing</MenuItem>
				      </NavDropdown>
			        <LinkContainer to="/customer_login">
			        <NavItem eventKey={2}>SignUp</NavItem>
			        </LinkContainer>
			      </Nav>
    			</Navbar.Collapse>
  			</Navbar>
		)
	}
}

export default AppNavbar;
