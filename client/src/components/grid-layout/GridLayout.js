import React from 'react';
import {Grid, Image, Button} from 'semantic-ui-react';
import {Route, Link, useLocation} from 'react-router-dom';
import usePaperLink from '../../hooks/route/usePaperLink';

import ph1 from '../../img/ph1.jpg';
import ph2 from '../../img/ph2.jpg';
import ph3 from '../../img/ph3.jpg';
import styled from '@emotion/styled';

const objPhotos = [
    {ph: ph1, id: 0},
    {ph: ph2, id: 1},
    {ph: ph3, id: 2}
];

export const GridLayout = () => {
    const location = useLocation();
    return (
        <>
            {objPhotos.map((item, index) => {
                return (
                    <Grid.Row key={index} columns={3}>
                        <Grid.Column>
                            <Link
                                to={{
                                    pathname: `/posts/${item.id}`,
                                    state: {background: location}
                                }}
                            >
                                <Image src={item.ph}/>
                            </Link>
                        </Grid.Column>
                        <Grid.Column><Image src={item.ph}/></Grid.Column>
                        <Grid.Column><Image src={item.ph}/></Grid.Column>
                    </Grid.Row>
                );
            })}
        </>
    )
}
