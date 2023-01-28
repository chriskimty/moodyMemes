// component can look more like a modal with a close button on the top
// create a separate component called sign up? but default view will be login

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { useAuth } from "../context/UserAuth";
import LoadingPage from './LoadingPage';

const Login = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const { logIn, googleSignIn, logInAnonymously } = useAuth();
    const navigate = useNavigate();

    async function handleSignIn(e) {
        e.preventDefault();
        try {
            setLoading(true);
            await logIn(email, password);
            navigate('/home');
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    async function handleGoogleSignIn (e) {
		e.preventDefault();
        try {
            setLoading(true);
            await googleSignIn();
            navigate('/home');
		} catch(error) {
			setError(error.message);
        }
        setLoading(false);
    };
    
    async function handleAnonymousSignIn(e) {
        e.preventDefault();
        try {
            await logInAnonymously();
            navigate('/home');
        } catch (error) {
            setError('Cannot complete at this time. Please try again', error.message);
        }
    }

    return (
        <section className="logIn">
            <div className="wrapper accountForm">
                <div className="accountContainer">
                    <h2>Login</h2>
                    <form className="userForm" onSubmit={handleSignIn}>
                        <input
                            type="email"
                            placeholder="email address"
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <input
                            type="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button className="button" type="submit" disabled={loading}>Enter</button>
                        {error && <p>{'Invalid email or password. Please try again!'}</p>}
                        {loading && <LoadingPage/>}
                    </form>
                    
                    <div className="googleBtn">
                        <GoogleButton
                            className='g-btn'
                            type='dark'
                            onClick={handleGoogleSignIn}
                        />
                    </div>
                    <div className="LoginOptions">
                        <p>Don't have an account?</p>
                        <Link to ='/signup' className="button">Sign Up Here</Link>
                        <p>or</p>
                        <button onClick={handleAnonymousSignIn} type="submit" className="button">Try Anonymously</button> 
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Login;