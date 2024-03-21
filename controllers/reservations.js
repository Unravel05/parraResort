const Reservation = require('../models/reservation');
const Hotel = require('../models/hotel');


module.exports = {
    new: newReservation,
    create,
    show,
    index,
    delete: deleteReservation,
    update: updateReservation,
    edit: editReservation
}

async function editReservation(req, res) {
  const reservation = await Reservation.findById(req.params.id)
  res.render(`reservation/edit`, {title: 'Modify your reservation!', reservation})
}

async function updateReservation(req, res) {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/reservation/${reservation._id}`);
  }

async function deleteReservation(req, res) {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    res.redirect(`/reservations`);
  }

async function index(req, res) {
    const reservation = await Reservation.find({}).populate('hotel')
    console.log(reservation)
    res.render('reservation/index', {title: 'All reservations', reservation})
}

function newReservation(req, res) {
    const hotel = req.params.id
    res.render('reservation/new', { title: 'Reservations Detail', hotel})
}

async function create(req, res) {
    try {
        console.log(req.body)
        req.body.hotel = req.params.id 
        const reservation = await Reservation.create(req.body);
        reservation.save()
        res.redirect(`/reservation/${reservation._id}`);
      } catch (err) {
        console.log(err);
        res.render('reservation/new', {title: 'Reservations Detail', errorMsg: err.message });
      }
}

async function show(req, res) {
    const reservation = await Reservation.findById(req.params.id).populate('hotel')
    console.log(reservation)
    res.render('reservation/show', {title: 'Reservations Detail', reservation}
    );
}