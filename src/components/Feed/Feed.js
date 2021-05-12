import React from 'react';
import './Feed.css';
import Nav from '../Nav/Nav';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const Feed = () => {
    let { setIsSignUp } = useAuth();
    let history = useHistory();
    const handleToSignup = () => {
        setIsSignUp(false);
        history.push('/');
    }
    return (
        <div>
            <button onClick={handleToSignup}> To signup </button>
            <p>Feeds</p>
            <Nav />
        </div>
    )
}

export default Feed;
