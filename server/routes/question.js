const express = require('express');
const Question = require('../models/questionModel');
const route = express.Router();

const {
  getQuestion,
  putQuestion,
  getTestCase,
  deleteQuestion,
  deleteQuestionById,
  patchQuestionById,
} = require('../controllers/questionController');

const { onlyAdmins } = require('../middlewares/auth');

route.post('/', putQuestion);

route.get('/', getQuestion);

//route.get('/test/:questionId', getTestCase);

route.delete('/', deleteQuestion);

route.delete('/:questionId', deleteQuestionById);

route.patch('/:questionId', patchQuestionById);

// testcase routes
route.get('/testcase', onlyAdmins, getTestCase);

module.exports = route;
