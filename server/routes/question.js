const express = require('express');

const route = express.Router();

const {
  putQuestion,
  getQuestion,
  getRandom,
  deleteQuestion,
  deleteQuestionById,
  patchQuestionById,
} = require('../controllers/questionController');

route.post('/', putQuestion);

route.get('/', getQuestion);

route.get('/random', getRandom);

route.delete('/', deleteQuestion);

route.delete('/:questionId', deleteQuestionById);

route.patch('/:questionId', patchQuestionById);

module.exports = route;
