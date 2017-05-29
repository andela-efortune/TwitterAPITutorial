// We import our installed libraries from line 1 to 3
const Tweet = require('twitter');
const dotenv  = require('dotenv').config(); // Call the config function of dotenv
const readline = require('readline');

/**
 * We create a new instance of Tweet which we required
 * above passing in our secret information as an object
 * and using process.env to fetch the actual value from
 * where it was set in our environment variable (.env file)
 */
const tweetClient = new Tweet({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

// We create a readline interface for reading and writing user's input:
const rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
    });

rl.question('Enter a username: ', (answer) => {
    console.log(`Yay! We've got a twitter username: ${answer}`);
    rl.close();
});
