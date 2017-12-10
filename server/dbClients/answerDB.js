const connection = require('./connection')
const Answer = require('../models/Answer');

const addAnswer = (query) => {
    return Answer.create(query);
};

const getQuestionnaire = (query, callback) => {
    Answer.find(query).exec(callback)
  }
module.exports = { addAnswer,getQuestionnaire };