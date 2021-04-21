import React, { useRef, useState } from 'react';
import './Signup.css';
import { Link, withRouter } from 'react-router-dom';

import { useAuth } from '../../AuthContext';
// import stylecFirebaseAuth from 'react-firebaseui/'

const Signup = (props) => {
    console.log(props);
    const email = useRef();
    const password = useRef();
    const [error, setError] = useState('');
    const [signedin, setSignin] = useState(false);
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let verEmail = re.test(email.current.value);
        if(verEmail !== true) {
            return setError("Email input is not correct")
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

    return (
        <div className="signup">
            <Link className="signup_company" to="/companyprofile">
                    For employers
            </Link>
            <div className="signup_info">
                <h2>Sign up</h2>
                {error && <p className="error"> {error} </p>}
                <form onSubmit={handleSubmit} className="signup_form">
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
                    <p className="alt_signup">Already have an account <Link className="links"  to="/signin">Signin</Link></p>    
                </form>
            </div>
        </div>
    )
}

export default withRouter(Signup);
