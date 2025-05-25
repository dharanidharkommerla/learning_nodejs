let fs = require('fs');
let http = require('http');

let server = http.createServer(function(req, res){
    res.write('Hello, World!')
    // read the file with fs
    fs.readFile('city.json','utf-8',function(err, data){
        if(err) throw err;
        // return the data of the file
        res.write(data);
        res.end();
    });
});

server.listen(6300);