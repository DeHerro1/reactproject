import React from 'react';
import Nav from '../Nav/Nav';
import { useAuth } from '../../AuthContext';

const Profile = () => {
    const { currentUser } = useAuth();
    return (
        <div>
            <p>Profile</p>
            <p> {currentUser} </p>
            <Nav />
        </div>
    )
}

export default Profile;