import React, { useState } from 'react';

const Signup = () => {
	const INITIAL_STATE = {
		email     : '',
		password  : '',
		firstName : '',
		lastName  : '',
		userName  : ''
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
			<div className="Signup-email">
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
			<div className="Signup-first">
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					placeholder="First name"
					onChange={handleChange}
					value={formData.firstName}
				/>
			</div>
			<div className="Signup-last">
				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					id="lastName"
					name="lastName"
					placeholder="Last name"
					onChange={handleChange}
					value={formData.lastName}
				/>
			</div>
			<div className="Signup-username">
				<label htmlFor="userName">Username</label>
				<input
					type="text"
					id="userName"
					name="userName"
					placeholder="Username"
					onChange={handleChange}
					value={formData.userName}
				/>
			</div>
			<div className="Signup-password">
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

export default Signup;
