import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="Navbar">
			<NavLink className="Navbar-link" exact to="/">
				Home
			</NavLink>
			<NavLink className="Navbar-link" exact to="/companies">
				Companies
			</NavLink>
			<NavLink className="Navbar-link" exact to="/jobs">
				Jobs
			</NavLink>
			<NavLink className="Navbar-link" exact to="/login">
				Login
			</NavLink>
			<NavLink className="Navbar-link" exact to="/signup">
				Sign Up
			</NavLink>
			<NavLink className="Navbar-link" exact to="/profile">
				Edit Profile
			</NavLink>
		</nav>
	);
};

export default Navbar;
