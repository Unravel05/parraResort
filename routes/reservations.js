var express = require('express');
var router = express.Router();
const reservationsCtrl = require('../controllers/reservations')

/* GET reservations listing. */



router.get('/:id/reservations/new', reservationsCtrl.new);

router.post('/reservations', reservationsCtrl.create);

router.get('/reservations/:id', reservationsCtrl.show)


module.exports = router;




