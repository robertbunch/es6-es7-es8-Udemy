const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300/`;

const getMovieData = movieTitle => {
  return new Promise((resolve, reject) => {
    fetch(apiUrl + movieTitle)
    .then(res => res.json())
    .then((data) => {
    	console.log(data)
    	resolve(data.results)
    })
    .catch((err) => {
    	console.log(err)
    	reject(err)
    })
  })
}
 

document.getElementById('movie-form').addEventListener('submit', e => {
  e.preventDefault()
  const movieTitle = document.getElementById('movie-title').value
  const movieData = getMovieData(movieTitle)
  movieData.then(data => {
    document.getElementById('movies').innerHTML = `<img src="${imgUrl}${data[0].poster_path}" alt=""/>`
  }).catch(err => console.log("word",err))
})