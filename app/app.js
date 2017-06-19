const snoowrap = require('snoowrap');
const config = require('./config/config');

const client = new snoowrap(config.reddit);

