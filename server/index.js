var env = require('node-env-file');
env(__dirname + '/.env');


require('babel-core/register');
require('babel-polyfill');
require('./server');