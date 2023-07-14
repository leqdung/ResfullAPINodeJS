let express = require('express')
let app = express()
const dataStore = require('./dataStore.json')
// console.log(dataStore)

app.get('/movies', (req, res) => {
  return res.send(dataStore)
})
app.get('/', (req, res) => {
  return res.redirect('/movies')
})
//param :/movies/the game
app.get('/movies/:title/:year', (req, res) => {
  console.log(req.params)
  return res.send(req.params)
})
//
app.listen(3000, () => {
  console.log('server listen at port : 127.0.0.1:3000')
})
module.exports = app
