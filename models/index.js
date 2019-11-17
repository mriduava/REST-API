let mongoose = require('mongoose');
mongoose.set('debug', true);
//mongoose.connect('mongodb://localhost/friends_api');
mongoose.connect('mongodb://mriduapi:Bogra2016@ds029969.mlab.com:29969/mriduapi');


mongoose.Promise = Promise;

module.exports.Friend = require('./friend'); // friend = friend.js