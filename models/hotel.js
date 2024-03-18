const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({

    hotel: {
        type: String,
        enum: ['Aries', 'Taurus', 'Scorpio', 'Libra'],  
    }, 
    room: { 
        type: String,
        enum: ['Jupiter', 'Sun', 'Moon', 'Mars']
    },
    view: {
        type: String,
        enum: ['Water', 'Garden', 'Rise', 'Standard']
    },
    hsk: {type: Boolean, default: true},
    accesibleroom: {type: Boolean, default: true},
});


module.exports = mongoose.model('Hotel', hotelSchema)