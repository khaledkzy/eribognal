const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/eribongal';
const Place = require('../models/Place');
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const addNewPlace = (query, callback) => {
    mongoose.connect(mongoConnection);
    Place.create(query).then(callback)
};

module.exports = addNewPlace;