const express = require('express');
// const mongoose = require('mongoose');
// const Question = require('../models/questionModel');

const route = express.Router();

const {
  getQuestion,
  putQuestion,
  delQuestion,
} = require('../controllers/questionController');

route.post('/post', putQuestion);

route.get('/get', getQuestion);

route.delete('/delete', delQuestion);

module.exports = route;
