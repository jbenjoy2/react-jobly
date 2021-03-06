import React, { useContext } from 'react';
import './Navbar.css';
import UserContext from './Context/UserContext';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ logout }) => {
	const { currentUser } = useContext(UserContext);

	const authNav = () => {
		return (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item mr-4">
					<NavLink className="Navbar-link nav-link mr-4" exact to="/companies">
						Companies
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="Navbar-link nav-link mr-4" exact to="/jobs">
						Jobs
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="Navbar-link nav-link mr-4" exact to="/profile">
						Edit Profile
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<Link className="Navbar-link nav-link" to="/" onClick={logout}>
						Log out {currentUser.firstName || currentUser.username}
					</Link>
				</li>
			</ul>
		);
	};

	const anonNav = () => {
		return (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item mr-4">
					<NavLink className="Navbar-link nav-link mr-4" exact to="/login">
						Login
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="Navbar-link nav-link mr-4" exact to="/signup">
						Sign Up
					</NavLink>
				</li>
			</ul>
		);
	};
	return (
		<nav className="Navbar navbar navbar-expand-lg">
			<Link className="Navbar-brand navbar-brand" to="/">
				Jobly
			</Link>
			{currentUser ? authNav() : anonNav()}
		</nav>
	);
};

export default Navbar;
