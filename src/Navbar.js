import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="Navbar navbar navbar-expand-lg">
			<NavLink className="Navbar-brand navbar-brand" exact to="/">
				Jobly
			</NavLink>
			<ul className="navbar-nav ml-auto">
				<li className="nav-item mr-4">
					<NavLink className="Navbar-link nav-item mr-4" exact to="/companies">
						Companies
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="Navbar-link nav-item mr-4" exact to="/jobs">
						Jobs
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="Navbar-link nav-item mr-4" exact to="/login">
						Login
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="Navbar-link nav-item mr-4" exact to="/signup">
						Sign Up
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="Navbar-link nav-item mr-4" exact to="/profile">
						Edit Profile
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
