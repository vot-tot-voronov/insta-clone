import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import avatar from '../../img/avatar.png';

export const CommentComponent = () => (
  <Comment.Group size="massive">
    <Header as='h3' dividing>
      Comments
    </Header>

    <Comment>
      <Comment.Avatar src={avatar} />
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group size="massive">
        <Comment>
          <Comment.Avatar src={avatar} />
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Form reply>
      <Form.TextArea placeholder="Add a comment"/>
      <Button size="large" content='Add Reply' labelPosition='left' icon='edit' color="purple" />
    </Form>
  </Comment.Group>
);
