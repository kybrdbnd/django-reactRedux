import React, { Component } from 'react';
// Import routing components
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import About from './components/about';
import VendorLogin from './container/validLogin';
import VendorDashboard  from './container/vendorDashboard';
import VendorPackages from './container/vendorPackages';
import VendorLanding  from './container/vendorLanding';


class AppRoutes extends Component{
	render(){
		return (
			<Router history={browserHistory}>
		        <Route path="/" component={App}/>
		        <Route path="/about" component={About}/>
		        <Route path="/login" component={VendorLogin}/>
		        <Route path="/company" component={VendorDashboard}/>
		        <Route path="/packages" component={VendorPackages}/>
		        <Route path="/company-landing-steps" component={VendorLanding}/>
		    </Router>
			)
	}
}

export default AppRoutes;