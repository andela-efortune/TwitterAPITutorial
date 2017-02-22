// We import our installed libraries from line 1 to 3
const request = require('request');
const dotenv  = require('dotenv');
const readline = require('readline');

// We create a readline interface for reading and writing user's input:
const rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
    });

rl.question('Enter a username: ', (answer) => {
    console.log(`Yay! We've got a twitter username: ${answer}`);
    rl.close();
});

