let express = require('express'),
    router = express.Router();

let helpers = require('../helpers/friends');

router.route('/')
.get(helpers.getFriends)
.post(helpers.createFriend)

router.route('/:friendId')
.get(helpers.getFriend)
.put(helpers.updateFriend)
.delete(helpers.deleteFriend)


module.exports = router;
