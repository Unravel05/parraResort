var express = require('express');
var router = express.Router();
const roomsCtrl = require('../controllers/rooms')

router.get('/', roomsCtrl.index);


module.exports = router;