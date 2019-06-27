const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MacroSchema = new Schema({
    dayName: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        required: true
    },
    foodName: {
        type: String,
        required: true
    },
    proteinCount: {
        type: Number,
        required: true
    },
    carbCount: {
        type: Number,
        required: true
    },
    fatCount: {
        type: Number,
        required: true
    },
    totalCalories: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = Item = mongoose.model('macro', MacroSchema);

