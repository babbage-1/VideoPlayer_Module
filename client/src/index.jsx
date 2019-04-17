import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import Synopsis from './components/Synopsis.jsx'

const MOVIE_ID = 1; //hardcode for testing; should be modifiable by some external means later on

ReactDOM.render(<App movieID={MOVIE_ID}/>, document.getElementById('video'));
ReactDOM.render(<Synopsis movieID={MOVIE_ID}/>, document.getElementById('synopsis'));
