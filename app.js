const express = require('express')
const data = require('./public/js/data.json')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.locals.fewdProjects = data.projects
  res.locals.fsjsProjects = data.fsjsProjects
  res.render('index', {})
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/project/:devType/:project', (req, res, next) => {
  const type = 'projects'
  if (data[type][req.params.project - 1]) {
    res.locals.project = data[type][req.params.project - 1]
    res.render('project', {})
  } else {
    const err = new Error('Oh Noes! Seems that project does not exist... YET!')
    err.status = 404
    next(err)
  }
})

app.use((req, res, next) => {
  const err = new Error('Oh Noes! Seems that page was not found!')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  console.log(err.message, err.status)
  res.render('error')
})
app.listen(3000, () => {
  console.log('The server is finished proccessing the request and loading the response on localhost:3000')
})
