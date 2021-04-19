import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import {HomePage} from '../home-page/HomePage';
import {Signup} from '../signup/Signup';
import {Login} from '../login/Login';
import CurrentPost from '../current-post';
import 'semantic-ui-css/semantic.min.css';
import './app.scss';

export const App = () => {
    const location = useLocation();
    const background = location?.state?.background;
    return (
        <>
            <Switch location={background || location}>
                <Route exact path="/" children={<HomePage />} />
                <Route path="/signup" children={Signup} />
                <Route path="/login" children={Login} />
                <Route path="/current" children={CurrentPost} />
                <Route path="/user" children={HomePage} />
            </Switch>
            {background && <Route path="/posts/:id" children={<CurrentPost />} />}
        </>
    )
}
