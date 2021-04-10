import React, {useRef} from 'react';
import { withRouter } from 'react-router';
import './Individual.css';
import { useAuth } from '../../AuthContext';

const Individual = (props) => {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const { signup } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email.current.value, password.current.value);
        return (
            props.history.push('/home')
        )
    }

    return (
        <form onSubmit={handleSubmit} className="job_form">
            <h2>Job Seeker</h2>
            <input type="text" ref={name} placeholder="full name" />
            <input type="email" ref={email} placeholder="email" />
            <input type="password" ref={password} placeholder="passwword" />
            <input type="password" ref={confirmPassword} placeholder="confirm passwword" />
            <label>Upload CV</label>
            <input type="file" />
            <button>Submit</button>
        </form>
    )
}

export default withRouter(Individual);
