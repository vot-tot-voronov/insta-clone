import React from 'react';
import { Image, Button, Segment, Icon } from 'semantic-ui-react';
import { CommentComponent } from '../comment/CommentComponent';
import ph1 from '../../img/ph2.jpg';

const CurrentPost = () => {    
    return (
        <div className="currentPost">
            <div className="currentPost__block">
                <Image src={ph1} />
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
export default CurrentPost;