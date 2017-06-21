const snoowrap = require('snoowrap');
const config = require('./../config/config');

const client = new snoowrap(config.reddit);


/**
 * Fetch upvoted Contents
 */
client.getMe().getUpvotedContent({limit: 2})
    .then(res => {
        console.log('Upvoted Contents:');
        for (let i = 0; i < res.length; i++) {
            console.log(`${i + 1}. ${res[i].title}`);
        }
    }, err => {
        console.log(err);
    });


/**
 * Gets a list of Controversial Post
 */

client.getControversial({time: 'week', limit: 5})
    .then(res => {
        console.log('Weekly controversial posts:');
        for (let i = 0; i < res.length; i++) {
            console.log(`${i + 1}. ${res[i].title}`);
        }
    }, err => console.log(err));

/**
 * Gets a list of Controversial Post on a specific subreddit.
 */
client.getControversial('jokes',{time: 'week', limit: 5})
    .then(res => {
        console.log('Jokes weekly controversial posts:');
        for (let i = 0; i < res.length; i++) {
            console.log(`${i + 1}. ${res[i].title}`);
        }
    }, err => console.log(err));


/**
 * Get a random submission in the 'Not the onion' subreddit
 */
client.getRandomSubmission('nottheonion')
    .then(res => {
        console.log('Random Not the Onion submission:');
        console.log(res.title);
    }, err => console.log(err));

/**
 * Get Me
 */
client.getControversial('creepy', {time: 'hour', limit: 1})
    .then(res => {
        console.log('## Creepy ##');
        console.log(res);
    }, err => {
        console.log(err);
    });