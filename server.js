const http = require('http')

const server = http.createServer((request, response)=>{
    
    console.log('REQUEST :D')
    console.log('headers', request.url)
    console.log('method: ', request.method)

    if (request.url === '/itiel'){
        if (request.method === 'GET')
        response.write('Toma un itiel')
    } 
    if (request.method === 'POST') {
        response.write('Creando un itiel')
    }
    else {
        response.write(' NO ERES ITIEL')
    }
        response.end()
})

server.listen(8080, () => {
    console.log('Server is listening in localhost:8080')
})