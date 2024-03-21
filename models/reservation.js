const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reservationsSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
    }, {
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