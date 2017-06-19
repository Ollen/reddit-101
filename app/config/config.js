require('dotenv').config({path: __dirname + '/.env'});

const reddit = {
    userAgent: 'dalebot',
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD  
};

module.exports = {
    reddit
};