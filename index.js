let express = require('express')
let app = express()
let MoviesStore = require('./moviesStore')
let moviesStore = new MoviesStore()
// console.log(dataStore)

app.get('/movies', (req, res) => {
  return res.send(moviesStore)
})
app.get('/', (req, res) => {
  return res.redirect('/movies')
})
//param :/movies/the game
app.get('/movies/:name/', (req, res) => {
  console.log(req.params)
  //   console.log(res.statusCode)
  const foundMovies = moviesStore.find(req.params.name)
  if (foundMovies.length < 1) {
    // res.statusCode = 404
    return res.send({
      message: 'movie not found',
    })
  }

  return res.send({
    message: 'founded movie',
    payload: foundMovies.pop(),
  })
})
app.get('/movies/:name/:year', (req, res) => {
  //   res.statusCode = 402
  //   console.log(req.params)
  //   console.log(res.statusCode)
  let foundMovies = moviesStore.find(req.params.name)
  if (foundMovies.length < 1) {
    return res.send({ message: 'movies not found' })
  }

  return res.send({
    message: 'founded movie',
    payload: foundMovies.pop(),
  })
})
//
app.listen(3000, () => {
  console.log('server listen at port : 127.0.0.1:3000')
})
module.exports = app
