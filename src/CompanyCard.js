import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ name, handle, description, logoUrl }) => {
	return (
		<Link to={`/companies/${handle}`} className="CompanyCard card">
			<div className="card-body">
				<h4 className="CompanyCard-name card-title">
					{name}
					{logoUrl && <img src={logoUrl} alt={`${name} logo`} className="float-right ml-5" />}
				</h4>
				<p>
					<small>{description}</small>
				</p>
			</div>
		</Link>
	);
};

export default CompanyCard;
