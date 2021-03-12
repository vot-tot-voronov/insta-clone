import React from 'react';
import {Grid, Image, Button} from 'semantic-ui-react';
import ph1 from '../../img/ph1.jpg';
import ph2 from '../../img/ph2.jpg';
import ph3 from '../../img/ph3.jpg';
import styled from '@emotion/styled';

const arr = [ph2, ph3, ph2, ph3, ph2, ph3];
const objPhotos = [
    {ph1: ph1, ph2: ph2, ph3: ph3},
    {ph1: ph1, ph2: ph2, ph3: ph3},
    {ph1: ph1, ph2: ph2, ph3: ph3}
]

export const GridLayout = () => {
    return (
        <>
            {objPhotos.map((item, index) => {
                return (
                    <Grid.Row key={index} columns={3}>
                        <Grid.Column><Image src={item.ph1}/></Grid.Column>
                        <Grid.Column><Image src={item.ph3}/></Grid.Column>
                        <Grid.Column><Image src={item.ph2}/></Grid.Column>
                    </Grid.Row>
                );
            })}
        </>
    )
}
