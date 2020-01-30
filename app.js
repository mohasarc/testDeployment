// // const Person = require("./person");
// // const person1 = new Person("Moha", 20);

// // console.log(person1.greating());

// const Logger = require('./logger');

// const logger = new Logger();

// // logger.on('message', (data) => console.log('Called Listener', data));

// logger.toExcute((data) => console.log('Called Listener', data));

// logger.log('Hello World');
// logger.log('Hello');
// logger.log('Hello World another message');

//----------------------------------------------------//
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if(req.url == '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) =>{
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }
    // if(req.url == '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'content-Type' : 'text/html' });
    //         res.end(content);
    //     });
    // }
    // if(req.url == '/api/users'){
    //     const users = [
    //         {name : "MOH", age : 34},
    //         {name : "YEG", age : 34}
    //     ];

    //     res.writeHead(200, {'Content-Type' : 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    //---^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ NOT SO EFFICIENT---//
    
    // Build file path
    let filePath = path.join(
        __dirname, 
        'public', 
        req.url == '/' ? 'index.html' : req.url);

        // Extention of file
        let extname = path.extname(filePath);

        // Initial content type 
        let contentType = 'text/html';

        // check ext end set content type
        switch(extname){
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case 'jpg' :
                contentType = 'image/jpg';
                break;
        }

        // read file
        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code == 'ENOENT'){ // means page not found
                    fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                        if (err) throw err;
                        res.writeHead(200, { "Content-Type" : 'text/html'});
                        res.end(content, 'utf8')
                    });
                } else {
                    // Some server error mostly 500
                    res.end(`server error: ${err.code}`);
                }
            } else {
                // successful response 
                res.writeHead(200, { "Content-Type" : contentType });
                res.end(content, 'utf8');
            }
        })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));