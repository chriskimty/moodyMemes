import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

// takes in as argument whatever children component is passed in
const ProtectedPath = ({ children }) => {
	let { user } = useUserAuth();
	//if user isnt logged it, will return to the page of login
    if (!user) {
        // change navigation to the component that stores login and signup (haven't created at this point)
		return <Navigate to='/' />;
	} else {
		//would return to homepage
		return children;
	}
}

export default ProtectedPath;