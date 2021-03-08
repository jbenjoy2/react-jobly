import React, { useState } from 'react';

const Profile = ({ user }) => {
	const INITIAL_STATE = {
		email     : user.email,
		firstName : user.firstName,
		lastName  : user.lastName,
		password  : ''
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
			<div className="Profile-username">
				<label htmlFor="userName">Username</label>
				<p>{user.userName}</p>
			</div>
			<div className="Profile-email">
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
			<div className="Profile-first">
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
			<div className="Profile-last">
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
			<div className="Profile-password">
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

export default Profile;
