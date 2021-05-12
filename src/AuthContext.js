import React, {useContext, useEffect, useState} from 'react'
import { auth } from './firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [isSignedUp, setIsSignUp] = useState(false);

    function signup(email, password) {
       return auth.createUserWithEmailAndPassword(email, password);
    }

    function signin(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
    return unsubscribe
    }, [])

    useEffect(() => {
        setIsSignUp(!!currentUser);
     }, [currentUser])

    const value = {
        currentUser,
        setIsSignUp,
        isSignedUp,
        signup,
        signin
    }
    
    return (
        <AuthContext.Provider value ={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
