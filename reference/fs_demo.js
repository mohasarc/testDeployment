const fs = require('fs');
const path = require('path');

// create a folder // there are two version of those fcn syncronous and a syncronous
                   // the asycronous ones take a call back fcn since the code will keep on
                   // excuting. on the other hand the syncrounous one doesn't need a call back fcn since
                   // since it the code will wait till te process is done
// fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//     if (err) throw err;
//     console.log("folder created");
// });

// create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world', err =>{
    if (err) throw err;
    console.log('file written to...');
})

// append
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 
    ' I love node js'
    , err =>{
    if (err) throw err;
    console.log('file appended to...');
})

// read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>{
    if (err) throw err;
    console.log(data);
})

// rename file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloWorld.txt'),
    err => {
        if (err) throw err;
        console.log("file renamed...")
    })