import React from 'react';
import {Link} from 'react-router-dom';
import instaLogo from '../../img/instagram-logo.png';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

export const Signup = () => {
    return (
        <Grid textAlign="center" verticalAlign="middle" style={{height: "100vh"}}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Segment>
                    <Header as="h1" color="purple" textAlign='center'>
                        <Image src={instaLogo} /> Instagram
                    </Header>
                    <Form size="large">
                            <Form.Input
                                fluid
                                icon="user plus"
                                iconPosition="left"
                                name="firstName"
                                placeholder="First name"
                            />
                            <Form.Input
                                fluid
                                icon="mail"
                                iconPosition="left"
                                name="login"
                                placeholder="E-mail or phone number"
                            />
                            <Form.Input 
                                fluid
                                icon="user secret"
                                iconPosition="left"
                                name="password"
                                placeholder="Password"
                                type="password"
                            />
                            <Button disabled={false} fluid type="submit" fluid color="purple" size="large">
                                Sign up
                            </Button>
                    </Form>
                </Segment>
                <Message color="purple">
                    Already a member? <Link to="/login">Sign in</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}
