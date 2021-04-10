import React from 'react';
import { Image, Button, Segment, Form, TextArea, Icon } from 'semantic-ui-react';
import ph1 from '../../img/ph1.jpg';


export const CurrentPost = () => {
    return (
        <div className="currentPost">
            <div className="currentPost__block">
                <Image size="large" src={ph1} />
                <Segment >
                    <div className="currentPost__tools">
                        <Button size="large" icon labelPosition="left" color="red">
                            <Icon name="like"/>
                            135 users like this post
                        </Button>
                        <Button size="large" icon="tag" color="grey"/>
                    </div>
                </Segment>
                <Segment>
                    <Form>
                        <TextArea placeholder='Write comment here...' />
                        <div className="currentPost__btn currentPost__btn--send">
                            <Button size="large" color="purple">Send</Button>
                        </div>
                    </Form>
                </Segment>
            </div>
        </div>
    )
}
