import React from 'react';
import {Container, Grid, Image, Button} from 'semantic-ui-react';
import {Header} from '../header/Header';
import {GridLayout} from '../grid-layout/GridLayout';


export const HomePage = () => {
    return (
        <Container>
            <Grid padded>
                <Header />
                <GridLayout />
            </Grid>
        </Container>
    )
}
