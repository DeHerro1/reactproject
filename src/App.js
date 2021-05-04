import React from 'react'
import './App.css';
import Home from './components/Home/Home';
import Feed from './components/Feed/Feed';
import Signup from './components/SignUp/Signup';
import Signin from './components/Signin/Signin';
import CompanyProfile from './components/CompanyProfile/CompanyProfile';

import {Switch, Route} from 'react-router-dom';
import AuthProvider from './AuthContext';


const App = () => {
    return (
        <div>
            <AuthProvider>
            <Switch>
                <Route path="/home">
                    <Feed />
                </Route>
                <Route path="/search">
                    <Home />
                </Route>
                {/* <Route path="/Profile">
                    <Profile />
                </Route> */}
                <Route path="/signin">
                    <Signin />
                </Route>
                <Route path="/companyprofile">
                    <CompanyProfile />
                </Route>
                <Route path="/">
                    <Signup />
                </Route>
            </Switch>
            </AuthProvider>
        </div>
    )
}

export default App;
