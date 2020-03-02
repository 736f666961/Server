// Import modules
const http = require('http');
const fs = require('fs');

// Create hostname
const hostname = '127.0.0.1';

// Create port
const port = 3000;

// Create server
const server = http.createServer((req, res) => {
    // Show what server requests
    console.log("request was made to : " + req.url);

    // When user navigate to /home
    if(req.url === '/home' || req.url === "/"){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/home.html').pipe(res);
        // res.write("index.html");
        
    }

    // When user navigate to /contact
    else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + "/contact.html").pipe(res);
    }

    // When user navigate to something else
    else{
        res.end("This page is not exists");
    }
});

// Let server listen on port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
