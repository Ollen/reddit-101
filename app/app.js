const snoowrap = require('snoowrap');
const config = require('./config/config');

const client = new snoowrap(config.reddit);


client.getTop('gaming', {limit: 3, time: 'hour'})
    .then(res => {
        console.log(res);
    });