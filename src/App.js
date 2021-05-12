import React from 'react'
import './App.css';
import Home from './components/Home/index';
import Feed from './components/Feed/Feed';
import Signup from './components/Signup/index';
import Signin from './components/Signin/index';
import Profile from './components/Profile/Profile';
import Company from './components/Company/Company';

import {Switch, Route} from 'react-router-dom';
import AuthProvider from './AuthContext';


const App = () => {
    return (
        <div>
            <AuthProvider>
            <Switch>
                <Route path="/feed">
                    <Feed />
                </Route>
                <Route path="/search">
                    <Home />
                </Route>
                <Route path="/Profile">
                    <Profile />
                </Route>
                <Route path="/signin">
                    <Signin />
                </Route>
                <Route path="/company">
                    <Company />
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
