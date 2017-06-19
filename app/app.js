const snoowrap = require('snoowrap');
const config = require('./config/config');

const client = new snoowrap(config.reddit);

client.getMe().getUpvotedContent()
    .then(res => {
        console.log(res[0]);
    }, err => {
        console.log(err);
    });