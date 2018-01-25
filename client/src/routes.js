import React, { Component } from 'react';
// Import routing components
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import VendorLogin from './container/vendor/vendorLogin';
import VendorHome  from './container/vendor/vendorHome';
import VendorDashboard  from './container/vendor/vendorDashboard';
import VendorProfile  from './container/vendor/vendorProfile';
import VendorPackage from './container/vendor/vendorPackage';
import VendorLanding  from './container/vendor/vendorLanding';
import VendorMessage  from './container/vendor/vendorMessage';
import VendorReview  from './container/vendor/vendorReview';
import CustomerLogin from './container/customer/customerLogin';
import CustomerProfile  from './container/customer/customerProfile';
import CustomerLanding from './container/customer/customerLanding';

class AppRoutes extends Component{
	render(){
		return (
			<Router history={browserHistory}>
		        <Route path="/" component={App}/>
		        <Route path="/vendor_login" component={VendorLogin}/>
		        <Route path="/customer_login" component={CustomerLogin}/>
		        <Route path="" component={VendorHome}>
		         	<Route path="/dashboard" component={VendorDashboard}/>
			        <Route path="/packages" component={VendorPackage}/>
			        <Route path="/messages" component={VendorMessage}/>
			        <Route path="/reviews" component={VendorReview}/>
			        <Route path="/update-profile" component={VendorProfile}/>
		        </Route>
		        <Route path="/company-landing-steps" component={VendorLanding}/>
		        <Route path="/customer-landing-steps" component={CustomerLanding}/>
		        <Route path="/profile" component={CustomerProfile}/>
		    </Router>
			)
	}
}

export default AppRoutes;