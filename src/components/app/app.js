import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AuthProvider } from '../../context/AuthContext'

import { Container } from 'react-bootstrap'
import './app.scss'

import PrivateRoute from '../private-route/private-route'
import Signup from '../signup/signup'
import Dashboard from '../dashboard/dashboard'
import Login from '../login/login'

export const App = () => {
    return (
        <>
            <Container 
                className="d-flex align-items-center justify-content-center"
                style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <Router>
                        <AuthProvider>
                            <Switch>
                                <PrivateRoute exact path="/" component={Dashboard} />
                                <Route path="/signup" component={Signup} />
                                <Route path="/login" component={Login} />
                            </Switch>
                        </AuthProvider>
                    </Router>
                </div>
            </Container>
        </>
    )
}