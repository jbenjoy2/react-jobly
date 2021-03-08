import React, { useState } from 'react';

const SearchForm = ({ searchFunc }) => {
	const [ term, setTerm ] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		searchFunc(term.trim() || undefined);
		setTerm(term.trim());
	};

	const handleChange = (evt) => {
		setTerm(evt.target.value);
	};

	return (
		<div className="SearchForm mb-3">
			<form className="form-inline" onSubmit={handleSubmit}>
				<input
					className="form-control form-control-lg flex-grow-1"
					name="term"
					placeholder="Search here"
					value={term}
					onChange={handleChange}
				/>
				<button type="submit" className="btn btn-lg btn-success">
					Submit
				</button>
			</form>
		</div>
	);
};

export default SearchForm;
