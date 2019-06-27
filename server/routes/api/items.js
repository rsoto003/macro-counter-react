const express = require('express');
const router = express.Router();
const Item = require('../../models/MacroItem');

router.get('/', (req, res) => {
    Item.find()
        .sort( { date: -1 })
            .then(items => { res.json(items)})
});

router.post('/', (req, res) => {
    const newMacroItem = new Item({
        dayName: req.body.dayName,
        foodName: req.body.foodName,
        foodType: req.body.foodType,
        proteinCount: req.body.proteinCount,
        fatCount: req.body.fatCount,
        carbCount: req.body.carbCount,
        totalCalories: req.body.totalCalories
    });
    newMacroItem.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => Item.deleteOne().then(() => res.json({success: true})))
            .catch(err => res.status(404).json({success: false}));
})

module.exports = router;