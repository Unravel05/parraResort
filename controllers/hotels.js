const Hotel = require('../models/hotel');
const reservation = require('../models/reservation')

module.exports = {
  index,
  show,
  new: newHotel,
  create
};

async function index(req, res) {
  const hotels = await Hotel.find({});
  res.render('hotels/index', { title: 'All hotels', class:"title", hotels })
}

async function show(req, res) {
  // Populate the cast array with performer docs instead of ObjectIds
  const hotel = await Hotel.findById(req.params.id)
  const reservations = await Reservation.find({ _id: { $nin: reservation } });
  res.render('hotels/show', { title: 'Hotels Detail', hotel, reservations });
}

function newHotel(req, res) {
  res.render('hotels/new', { title: 'Add Hotel', errorMsg: '' });
}
async function create(req, res) {
  req.body.hsk = !!req.body.hsk;
  req.body.accesibleroom = !!req.body.accesibleroom;
  try {
    console.log(req.body)
    const hotel = await Hotel.create(req.body);
    res.redirect(`/${hotel._id}/reservations/new`);
  } catch (err) {
    console.log(err);
    res.render('reservation/new', { title: 'Reservations Detail', errorMsg: err.message });
  }
}