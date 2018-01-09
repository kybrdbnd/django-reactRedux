import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Sidebar extends Component{
  constructor(props){
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout(){
    localStorage.clear();
    window.location.href = '/'
  }

	render(){
		return(
			<Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a>Sample App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
      	<LinkContainer to="/company"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
      	<LinkContainer to="/packages"><NavItem eventKey={2}>Packages</NavItem></LinkContainer>
          <LinkContainer to="/messages"><NavItem eventKey={3}>Messages</NavItem></LinkContainer>
        <LinkContainer to="/reviews"><NavItem eventKey={4}>Reviews</NavItem></LinkContainer>
        <NavItem onClick={this.logout} eventKey={3}>Logout</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
		)
	}
}

export default Sidebar;



