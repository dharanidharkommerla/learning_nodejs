let http = require('http');
let server = http.createServer((request, respone)=>{
    respone.write(`<h1>This is Nodejs Server code app</h1>`);
    respone.end();
});

server.listen(7600);

