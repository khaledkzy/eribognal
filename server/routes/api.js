const express = require('express');
const router = express.Router();
const connection = require('../dbClients/connection')
const Place = require('../models/Place');
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const placesDB = require('../dbClients/placesDB')


/* GET questions list from db. */
router.get('/questions', function (req, res, next) {
    res.send(
        [{
            title: 'Questions1'
        }, {
            title: 'Questions2'
        }, {
            title: 'Questions3'
        }]
    );
});

router.get('/places', function (req, res, next) {
    mongoose.connect(connection);
    Place.find({}, (error, data) => {
        res.json(data)
    })
})
router.get('/places', function (req, res, next) {
    const callBack = (error, places) => {
        if (error) {
            res.sendStatus(500);
        } else {
            res.json(places)
        }
    };
    placesDB.getPlaces(callBack)
});

module.exports = router;
