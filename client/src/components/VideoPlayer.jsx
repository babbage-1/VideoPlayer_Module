import React from 'react';
// import styled from 'styled-components';

//======= STYLES =======//
const Wrapper = window.styled.div`
  margin-left: 1.5%;
  width: 100%;
`
const VideoTitle = window.styled.p`
  color: white;
  opacity: 0.8;
  text-transform: uppercase;
  font-family: "Proxima Nova", Helvetica;
  margin: 2% 0%;
`
const PlayerImageBox = window.styled.div`
  width: 90%;
  height: 54vh;
  position: relative;
  overflow: hidden;
  background: black;
`
const PlayerImage = window.styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition-property: opacity;
  transition-duration: .3s;

  :hover {
    opacity: .6;
  }
`
const VideoPlayerBox = window.styled.div`
  width: 90%;
  height: 51%;
  padding-top:  56.25%;
  position: relative;
  overflow: hidden;
`
const IFrame = window.styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border: 0;
`
const PlayButton = window.styled.img`
  width: 20%;
  position: absolute;
  top: 37%;
  left: 39%;
  z-index: 3;
  pointer-events: none;
`

//======= COMPONENT =======//
class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    }
  }

  handleImgClick() {
    this.setState({
      isClicked: true
    })
  }

  render() {
    const {video, movieTitle} = this.props;

    //"https://www.youtube.com/watch?v=UMaAF2WTK1A" --> "https://www.youtube.com/embed/UMaAF2WTK1A"
    let youtubeURL = "https://www.youtube.com/embed/";
    let vidID = video.url.split('=')[1];

    let videoDisplay;

    if (this.state.isClicked) {
      videoDisplay = (
        <VideoPlayerBox>
          <IFrame src={`${youtubeURL}${vidID}?autoplay=0&controls=0`}/>
        </VideoPlayerBox>
      )
    } else {
      videoDisplay = (
        <PlayerImageBox>
          <PlayerImage src={`http://img.youtube.com/vi/${vidID}/hqdefault.jpg`} onClick={() => {this.handleImgClick()}}/>
          <PlayButton src="https://s3-us-west-2.amazonaws.com/fec-brox/images/play-button.png"/>
        </PlayerImageBox>
      )
    }

    return (
      <Wrapper>
      {videoDisplay}
      <VideoTitle>{video.title}</VideoTitle>
      </Wrapper>
    )
  }
}

export default VideoPlayer;