let express = require('express')
let app = express()
let MoviesStore = require('./moviesStore')
let moviesStore = new MoviesStore()
let bodyParser = require('body-parser')
// console.log(dataStore)

//khi POST method dùng bodyParser để lấy rqequest body
app.use(
  bodyParser.json({
    type: 'application/json',
  })
)
app.get('/movies', (req, res) => {
  return res.send(moviesStore)
})
app.get('/', (req, res) => {
  return res.redirect('/movies')
})
/**
 * param :/movies/the game
 */
app.get('/movies/:title', (req, res) => {
  console.log(req.params)
  //   console.log(res.statusCode)
  const foundMovies = moviesStore.find(req.params.title)
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
app.get('/movies/:title/:year', (req, res) => {
  //   res.statusCode = 402
  //   console.log(req.params) lê quang dũng
  //   console.log(res.statusCode)
  let foundMovies = moviesStore.find(req.params.title)
  if (foundMovies.length < 1) {
    return res.send({ message: 'movies not found' })
  }

  return res.send({
    message: 'founded movie',
    payload: foundMovies.pop(),
  })
})
/*tạo func kiểm tra các nói dung người dùng uplen
 *
 */
app.put('/movies/:title', (req, res) => {
  if (!moviesStore.update(req.params.title, req.body)) {
    res.statusCode = 500
  } //intener server erorr moi lii nao do khong xac dinh
  return res.send({
    message: 'updated movie successfully',
  })
})
app.post('/movies', (req, res) => {
  //kiem tra noi dung nguoi dung gui post request len khong dung yeu cau
  if (!req.body.name || req.body.name.trim().length < 1) {
    res.statusCode = 400 //status code change
    return res.send({
      message: 'missing or invalid title',
    })
  }
  //kiem tra movie có chứa hay không và thông báo
  if (moviesStore.has(req.body.name)) {
    res.statusCode = 400
    return res.send({
      message: 'Movie added exited',
    })
  }
  moviesStore.add(req.body)
  console.log('🚀 ~ log:', req.body)
  return res.send({
    message: 'Movie add succesfully', //return message
  })
})
/**
 * delete movie
 */
app.delete('/movies/:title', (req, res) => {
  /**
   * check xem movie co ton tai hay chua
   * neu chua co  thi message
   * neu co roi thi xoa va message
   */
  if (!moviesStore.has(req.params.title)) {
    res.statusCode = 404
    return res.send({
      message: 'Movie not found',
    })
  }
  moviesStore.remove(req.params.title)
  return res.send({
    message: 'Delete moive succesfully',
  })
})

app.listen(3000, () => {
  console.log('server listen at port : 127.0.0.1:3000')
})
module.exports = app
