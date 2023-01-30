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
                <div className="accountContainer">
                    <h2>Sign Up</h2>
                    <form className="userForm" onSubmit={handleSubmit}>
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
                    
                        {error && <p>{'Your password should be at least 6 characters. Please try again!'}</p>}
                        {loading && <LoadingPage/>}
                    </form>
                    <div className="loginOptions">
                        <hr className="divider"/>
                        <p>Already have an account?</p>
                        <Link to='/login' className="button">Sign In</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp;