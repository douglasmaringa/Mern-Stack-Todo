import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();  // this stops the refresh
        // do the login logic

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to homepage///
                history.push("/");
            })
            .catch((e) => alert(e.message));
    }

    console.log(auth);

    const register = event => {
        event.preventDefault();  // this stops the refresh
        // do the regsiter logic

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // created a user and logged in, redirect to homepage
                history.push("/");

            })
            .catch((e) => alert(e.message));
    }
    return (
        <div>
             <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
                </form>

                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
