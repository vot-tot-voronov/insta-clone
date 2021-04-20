import React from 'react';
import {useHistory, useParams } from 'react-router-dom';
import { Image, Button, Segment, Icon } from 'semantic-ui-react';
import { CommentComponent } from '../comment/CommentComponent';
import ph1 from '../../img/ph1.jpg';
import ph2 from '../../img/ph2.jpg';
import ph3 from '../../img/ph3.jpg';

const objPhotos = [
    {ph: ph1, id: 0},
    {ph: ph2, id: 1},
    {ph: ph3, id: 2}
];

export const CurrentPost = () => {  
    const history = useHistory();
    const {id} = useParams();
    console.log(id)
    const image = objPhotos[parseInt(id, 10)];
    const number = parseInt(id, 10);

    const back = e => {
        e.stopPropagation();
        history.goBack()
    }

    return (
        <div onClick={back} className="currentPost">
            <div className="currentPost__block">
                <Image src={image.ph} />
                <Segment >
                    <div className="currentPost__tools">
                        <Button size="large" icon labelPosition="left" color="red">
                            <Icon name="like"/>
                            135 users like this post
                        </Button>
                        <Button size="large" icon="tag" color="grey"/>
                    </div>
                </Segment>
                <CommentComponent />
            </div>
        </div>
    )
};