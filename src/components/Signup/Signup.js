import React, { useRef, useState } from 'react';
import './Signup.css';
import { Link, withRouter } from 'react-router-dom';

import { useAuth } from '../../AuthContext';
import {auth, uiConfig } from '../../firebase';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';

const Signup = (props) => {
    const email = useRef();
    const password = useRef();
    const firstName = useRef();
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [firstErr, setFirstErr] = useState(false);
    const [lastErr, setlastErr] = useState(false);
    const lastName = useRef();    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup, isSignedUp } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let verEmail = re.test(email.current.value);
        if(verEmail !== true) {
            return setError("Email input is not correct")
        }

        if(firstName.current.value.length < 2 || 
            firstName.current.value.length === "") {
            setFirstErr(true);
            setFirstNameError('First name should be more than two characters')
        }

        if(lastName.current.value.length < 2 || 
            lastName.current.value.length === "") {
            setlastErr(true);
            setLastNameError('Last name should be more than two characters')
        }

        try {
            setError('');
            setLoading(true);
            await signup(email.current.value, password.current.value);
            props.history.replace('/signin');
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);
    }

    console.log(isSignedUp);

    return (
        <div className="signup">
            <Link className="signup_company" to="/company">
                    For employers
            </Link>
            <h2>Sign up</h2>
            <div className="signup_info">
                
                {error && <p className="error"> {error} </p>}
                <form onSubmit={handleSubmit} className="signup_form">
                    <div>
                        <label>First Name:</label>
                        {firstErr && <p className="error"> {firstNameError} </p>}
                        <input className="signup_input" ref={firstName} type="text" />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        {lastErr && <p className="error"> {lastNameError} </p>}
                        <input className="signup_input" ref={lastName} type="text" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input className="signup_input" ref={email} type="text" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input className="signup_input" ref={password} type="password" />
                    </div>
                    <button 
                        disabled={loading} 
                        className="signup_button" 
                        type="submit">Signup</button>    
                </form>
                <div className="lines">
                    <div className="line"></div>
                    <div className="or">or</div>
                    <div className="line"></div>
                </div>
                <div className="auth">
                {isSignedUp ? props.history.replace('/feed') :
                    <FirebaseAuth
                        className="firebase_auth"
                        uiConfig={uiConfig}
                        firebaseAuth={auth} />}
                </div>
                <p className="alt_signup">Already have an account <Link className="links"  to="/signin">Signin</Link></p>
            </div>
        </div>
    )
}

export default withRouter(Signup);
