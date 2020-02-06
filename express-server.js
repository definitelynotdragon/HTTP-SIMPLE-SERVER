
const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('No eres Itiel')    
})
app.get('/itiel', (request, response) => {
  response.send('Toma un Itiel')    
})
app.post('/itiel', (request, response) => {
  response.send('Crea un Itiel')    
})

app.listen(8080, () => {
  console.log('APP listening')
})
