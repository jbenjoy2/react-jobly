import React from 'react';
import { Link } from 'react-router-dom';

const Companies = ({ companiesList }) => {
	return (
		<div>
			<ul>
				{companiesList.map((company) => (
					<Link to={`/companies/${company.handle}`} key={company.handle}>
						<li>{company.name}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Companies;
