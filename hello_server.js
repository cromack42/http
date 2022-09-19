const http = require ('http');

const server = http.createServer((request, response)=>{
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write('<h1>Hello Campinho!!</h1>');
    response.end();
});
server.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000!')
});