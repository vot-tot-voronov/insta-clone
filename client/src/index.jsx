import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {render} from 'react-dom';

import {App} from './components/app/app';
const PostsPage = () => <Router><App /></Router>;

render(<PostsPage />, document.getElementById('root'))