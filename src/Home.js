import React, { useContext, Fragment } from 'react';
import UserContext from './Context/UserContext';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<div className="Home">
			<div className="container text-center">
				<h1 className="mb-4 font-weight-bold">Welcome to Jobly</h1>
				{currentUser ? (
					<h2 className="text-secondary">
						Welcome Back, {currentUser.firstName || currentUser.username}!
					</h2>
				) : (
					<Fragment>
						<p>Log in or sign up to explore companies and jobs!</p>
						<p>
							<Link to="/login" className="btn btn-success mr-4">
								Log In
							</Link>
							<Link to="/signup" className="btn btn-primary">
								Sign Up
							</Link>
						</p>
					</Fragment>
				)}
			</div>
		</div>
	);
};

export default Home;
