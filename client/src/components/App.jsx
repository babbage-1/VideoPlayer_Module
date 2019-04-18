import React from 'react';
// import styled from 'styled-components';

import VideoPlayer from './VideoPlayer.jsx';
import Carousel from './Carousel.jsx';
import sampleData from '../sampleData.js';

import getMovieData from '../getMovieData.js';

//======= STYLES =======//
const Wrapper = window.styled.div`
  background: none;
  width: 60%;
  padding: 10px;
`

//======= COMPONENT =======//

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlID: window.location.pathname
      .split('')
      .filter((char) => {
        return !isNaN(char);
      })
      .join(''),

      movieTitle: sampleData.name,
      videos: sampleData.associatedVideos,
      playerVideo: sampleData.associatedVideos[0]
    }
  }

  handleThumbClick(video) {
    this.setState({
      playerVideo: video
    })
  }

  getAssocVideos() {
   getMovieData(this.state.urlID || 1)
   .then((movieData) => {
      this.setState({
      movieTitle: movieData.name,
      videos: movieData.associatedVideos,
      playerVideo: movieData.associatedVideos[0]
    })
    });
  }

  componentDidMount() {
    this.getAssocVideos();
  }

  render() {
    const {movieTitle, playerVideo, videos} = this.state;

    return (
      <Wrapper>

        <VideoPlayer movieTitle={movieTitle} video={playerVideo}/>
        <Carousel videos={videos} handleThumbClick={this.handleThumbClick.bind(this)}/>

      </Wrapper>
    )
  }
}

export default App;