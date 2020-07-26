const Question = require('../models/questionModel');

const putQuestion = (req, res, next) => {
  Question.create(req.body)
    .then(
      (question) => {
        console.log('Question Created', question);

        res.status(201).json({
          message: 'Question Created',
        });
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

const getQuestion = async (req, res) => {
  try {
    console.log(req.query);
    if (req.query.tags) {
      console.log(req.query.tags);

      const questions = await Question.find({ tags: { $in: req.query.tags } });
      res.status(200).json({ message: questions });
    } else {
      res.status(200).json({ message: 'empty' });
    }
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

const delQuestion = (req, res, next) => {
  Question.remove({})
    .then(
      (resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

module.exports = {
  getQuestion,
  putQuestion,
  delQuestion,
};
