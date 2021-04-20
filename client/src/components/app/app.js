import React from 'react';
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import {HomePage} from '../home-page/HomePage';
import {Signup} from '../signup/Signup';
import {Login} from '../login/Login';
import {CurrentPost} from '../current-post/CurrentPost';
import 'semantic-ui-css/semantic.min.css';
import './app.scss';

export const App = () => {
    const location = useLocation();
    const background = location?.state?.background;
    return (
        <>
            <Switch location={background || location}>
                <Route exact path="/" component={HomePage} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                {/* <Route path="/posts/:id" children={<CurrentPost />} /> */}
                <Redirect to="/signup" />
            </Switch>
            {background && <Route path="/posts/:id" children={<CurrentPost />} />}
        </>
    )
}
