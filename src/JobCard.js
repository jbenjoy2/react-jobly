import React from 'react';

const JobCard = ({ id, title, salary, companyName, equity }) => {
	function formatSalary(salary) {
		return salary.toLocaleString('en-US', { maximumFractionDigits: 2 });
	}

	return (
		<div className="JobCard card">
			<div className="card-body">
				<h6 className="card-title">{title}</h6>
				<p>{companyName}</p>
				{salary && (
					<div>
						<small>Salary: ${formatSalary(salary)}</small>
					</div>
				)}
				{equity !== undefined && (
					<div>
						<small>Equity: {equity}</small>
					</div>
				)}
			</div>
		</div>
	);
};

export default JobCard;
