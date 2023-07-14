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
}
module.exports = MoviesStore
// doi tuong nay kiem soat du lieu tu file json
