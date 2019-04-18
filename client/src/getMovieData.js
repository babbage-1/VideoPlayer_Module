const getMovieData = async (id  = 1) => {
  try {
    const response = await fetch(`/videos/${id}`, {
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
    console.log(`WARNING ERROR LOOK OUT: `, err);
  }

}

export default getMovieData;