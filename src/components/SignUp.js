import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserAuth";
import LoadingPage from './LoadingPage';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();
    const { signUp, logIn } = useAuth();

    async function handleSubmit(e){
        e.preventDefault();
        try {
            setLoading(true);
			await signUp(email, password);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        } finally {
            await logIn(email, password);
            navigate('/home');
        }
        setLoading(false);
    }

    return (
        <section className="signUp">
            <div className="wrapper accountForm">
                <h2>Sign Up</h2>
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
                    <button className="button">Create an Account</button>
                </form>

                {error && <p>{'Your password should be at least 6 characters. Please try again!'}</p>}
                {loading && <LoadingPage/>}
                <p>Already have an account?</p>
                <Link to='/login' className="button">Log In Here</Link>
                <p>or</p>
                <Link to='/home' className="button">Proceed as anonymous user</Link>
            </div>
        </section>
    )
}

export default SignUp;