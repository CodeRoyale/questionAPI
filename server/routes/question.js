const express = require('express');

const route = express.Router();

const {
  putQuestion,
  getRandom,
  getQuestion,
  getQuestionById,
  deleteQuestion,
  deleteQuestionById,
  patchQuestionByProblemCode,
} = require('../controllers/questionController');

const {
  putTestcase,
  getTestcase,
  patchTestCaseByProblemCode,
} = require('../controllers/testcaseController');

route.post('/', putQuestion);

route.post('/testcase', putTestcase);

route.get('/getTestcase', getTestcase);

route.get('/random', getRandom);

route.get('/question', getQuestion);

route.post('/getQById', getQuestionById);

route.delete('/deleteAll', deleteQuestion);

route.delete('/deleteById/:questionId', deleteQuestionById);

route.patch('/patchQuestion', patchQuestionByProblemCode);

route.patch('/patchTestCase', patchTestCaseByProblemCode);

module.exports = route;
