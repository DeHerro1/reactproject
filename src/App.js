import React from 'react'
import './App.css';
import Home from './components/Home/Home';
import Feed from './components/Feed/Feed';
import Signup from './components/SignUp/Signup';
import Signin from './components/Signin/Signin';
import CompanyProfile from './components/CompanyProfile/CompanyProfile';

import {Switch, Route} from 'react-router-dom';
import SearchProvider from './AuthContext';
import LandingPage from './components/LadingPage/LandingPage';
import ToSignUp from './components/ToSignup/ToSignUp';
import UserForm from './components/UserForm/UserForm';
import UserDashboard from './components/UserDashboard/UserDashboard';
import EmployerForm from './components/EmployerForm/EmployerForm';
import reducer, {initialState} from './reducer';
import SearchedJob from './components/SearchedJob/SearchedJob';

const App = () => {
    return (
        <div>
            {/* <AuthProvider> */}
            <SearchProvider initialState={initialState} reducer={reducer}>
                <Switch>
                    <Route path="/home">
                        <Feed />
                    </Route>
                    <Route path="/search">
                        <Home />
                    </Route>
                    <Route path="/tosignup">
                        <ToSignUp />
                    </Route>
                    <Route path="/searchjob">
                        <SearchedJob />
                    </Route>
                    <Route path="/employerform">
                        <EmployerForm />
                    </Route>
                    <Route path="/userdashboard">
                        <UserDashboard />
                    </Route>
                    <Route path="/userform">
                        <UserForm />
                    </Route>
                    <Route path="/signin">
                        <Signin />
                    </Route>
                    <Route path="/companyprofile">
                        <CompanyProfile />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
                </SearchProvider>
                {/* </AuthProvider> */}
        </div>
    )
}

export default App;
