let mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/friends_api');

mongoose.Promise = Promise;

module.exports.Friend = require('./friend'); // friend = friend.js