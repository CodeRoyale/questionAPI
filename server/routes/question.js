const express = require('express');

const route = express.Router();

const {
  putQuestion,
  getRandom,
  getQuestion,
  getQuestionById,
  deleteQuestion,
  deleteQuestionById,
  patchQuestionById,
} = require('../controllers/questionController');

const {
  putTestcase,
  getTestcase,
} = require('../controllers/testcaseController');

route.post('/', putQuestion);

route.post('/testcase', putTestcase);

route.post('/getTestcase', getTestcase);

route.get('/random', getRandom);

route.get('/', getQuestion);

route.post('/getQById', getQuestionById);

route.delete('/deleteAll', deleteQuestion);

route.delete('/deleteById/:questionId', deleteQuestionById);

route.patch('/:questionId', patchQuestionById);

module.exports = route;
