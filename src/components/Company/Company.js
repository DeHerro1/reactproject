import React, {useRef, useState} from 'react';
import './Company.css';
import { withRouter } from 'react-router-dom';
import { Email } from '@material-ui/icons';

const Company = (props) => {
    const name = useRef();
    const location = useRef();
    const images = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const about = useRef();
    const email = useRef();

    const [error, setError] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/home');
        if(name.current.value === "" ||
        location.current.value === "" ||
        password.current.value === "" ||
        email.current.value === "" ||
        confirmPassword.current.value === "" ||
        about.current.value === "")  {
            setError(true) 
            setIsError('Input all value')
        }
        else {
            setError(false);
            // Send data
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="job_form">
            <h2>Signup Company</h2>
            {isError && <p> {error} </p>}
            <input type="text" ref={name} placeholder="Company name" />
            <input type="text" ref={location} placeholder="Company location" />
            <input type="email" ref={location} placeholder="Company email" />
            <input type="fiie" ref={images} placeholder="company Images" />
            <input type="password" ref={password} placeholder="passwword" />
            <input type="password" ref={confirmPassword} placeholder="Confirm passwword" />
            <textarea type="text" ref={about} placeholder="Brief summary about job position, company, salary, 
            benefit and work life" />
            <button>Submit</button>
            </form>
        </div>
    )
}

export default withRouter(Company);
