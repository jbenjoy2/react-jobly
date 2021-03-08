import React from 'react';
import { useParams } from 'react-router-dom';
const Company = ({ companies }) => {
	const { handle } = useParams();

	const singleComp = companies.find((company) => company.handle === handle);

	return (
		<div className="Company">
			<h1>{singleComp.name}</h1>
		</div>
	);
};

export default Company;
