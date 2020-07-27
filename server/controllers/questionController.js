const Question = require('../models/questionModel');

const putQuestion = (req, res, next) => {
  Question.create(req.body)
    .then(
      (question) => {
        console.log('Question Created', question);

        res.status(201).json({
          message: question,
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
      const questions = await Question.findOne({});
      console.log(questions);
      res.status(200).json({ message: questions });
    }
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

const deleteQuestion = (req, res, next) => {
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

const deleteQuestionById = async (req, res) => {
  try {
    const deleteMessage = await Question.deleteOne({
      _id: req.params.questionId,
    });
    res.status(201).json({ message: deleteMessage });
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

const patchQuestionById = async (req, res) => {
  console.log('lol');
  try {
    const updateMessage = await Question.updateOne(
      { _id: req.params.questionId },
      { $set: req.body }
    );
    console.log(updateMessage);
    res.status(201).json({ message: updateMessage });
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

module.exports = {
  getQuestion,
  putQuestion,
  deleteQuestion,
  deleteQuestionById,
  patchQuestionById,
};
