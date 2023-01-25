// component can look more like a modal with a close button on the top
// create a separate component called sign up? but default view will be login

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import GoogleButton from "react-google-button";

const Login = (app) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert("You have successfully signed in")
            navigate('/Home')
        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            alert(errorCode);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn();
        console.log('ahah')
    }

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
                <button>Sign in</button>
            </form>
            <p>Don't have an account?</p>
            <Link to ='/signup'>Sign Up Here</Link>
            <p>or</p>
            <Link to ='/home'>Proceed as anonymous user</Link>
            {/* ^for this one, figure out whether it should go to protected route or not. maybe home2? */}
        </div>
    )
};

export default Login;