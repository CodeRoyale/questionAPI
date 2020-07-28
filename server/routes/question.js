const express = require('express');

const route = express.Router();
const {
  getQuestion,
  putQuestion,
} = require('../controllers/questionController');

route.post('/', putQuestion);

route.get('/', getQuestion);

module.exports = route;