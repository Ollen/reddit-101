const snoowrap = require('snoowrap');
const config = require('./../config/config');

const client = new snoowrap(config.reddit);


/**
 * Fetch upvoted Contents
 */
client.getMe().getUpvotedContent({limit: 2})
    .then(res => {
        console.log(res);
    }, err => {
        console.log(err);
    });

