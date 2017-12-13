import React, { Component } from 'react';
import CompanyList from './companyList'

class Home extends Component {
  componentDidMount(){
    this.props.updateCompanyFromServer();
  }
  render() {
    return (
      <div>
      <CompanyList companies={this.props.companies}/>
      </div>
    );
  }
}

export default Home;
