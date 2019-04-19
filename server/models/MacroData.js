const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MacroData = new Schema({
    dayName: {
        type: String
    },
    foodType: {
        type: String
    },
    foodName: {
        type: String
    },
    proteinCount: {
        type: Number
    },
    carbCount: {
        type: Number
    },
    fatCount: {
        type: Number
    },
    totalCalories: {
        type: Number
    }
});


module.exports = mongoose.model('MacroData', MacroData);

