import React, { useRef, useState } from 'react';
import './EmployerForm.css';
import {useHistory} from 'react-router-dom';

const EmployerForm = () => {
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const briefing = useRef();
    const website = useRef();
    const country = useRef();
    const password = useRef();
    const conPassword = useRef();
    const phoneNumber = useRef();
    const city = useRef();
    const state = useRef();
    const logoFile = useRef();
    const terms = useRef();
    const [verifyfirst, setVerifyFirst] = useState(false);
    const [verifyPass, setVerifyPass] = useState(false);
    const [verifyLast, setVerifyLast] = useState(false);
    const [verifyEmail, setVerifyEmail] = useState(false);
    const [verifyBrief, setVerifyBrief] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [firstNameErr, setFirstNameErr] = useState('');
    const [BriefErr, setBriefErr] = useState('');
    const [lastNameErr, setLastNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const history = useHistory();
    console.log(history);

    function authenticateInputs(
        first, 
        last,
        mail,
        brief,
        password,
        confirmPass
        ) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let verEmail = re.test(email.current.value);
    if(first === '') {
      setVerifyFirst(true);
      setFirstNameErr('Mandatory');
    }
    else if(first < 2) {
      setFirstNameErr('');
      setVerifyFirst(true);
      setFirstNameErr('Minimum two characters. Letters only');
    }
    else {
      setVerifyFirst(false);
    }
    
    if(brief === '') {

    }

    if(last === "") {
      setVerifyLast(true);
      setLastNameErr('Last name (mandatory)');
    }
    else if(last < 2) {
      setLastNameErr('');
      setVerifyLast(true);
      setLastNameErr('Minimum two characters. Letters only');
    }
    else {
      setVerifyLast(false);
    }
    if(password === '') {
        setVerifyPass(true);
        setPassErr('Minimum 6 characters')
    }
    if(password !== confirmPass) {
        setPassErr('');
        setVerifyPass(true);
        setPassErr('Passwords do not match')
    }
    else {
        setVerifyPass(false);
    }

    if(mail === '') {
      setVerifyEmail(true);
      setEmailErr('Email address (mandatory');
    }
    else if(verEmail === false) {
      setEmailErr('');
      setVerifyEmail(true);
      setEmailErr('Invalid. Use format: username@domain.xxx');
    }
    else {
      setVerifyEmail(false);
    }
    }


    const handleUserform = (e) => {
        e.preventDefault();
        let firstNameV = firstName.current.value;
        let lastNameV = lastName.current.value;
        let emailV = email.current.value;
        let briefV = briefing.current.value;
        let passwordV = password.current.value;
        let logoV = logoFile.current.value;
        if(firstNameV !== "" ||
            lastNameV !== "" ||
            emailV !== "" ||
            briefV !== "" ||
            passwordV !== "" ||
            logoV !== ""
        ) {
            authenticateInputs(
                firstNameV,
                lastNameV,
                emailV,
                briefV,
                passwordV,
                conPassword.current.value
                )
            history.replace('/userdashboard');
        }
        
    }

    return (
        <div className="userFormField">
            <form onSubmit={handleUserform} className="userForm">
                <h2>CREATE COMPANY PROFILE</h2>
                <div className="userDataContainer">
                    <div className="userData1">
                        <input type="text" className="userFormInput" ref={firstName} placeholder="First Name*" required />
                        <input type="text" className="userFormInput" ref={lastName} placeholder="Last Name*" required />
                        <input type="text" className="userFormInput" ref={website} placeholder="Website" required />
                        <input type="email" className="userFormInput" ref={email} placeholder="Email*" required />
                        <textarea 
                            type="text" 
                            className="userFormInput userFormarea"
                            ref={briefing}
                            required
                            placeholder="Brief intro about yourself*" />
                    </div>
                    <div className="userData2">
                    <input type="password" className="userFormInput" ref={password} required placeholder="Password*" />
                    <input type="password" className="userFormInput" ref={conPassword} required placeholder="Confirm Password*" />
                    <input type="text" className="userFormInput" ref={phoneNumber} placeholder="Phone Number" />
                    <select type="text" className="userFormSelect" ref={country}>
                        <option unselectable>Select Country</option>
                    </select>
                    <input type="text" className="userFormInput" ref={city} placeholder="City" />
                    <input type="text" className="userFormInput" ref={state} placeholder="State" />
                    <div className="pdfContainer">
                        <label >Attach Company Logo</label>
                        <input type="file" ref={logoFile} placeholder="Choose File" />
                    </div>
                        
                    </div>
                </div>
                <div className="userTermsContainer">
                    <input className="userTermsBox" type="checkbox" ref={terms} />
                    <p>I accept terms & conditions</p>
                </div>
                    <button className="employerSubmitFormBtn" type="submit">Register</button>
            </form>
       </div>
    )
}

export default EmployerForm;
