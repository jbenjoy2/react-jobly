import React, { useState } from 'react';

const Login = () => {
	const INITIAL_STATE = {
		email    : '',
		password : ''
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((formData) => ({
			...formData,
			[name] : value
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="Login-email">
				<label htmlFor="email">Email</label>
				<input
					type="text"
					id="email"
					name="email"
					placeholder="Email"
					onChange={handleChange}
					value={formData.email}
				/>
			</div>
			<div className="Login-password">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					onChange={handleChange}
					value={formData.password}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Login;
