const express = require('express');

const route = express.Router();

const {
  getQuestion,
  putQuestion,
  getTestCase,
  deleteQuestion,
  deleteQuestionById,
  patchQuestionById,
} = require('../controllers/questionController');

route.post('/', putQuestion);

route.get('/', getQuestion);

route.get('/test/:questionId', getTestCase);

route.delete('/', deleteQuestion);

route.delete('/:questionId', deleteQuestionById);

route.patch('/:questionId', patchQuestionById);

module.exports = route;
