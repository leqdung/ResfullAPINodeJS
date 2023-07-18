class MoviesStore {
  constructor() {
    this.moviesData = require('./dataStore.json')
  }
  getAll() {
    return this.moviesData
  }
  find(name) {
    return this.moviesData.filter((m) => m.name === name)
  }

  add(movie) {
    this.moviesData.push(movie)
  }
  has(title) {
    let hasmovie = this.find(title)
    return hasmovie.length > 0
  }

  update(title, newInfo) {
    // check movie with title exited?
    let movies = this.find(title)
    if (movies.length < 1) {
      return false
    }
    let oldMovie = movies.pop()
    let newMovie = Object.assign(oldMovie, newInfo)
    //if 0 ,return failse
    //neu co 1
    let oldMovieList = this.moviesData.title((m) => m.title !== title)
    this.moviesData = [...oldMovieList, newMovie]
    //copy oldmovie paste vao newmovie

    return true
  }
}
module.exports = MoviesStore
// doi tuong nay kiem soat du lieu tu file json
