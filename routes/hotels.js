var express = require('express');
var router = express.Router();
const hotelsCtrl = require('../controllers/hotels')

/* GET hotel listing. */
// router.get('/', function(req, res, next) {
//   res.send('This is Hotels');
// });


router.get('/', hotelsCtrl.index);

router.get('/new', hotelsCtrl.new)

router.get('/:id', hotelsCtrl.show);

router.post('/', hotelsCtrl.create);


module.exports = router;