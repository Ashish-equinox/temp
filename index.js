const fs = require('fs');

const path = require('path');

// never hard code path name of file as OS varies for users

// eg:- fs.readFile('./files/starter.txt')

fs.readFile(path.join(__dirname, 'files' , 'starter.txt'), 'utf-8', (err,data) => {
    if(err) throw err;
    console.log(data);
})

// exit on uncaught errors(documentation)

process.on('uncaughtException' , err => {
    console.error('There was an uncaught error: ${err}');
    process.exit(1);
})