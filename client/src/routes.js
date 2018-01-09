import React, { Component } from 'react';
// Import routing components
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import VendorLogin from './container/validLogin';
import VendorDashboard  from './container/vendorDashboard';
import VendorPackage from './container/vendorPackage';
import VendorLanding  from './container/vendorLanding';
import VendorMessage  from './container/vendorMessage';
import VendorReview  from './container/vendorReview';

class AppRoutes extends Component{
	render(){
		return (
			<Router history={browserHistory}>
		        <Route path="/" component={App}/>
		        <Route path="/login" component={VendorLogin}/>
		        <Route path="/company" component={VendorDashboard}/>
		        <Route path="/packages" component={VendorPackage}/>
		        <Route path="/messages" component={VendorMessage}/>
		        <Route path="/reviews" component={VendorReview}/>
		        <Route path="/company-landing-steps" component={VendorLanding}/>
		    </Router>
			)
	}
}

export default AppRoutes;