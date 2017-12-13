import React from 'react';
// import PropTypes from 'prop-types';

const CompanyList = ({ companies }) => (

	<ul>
		{companies.map(company => (
			<li key={company.id}>{company.name}</li>
			))}
	</ul>

	)
export default CompanyList;