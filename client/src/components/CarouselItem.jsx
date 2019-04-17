import React from 'react';
// import styled from 'styled-components';

//======= STYLES =======//
const Wrapper = window.styled.div`
  position: relative;
  top: 0;
`
const ThumbImage = window.styled.img`
  width: 100%;

  :hover {
    opacity: .3;
  }
`
const TitleOverlay = window.styled.div`
  visibility: ${(props) => props.vis};
  font-family: "Proxima Nova", Helvetica;
  font-size: 0.9em;
  text-transform: uppercase;
  color: white;
  position: absolute;
  padding: 0 0.5em;
  top: 0.5em;
  z-index: 6;
  pointer-events: none;
`

//======= COMPONENT =======//
class CarouselItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dispTitle: false
    }
  }

  getThumbFromUrl(url) {
    let vidID = url.split('=')[1];
    return `http://img.youtube.com/vi/${vidID}/mqdefault.jpg`;
  }

  render(){
    const {
      handleThumbClick,
      video
    } = this.props;

    return (
      <Wrapper>
        <ThumbImage src={this.getThumbFromUrl(video.url)} onClick={() => {
          handleThumbClick(video);
        }} onMouseEnter={() => {
          this.setState({dispTitle: true})
        }} onMouseLeave={() => {
          this.setState({dispTitle: false})
        }}/>
        <TitleOverlay vis={this.state.dispTitle ? 'visible' : 'hidden'}>
          <b>{video.title}</b>
        </TitleOverlay>
      </Wrapper>
    )
  }
}

export default CarouselItem;