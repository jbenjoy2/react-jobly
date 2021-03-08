import React, { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import JoblyApi from './api';

const Companies = () => {
	const [ companiesList, setCompaniesList ] = useState(null);

	useEffect(function getAPIComanies() {
		// call our async search function
		search();
	}, []);

	// function to search/filter api results based on search bar form
	async function search(name) {
		let companies = await JoblyApi.getCompanies(name);
		setCompaniesList(companies);
	}

	if (!companiesList) return <h1>Loading. . .</h1>;
	return (
		<div className="Companies col-md-8 offset-md-2">
			<SearchForm searchFunc={search} />
			{companiesList.length ? (
				<div className="Companies-list">
					{companiesList.map((company) => (
						<CompanyCard
							key={company.handle}
							handle={company.handle}
							name={company.name}
							description={company.description}
							logoUrl={company.logoUrl}
						/>
					))}
				</div>
			) : (
				<p>Sorry no results found!</p>
			)}
		</div>
	);
};

export default Companies;
