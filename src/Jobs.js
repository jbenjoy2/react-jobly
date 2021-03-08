import React from 'react';
const Jobs = ({ jobsList }) => {
	return (
		<div>
			<ul>{jobsList.map((job) => <li key={job.id}>{job.title}</li>)}</ul>
		</div>
	);
};

export default Jobs;
