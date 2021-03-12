import React from 'react';
import {Container, Grid, Image, Button} from 'semantic-ui-react';
import {Header} from '../header/Header';


export const HomePage = () => {
    return (
        <Container>
            <Grid padded>
                <Header />
            </Grid>
        </Container>
    )
}
