var express = require('express');
var router = express.Router();

/* GET reservations listing. */
router.get('/rooms', function(req, res, next) {
  res.send('This is rooms');
});

module.exports = router;