import React, { Component } from 'react';
import AppNavbar from './components/navbar'
import DisplayCompanyList from './container/displayCompanyList'
import './App.css'

class App extends Component {
  render() {
    return (
    		<div>
    			<AppNavbar/>
      			<DisplayCompanyList/>
      		</div>
    );
  }
}

export default App;
