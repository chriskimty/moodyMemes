// component can look more like a modal with a close button on the top
// create a separate component called sign up? but default view will be login

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { useAuth } from "../context/UserAuth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // const auth = getAuth();
    const { logIn, googleSignIn } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await logIn(email, password);
            navigate('/Home');
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    async function handleGoogleSignIn (e) {
		e.preventDefault();
		try {
			await googleSignIn();
		} catch(error) {
			setError(error.message);
        } finally {
            navigate('/Home');
        }
	};

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
            {/* need to add error handling to signIn func. so it only goes to Link if it meets criteria */}
                <button disabled={loading}>Sign in</button>
            </form>
            {/* create custom error later */}
            {error && <p>{error}</p>}
            <div>
                <GoogleButton
                    className='g-btn'
                    type='dark'
                    onClick={handleGoogleSignIn}
                />
			</div>
            <p>Don't have an account?</p>
            <Link to ='/signup' className="button">Sign Up Here</Link>
            <p>or</p>
            <Link to ='/home' className="button">Proceed as anonymous user</Link>
            {/* ^for this one, figure out whether it should go to protected route or not. maybe home2? */}
        </div>
    )
};

export default Login;