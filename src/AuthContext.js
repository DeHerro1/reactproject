import React, {useContext, useEffect, useReducer, useRef, useState} from 'react'
import { auth } from './firebase';

const AuthContext = React.createContext();

export const SearchContext = React.createContext();

const SearchProvider = ({reducer, initialState, children}) => (
    <SearchContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </SearchContext.Provider>
)

export const useStateValue = () => useContext(SearchContext);

export default SearchProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}


// const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState();

//     function signup(email, password) {
//        return auth.createUserWithEmailAndPassword(email, password);
//     }

//     function signin(email, password) {
//         return auth.signInWithEmailAndPassword(email, password)
//     }

//     useEffect(() => {
//        const unsubscribe = auth.onAuthStateChanged(user => {
//         setCurrentUser(user)
//     })
//     return unsubscribe
//     }, [])

//     const value = {
//         currentUser,
//         signup,
//         signin
//     }
    
//     return (
//         <AuthContext.Provider value ={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthProvider;
