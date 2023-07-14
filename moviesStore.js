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
<<<<<<< HEAD
  //func add the movies
  add() {
    //
=======
  add(movie) {
    this.moviesData.push(movie)
>>>>>>> 17-APIaddMovie
  }
}
module.exports = MoviesStore
// doi tuong nay kiem soat du lieu tu file json
