var express = require('express');
var router = express.Router();
const reservationsCtrl = require('../controllers/reservations')

/* GET reservations listing. */



router.get('/reservations', reservationsCtrl.index);

router.get('/:id/reservations/new', reservationsCtrl.new);

router.post('/:id/reservations/', reservationsCtrl.create);

router.get('/reservation/:id', reservationsCtrl.show)

router.delete('/reservation/:id', reservationsCtrl.delete)

router.put('/reservation/:id', reservationsCtrl.update)

router.get('/reservation/:id/edit', reservationsCtrl.edit)

module.exports = router;




