import React, { useRef, useState } from 'react';
import './UserForm.css';
import {useHistory} from 'react-router-dom';

const UserForm = () => {
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const briefing = useRef();
    const dateOfBirth = useRef();
    const age = useRef();
    const passingYear = useRef();
    const stream = useRef();
    const qualification = useRef();
    const password = useRef();
    const conPassword = useRef();
    const phoneNumber = useRef();
    const address = useRef();
    const city = useRef();
    const state = useRef();
    const skills = useRef();
    const designation = useRef();
    const pdfFile = useRef();
    const terms = useRef();
    const [verifyfirst, setVerifyFirst] = useState(false);
    const [verifyPass, setVerifyPass] = useState(false);
    const [verifyLast, setVerifyLast] = useState(false);
    const [verifyEmail, setVerifyEmail] = useState(false);
    const [verifyPhone, setVerifyPhone] = useState(false);
    const [verifyBrief, setVerifyBrief] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [skillsErr, setSkillsErr] = useState(false);
    const [firstNameErr, setFirstNameErr] = useState('');
    const [BriefErr, setBriefErr] = useState('');
    const [lastNameErr, setLastNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [phoneErr, setPhoneErr] = useState('');
    const history = useHistory();
    console.log(history);

    function authenticateInputs(
        first, 
        last,
        mail,
        brief,
        password,
        confirmPass,
        phone,
        skills,
        pdfFile,
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

    if(phone === '') {
      setVerifyPhone(true);
      setPhoneErr('Phone number (mandatory)');
    }
    else if(phone < 7 ) {
      setPhoneErr('')
      setVerifyPhone(true);
      setPhoneErr('Enter a valid phone number');
    }
    else {
      setVerifyPhone(false);
    }
    }


    const handleUserform = (e) => {
        e.preventDefault();
        let firstNameV = firstName.current.value;
        let lastNameV = lastName.current.value;
        let emailV = email.current.value;
        let briefV = briefing.current.value;
        let passwordV = password.current.value;
        let pdfV = pdfFile.current.value;
        let skillsV = skills.current.value;
        if(firstNameV !== "" ||
            lastNameV !== "" ||
            emailV !== "" ||
            briefV !== "" ||
            passwordV !== "" ||
            pdfV !== "" ||
            skillsV !== ""
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
                <h2>CREATE YOUR PROFILE</h2>
                <div className="userDataContainer">
                    <div className="userData1">
                        <input type="text" className="userFormInput" ref={firstName} placeholder="First Name*" required />
                        <input type="text" className="userFormInput" ref={lastName} placeholder="Last Name*" required />
                        <input type="text" className="userFormInput" ref={email} placeholder="Email*" required />
                        <textarea type="text" className="userFormInput userFormarea" ref={briefing} required placeholder="Brief intro about yourself*" />
                        <div>
                            <label>Date of Birth</label>
                            <input type="date" className="userFormInput" ref={dateOfBirth} />
                            <input type="text" readOnly className="userFormInput" ref={age} placeholder="Age" />
                            <div>
                                <label>Passing Year</label>
                                <input type="date" className="userFormInput" ref={passingYear} placeholder="Enter Name*" />
                            </div>
                            <input type="text" className="userFormInput" ref={stream} placeholder="Stream" />
                        </div>
                        
                        <select className="userFormSelect" value={qualification} placeholder="Highest Qualification">
                            <option unselectable>Highest Qualification</option>
                            <option>Degree</option>
                        </select>
                    </div>
                    <div className="userData1">
                    <input type="password" className="userFormInput" ref={password} required placeholder="Password*" />
                    <input type="password" className="userFormInput" ref={conPassword} required placeholder="Confirm Password*" />
                    <input type="text" className="userFormInput" ref={phoneNumber} placeholder="Phone Number" />
                    <textarea type="text" className="userFormInput userFormarea" ref={address} placeholder="Address" />
                    <input type="text" className="userFormInput" ref={city} placeholder="City" />
                    <input type="text" className="userFormInput" ref={state} placeholder="State" />
                    <input type="text" className="userFormInput" ref={skills} placeholder="Enter Skills" />
                    <input type="text" className="userFormInput" ref={designation} placeholder="Designation" />
                    <div className="pdfContainer">
                        <label className="pdfLabel">File Format PDF Only!</label>
                        <input type="file" className="userFormInput" ref={pdfFile} placeholder="Choose File" />
                    </div>
                        
                    </div>
                </div>
                <div className="userTermsContainer">
                    <input className="userTermsBox" type="checkbox" ref={terms} />
                    <p>I accept terms & conditions</p>
                </div>
                    <button className="userSubmitFormBtn" type="submit">Register</button>
            </form>
       </div>
    )
}

export default UserForm;
