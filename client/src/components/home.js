import React, { Component } from 'react';
import CompanyList from './companyList'
import {Grid} from 'react-bootstrap';


class Home extends Component {

  componentDidMount(){
    this.props.updateCompanyFromServer();
  }
  
  render() {
    return (
      <Grid>
        <h4>Companies List</h4>
        <CompanyList companies={this.props.companies}/>
      </Grid>
    );
  }
}

export default Home;
