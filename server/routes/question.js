const express = require('express');
// const mongoose = require('mongoose');
// const Question = require('../models/questionModel');

const route = express.Router();

const {
  getQuestion,
  putQuestion,
  delQuestion,
} = require('../controllers/questionController');

route.post('/', putQuestion);

route.get('/', getQuestion);

route.delete('/', delQuestion);

module.exports = route;
