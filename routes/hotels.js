var express = require('express');
var router = express.Router();
const hotelsCtrl = require('../controllers/hotels')

router.get('/', hotelsCtrl.index);

router.get('/new', hotelsCtrl.new)

router.get('/:id', hotelsCtrl.show);

router.post('/', hotelsCtrl.create);


module.exports = router;