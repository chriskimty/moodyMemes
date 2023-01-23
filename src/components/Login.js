// component can look more like a modal with a close button on the top
// create a separate component called sign up? but default view will be login

import { Link } from "react-router-dom";
import { useState } from "react";
import SignUp from "./SignUp";
// import app from "../firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = (app) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsClicked(true);
        // create separate component so I can offload the Login component here (it should essentially go back and forth)
    }

    // this prob needs to go in SignUp.js
    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
              const user = userCredential.user;
              console.log(user);
              alert("Successfully created an account")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
              alert(errorCode);
            // ..
          });
    }

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
              alert("You have successfully signed in")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            alert(errorCode);
        });
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="email address" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>

            {/* <button onClick={signUp}>Create Account</button> */}
            {/* need to add error handling to signIn func. so it only goes to Link if it meets criteria */}
            <Link to="/home" onClick={signIn}>Sign in</Link>
            <p>Don't have an account?</p>
            <button onClick={handleClick}>Sign up here</button>
            {isClicked ? <SignUp/> :null}
            <p>or</p>
            <button>Proceed as anonymous user</button>
            {/* ^for this one, figure out whether it should go to protected route or not */}
        </div>
    )
};

export default Login;