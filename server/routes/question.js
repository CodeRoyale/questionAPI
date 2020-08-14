const express = require('express');
const route = express.Router();

const {
  getQuestion,
  putQuestion,
  deleteQuestion,
  deleteQuestionById,
  patchQuestionById,
} = require('../controllers/questionController');

const { onlyAdmins } = require('../middlewares/auth');

route.post('/', putQuestion);

route.get('/', getQuestion);

route.delete('/', deleteQuestion);

route.delete('/:questionId', deleteQuestionById);

route.patch('/:questionId', patchQuestionById);

// testcase routes
route.get('/lund-lasun', onlyAdmins, (req, res) => {
  //yahaan code likh
});

module.exports = route;
