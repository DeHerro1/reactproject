import React from 'react'
import './ToSignUp.css';
import ToSign from './ToSign/ToSign';
import { Link } from 'react-router-dom';
import HouseTwoTone from '@material-ui/icons/HomeWorkTwoTone';
import ImageSearch from '@material-ui/icons/SearchRounded';

const ToSignUp = () => {
    return (
        <div className="toSignUp">
            <p>Choose account type</p>
            <div className="registerOptions">
                <Link to="/userform"><ToSign Sign={ImageSearch} text="USER REGISTRATION" /></Link>
                <Link to="/employerform"><ToSign Sign={HouseTwoTone} text="EMPLOYER REGISTRATION" /></Link>
            </div>
            
        </div>
    )
}

export default ToSignUp;
