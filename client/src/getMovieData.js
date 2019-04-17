const getMovieData = async (id  = 1) => {
  try {
    const response = await fetch(`http://localhost:3333/associatedVideos?movieID=${id}`, {
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        "Cache-Control":"no-cache"
      }
    })

    const movieData = await response.json();
    console.log(`movie data: `, movieData[0]);
    return movieData[0];
  } catch (err) {
    alert(`WARNING ERROR LOOK OUT: `, err);
  }

}

export default getMovieData;