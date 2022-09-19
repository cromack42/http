const http = require ('http');

const server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html'});
    if(request.url === '/'){
        response.write('<h1> Bem vindo ao seu primeiro servidor. </h1>')
        } else if(request.url === "/bemvindo"){
            response.write('<h1>Bem vindo ao campinho digital</h1>');
        }else{
            response.write('<h1> Página não encontrada!</h1>')
        }
        response.end();
    });
    server.listen(3000, ()=>{
        console.log('Servidor está rodando na porta 3000!')
    })