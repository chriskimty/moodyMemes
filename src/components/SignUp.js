import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import GoogleButton from "react-google-button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
              const user = userCredential.user;
              console.log(user);
              alert("Successfully created an account")
              // this 'home' should be user's home that shows login status
              navigate('/Home')
          })
          .catch((error) => {
            const errorCode = error.code;
              alert(errorCode);
          });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp();
        console.log('ahah')
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

            <p>Already have an account?</p>
            <Link to ='/login'>Log In Here</Link>
            <p>or</p>
            <Link to ='/home'>Proceed as anonymous user</Link>
        </div>
    )
}

export default SignUp;