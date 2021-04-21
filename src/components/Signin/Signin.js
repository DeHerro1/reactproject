import React, { useRef, useState } from 'react';
import './Signin.css';
import {Link, withRouter} from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const Signin = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { signin } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let verEmail = re.test(emailRef.current.value);
        if(verEmail !== true) {
            return setError("Email input is not correct")
        }
        try {
            setError('');
            setLoading(true);
            await signin(emailRef.current.value, passwordRef.current.value);
            props.history.replace('/home');
        } catch {
            setError('Failed to signin acount');
        }
        setLoading(false);
    } 

    return (
        <div className="signin">
            <div className="signin_info">
                <h2>Login</h2>
                {error && <p className="error"> {error} </p>}
                <form onSubmit={handleSubmit} className="signin_form">
                    <div>
                        <label>Email:</label>
                        <input ref={emailRef} className="signup_input" type="text" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input ref={passwordRef} className="signup_input" type="password" />
                    </div>
                    <button 
                        disabled={loading}
                        type="submit" 
                        className="signup_button">Signin</button>
                </form>
            <p className="alt">Don't have an account <Link className="links" to="/">Signup</Link></p>
            </div>
        </div>
    )
}

export default withRouter(Signin);
