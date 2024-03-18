const Reservation = require('../models/reservation');
const Hotel = require('../models/hotel');


module.exports = {
    new: newReservation,
    create,
    show
}

function newReservation(req, res) {
    res.render('reservation/new', { title: 'Reservations Detail'})
}

async function create(req, res) {
    try {
        console.log(req.body)
        const reservation = await Reservation.create(req.body);
        res.redirect(`/reservations/${reservation._id}`);
      } catch (err) {
        console.log(err);
        res.render('reservation/new', {title: 'Reservations Detail', errorMsg: err.message });
      }
}

async function show(req, res) {
    const reservation = await Reservation.findById(req.params.id).populate('hotel')
    res.render('reservation/show', { title: 'Reservations Detail', reservation }
    
    );
}