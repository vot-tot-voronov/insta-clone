import React from 'react';
import {Link} from 'react-router-dom';
import instaLogo from '../../img/instagram-logo.png';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

export const Login = () => {
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
                                icon="user"
                                iconPosition="left"
                                name="login"
                                placeholder="E-mail, phone number or username"
                            />
                            <Form.Input 
                                fluid
                                icon="lock"
                                iconPosition="left"
                                name="password"
                                placeholder="Password"
                                type="password"
                            />
                            <Button disabled={false} fluid type="submit" fluid color="purple" size="large">
                                Log in
                            </Button>
                    </Form>
                </Segment>
                <Message color="purple">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}
