$(function() {
  var APIKey = 'no key'
  var movies = []

  $('.App-header-key').text('Du har angett API-nyckel: ' + APIKey)

  //API-call to get most popular movies
  var getPopularMovies = function(key) {
    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + key + '&language=en-US&page=1&include_adult=false'
    var request = new Request(url)

    return fetch(request).then((response) => response.json())
  }

  getPopularMovies(APIKey).then((result) => {
    movies = result.results
    movies.forEach(function(movie) {
      $('.App-movies ul').append('<li>' + movie.title + '</li>')
    })
  }).catch((error) => {
    console.error('Could not fetch popular movies.')
  })
})
