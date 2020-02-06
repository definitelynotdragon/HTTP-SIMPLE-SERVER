
const express = require('express')
const app = express()
const koders = require('./koders')

app.get('/koders', (request, response) => {
  response.send(koders)
})

app.get('/koders/:id', (request, response) => {
  var idkoder = request.params.id
  idkoder = parseInt(idkoder)
  var kodersList = koders
  var idKoderFiltered = kodersList.find(element => {
    if (element.id === idkoder) {
      return element
    }
  })
  response.send(idKoderFiltered)
})

app.get('/koders/names/:name', (request, response) => {
  var nameKoder = request.params.name
  var kodersList = koders
  var nameKoderFiltered = kodersList.find(element => {
    if (element.name === nameKoder) {
      return element
    }
  })
  response.send(nameKoderFiltered)
})

app.listen(8080, () => {
  console.log('APP listening')
})
