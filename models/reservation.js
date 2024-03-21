const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reservationsSchema = new Schema ({
    name: {
        type: String
      }, 
    arrival: Date,
    departure: Date,
    hotel: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel'
}
}, {
    timestamps: true
})

module.exports = mongoose.model('Reservations', reservationsSchema)