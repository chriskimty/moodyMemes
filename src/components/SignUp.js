import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserAuth";

// figure out how to add username as param? 
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signUp, logIn } = useAuth();

    // figure out if when user signs up, does that automatically keep them logged in too? 
    async function handleSubmit(e){
        e.preventDefault();
        try {
			await signUp(email, password);
		} catch(error) {
			setError(error.message);
        } finally {
            await logIn(email, password);
            navigate('/Home');
        }
    }

    return (
        <div className="signUp">
            <h2>Create an Account</h2>
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
                <button>Create an Account</button>
            </form>

            {error && <p>{error}</p>}
            <p>Already have an account?</p>
            <Link to='/login' className="button">Log In Here</Link>
            <p>or</p>
            <Link to='/home' className="button">Proceed as anonymous user</Link>
        </div>
    )
}

export default SignUp;