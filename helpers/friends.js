let db = require('../models');

exports.getFriends = function(req, res){
    //res.send('Hello ny friends!')
    db.Friend.find()
    .then(function(myfriends){
        res.json(myfriends);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createFriend = function(req, res){
    //res.send('This is the post route')
    //console.log(req.body);
    db.Friend.create(req.body)
    .then(function(newFriend){
        res.status(201).json(newFriend);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getFriend = function(req, res){
    db.Friend.findById(req.params.friendId)
    .then(function(foundFiend){
        res.json(foundFiend);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateFriend = function(req, res){
    db.Friend.findOneAndUpdate({_id: req.params.friendId}, req.body, {new: true})
    .then(function(editFriend){
        res.json(editFriend);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteFriend = function(req, res){
    db.Friend.remove({_id: req.params.friendId})
    .then(function(){
        res.json({message: 'One friend has been Removed.'})
    })
    .catch(function(err){
        res.send(err);
    })
}


module.exports = exports;