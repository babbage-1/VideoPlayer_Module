import React from 'react';

//====== STYLES ======//
const Wrapper = window.styled.div`
  background-color: hsl(0, 0%, 20%);
  display: block;
  padding: 20px 200px;
  line-height: 4;
`

const MovieTitle = window.styled.p`
  font-family: "Proxima Nova", Helvetica;
  color: white;
  text-align: center;
`

const MovieSynopsis = window.styled.p`
  font-family: "Times New Roman", Times;
  font-size: 1.5em;
  color: white;
  line-height: 1;
  text-align: center;
`

const ReadFull = window.styled.p`
  color: hsl(208, 91%, 63%);
  font-family: "Proxima Nova", Helvetica;
  text-align: center;
  text-transform: uppercase;
`

class Synopsis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieTitle: 'REALLY GOOD MOVIE'
    }
  }

  getMovieData() {
    let urlID = window.location.pathname
    .split('')
    .filter((char) => {
      return !isNaN(char);
    })
    .join('');

    return fetch(`/videos/${urlID || 1}`, {
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let videoData = data[0];
      this.setState({
        movieTitle: videoData.name
      })
    })
  }

  componentDidMount(){
    this.getMovieData()
  }

  render() {
    return (
      <Wrapper>
        <MovieTitle>{this.state.movieTitle} (1968)</MovieTitle>
        <MovieSynopsis>
          <i>An imposing black structure provides a connection between the past and the future in this enigmatic adaptation of a short story by revered sci-fi author Arthur C. Clarke.</i>
          </MovieSynopsis>
        <ReadFull>read full synopsis</ReadFull>
      </Wrapper>
    )
  }
}

export default Synopsis;