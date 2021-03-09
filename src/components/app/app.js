import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {HomePage} from '../home-page/HomePage'
import {Signup} from '../signup/Signup';
import {Login} from '../login/Login';
import 'semantic-ui-css/semantic.min.css';

export const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </>
    )
}
