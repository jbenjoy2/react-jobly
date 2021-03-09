import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Companies from './Companies';
import Company from './Company';
import JobList from './JobList';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Protected from './Protected';
const companiesList = [
	{
		name   : 'Apple',
		handle : 'apple',
		id     : 1
	},
	{
		name   : 'Microsoft',
		handle : 'microsoft',
		id     : 2
	}
];

const sampleUser = {
	email     : 'test@sampleUser.com',
	firstName : 'Sample',
	lastName  : 'User',
	userName  : 'SampleUser101'
};

function Routes({ login, signUp }) {
	return (
		<div className="pt-5">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Protected exact path="/companies">
					<Companies />
				</Protected>
				<Protected exact path="/companies/:handle">
					<Company companies={companiesList} />
				</Protected>
				<Protected exact path="/jobs">
					<JobList />
				</Protected>
				<Route exact path="/login">
					<Login login={login} />
				</Route>
				<Route exact path="/signup">
					<Signup signUp={signUp} />
				</Route>
				<Route exact path="/profile">
					<Profile user={sampleUser} />
				</Route>
				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default Routes;
