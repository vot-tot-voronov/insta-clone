import React from 'react';
import {Grid, Image, Button} from 'semantic-ui-react';
import styled from '@emotion/styled';
import userLogo from '../../img/user-logo.jpg';

let UserName = styled.h2({
    display: 'inline-block',
    marginRight: '1rem'
});

let Counters = styled.p({
    display: 'inline-block',
    marginRight: '2rem',
    marginTop: '1rem'
});
let Numb = styled.span({
    fontWeight: '700',
    marginRight: '.5rem'
});

let Paragraph = styled.p({
    fontWeight: '700'
});

export const Header = () => {
    return (
        <>
            <Grid.Row>
                <Grid.Column width={4}></Grid.Column>
                <Grid.Column width={2}>
                    <Image src={userLogo} size='tiny' circular/>
                </Grid.Column>
                <Grid.Column width={10}>
                    <div>
                        <UserName>vot-tot-voronov</UserName>
                        <Button color="blue" style={{marginRight: '1rem'}}>Follow</Button>
                        <Button color="blue" icon="angle down" />
                    </div>
                    <div>
                        <Counters>
                            <Numb>1,048</Numb>
                            posts
                        </Counters>
                        <Counters>
                            <Numb>13,5k</Numb>
                            followers
                        </Counters>
                        <Counters>
                            <Numb>22</Numb>
                            following
                        </Counters>
                    </div>
                    <div>
                        <Paragraph>Front-end developer from Russia</Paragraph>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </>
    )
}
