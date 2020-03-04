const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/project', (req, res) => {
  res.render('project')
})
// app.get('/', (req, res) => {
//   res.send('<h1>I love EXPRESS!</h1>')
// })
app.listen(3000, () => {
  console.log('The server is finished proccessing the request and loading the response on localhost:3000')
})
