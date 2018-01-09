import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

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
        <NavItem onClick={this.logout} eventKey={3}>Logout</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
		)
	}
}

export default Sidebar;



