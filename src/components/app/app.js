import React from 'react';

import { Container } from 'react-bootstrap'
import './app.scss'

import Signup from '../signup/signup'

export const App = () => {
    return (
        <>
        <Container 
            className="d-flex align-items-center justify-content-center"
            style={{minHeight: "100vh"}}>
            <div className="w-100" style={{maxWidth: "400px"}}>
                <Signup />
            </div>
        </Container>
            
        </>
    )
}