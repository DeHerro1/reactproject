import React, {useRef, useState} from 'react';
import './Company.css';
import { withRouter } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const Company = (props) => {
    const name = useRef();
    const location = useRef();
    const [compNameErr , setCompNameErr] = useState('');
    const [verCompName, setVerCompName] = useState(false);
    const [passwordErr ,setPasswordErr] = useState('');
    const [verPassword, setVerPassword] = useState(false);
    const [compLocationErr, setCompLocationErr] = useState('');
    const [verCompLocation, setVerCompLocation] = useState(false);
    const [loading, setLoading] = useState(false);
    const images = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const about = useRef();
    const email = useRef();
    const { signup, isSignedUp } = useAuth();

    const [error, setError] = useState('');
    const [isError, setIsError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let verEmail = re.test(email.current.value);
        if(verEmail !== true) {
            return setError("Email input is not correct")
        }

        if(name.current.value === "" ||
        location.current.value === "" ||
        password.current.value === "" ||
        email.current.value === "" ||
        confirmPassword.current.value === "" ||
        about.current.value === "")  {
            setIsError(true)
            setError('Input value')
        }
        else {
            setError(false);
            props.history.push('/feed');
        }

        if(location.current.value.length < 2) {
            setVerCompLocation(true);
            setCompLocationErr('should be more than two characters')
        } else {
            setVerCompLocation(false);
        }

        if(name.current.value.length < 2) {
            setVerCompName(true);
            setCompNameErr('should be more than two characters')
        } else {
            setVerCompName(false);
        }

        if(password.current.value !==
            confirmPassword.current.value) {
            setVerPassword(true);
            setPasswordErr(' password does not match')
        } else {
            setVerPassword(false);
        }

        try {
            setError('');
            setLoading(true);
            await signup(email.current.value, password.current.value);
            props.history.replace('/feed');
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);
    }

    return (
        <div className="company_form_container">
            <h2>Signup Company</h2>
            <form onSubmit={handleSubmit} className="company_form">
            {isError && <p className="error"> {error} </p>}
            <div className="inputs">
                <label>*Name:</label>
                {verCompName && <p className="error"> {compNameErr} </p>}
                <input className="input" type="text" ref={name} />
            </div>
            <div className="inputs">
                <label>*Location:</label>
                {verCompLocation && <p className="error"> {compLocationErr} </p>}
                <input className="input" type="text" ref={location} />
            </div>
            <div className="inputs">
                <label>Images:</label>
                <input className="input" type="file" ref={images} />
            </div>
            <div className="inputs">
                <label>*Email:</label>
                <input className="input" type="email" ref={email} />
            </div>
            <div className="inputs">
                <label>*Password:</label>
                <input className="input" type="password" ref={password} />
            </div>
            <div className="inputs">
                <label>*ConfirmPassword:</label>
                {verPassword && <p className="error"> {passwordErr} </p>}
                <input className="input" type="password" ref={confirmPassword} />
            </div>
            <div className="inputs textarea_field">
                <label>About company:</label>
                <textarea className="textarea" type="text" ref={about} />
            </div>
            <button type="submit" disabled={loading} className="signup_button">Submit</button>
            </form>
        </div>
    )
}

export default withRouter(Company);
