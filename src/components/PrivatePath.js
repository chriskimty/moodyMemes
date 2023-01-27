import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/UserAuth';

// takes in as argument whatever children component is passed in
const PrivatePath = ({ children }) => {
	let { user } = useAuth();
	//if user isnt logged it, will return to the page of login
    if (!user) {
		return <Navigate to='/' />;
	} else {
		//would return to homepage
		return children;
	}
}

export default PrivatePath;