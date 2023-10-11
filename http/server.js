//first web server

const http = require("http")

let server = http.createServer(function(req,res){
    
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write('<h1>First Web Server</h1>');

    res.end();
})
server.listen(8000)