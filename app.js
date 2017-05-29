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

rl.question('Enter a twitter username: ', (username) => {
  /**
   * We make a GET request to fetch tweets of the user whose
   * username is supplied.
   * The get method of tweetClient takes 3 arguements, first,
   * the endpoint, second an object of options such as
   * the user's screen_name, count(the num of tweets to be returned)
   * and the last arguement is a callback function that returns an Error
   * or the results (ie tweets)
   **/
  tweetClient.get('statuses/user_timeline',
    { screen_name: username, count: 2 },
    (err, tweets) => {
      console.log(`Below are tweets from the ${username}`);
      if (!err) {
        tweets.forEach((tweet) => {
          console.log('--------------------------------');
          console.log(`Tweet: ${tweet.text}`);
          console.log(`Date: ${tweet.created_at}`);
          console.log(`By: ${tweet.user.name}`);
          console.log('--------------------------------');
        });
      } else {
        console.log(err);
      }
    });
  rl.close();
});
