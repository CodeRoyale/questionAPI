const Question = require('../models/questionModel');

const putQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.status(201).json({
      message: question,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

const getRandom = async (req, res) => {
  try {
    const n = parseInt(req.query.noIds, 10);
    const NRandomIds = await Question.aggregate([
      {
        $sample: {
          size: n,
        },
      },
    ]);

    const qids = [];
    let i;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < n; i++) {
      // eslint-disable-next-line no-underscore-dangle
      qids.push(NRandomIds[i]._id);
    }

    res.status(200).json({
      message: qids,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

const getQuestion = async (req, res) => {
  try {
    if (req.query.tags) {
      const questions = await Question.find({
        tags: {
          $in: req.query.tags,
        },
      });

      res.status(200).json({
        message: questions,
      });
    } else {
      const questions = await Question.findOne({});

      res.status(200).json({
        message: questions,
      });
    }
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const size = req.body.id.length;
    const qids = [];
    let i;
    for (i = 0; i < size; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const question = await Question.findOne({ _id: req.body.id[i] });
      qids.push(question);
    }
    res.status(200).json({
      message: qids,
    });
  } catch (err) {
    // wrong id by user
    res.status(401).json({ message: err.message });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const resp = await Question.remove({});
    res.status(201).json({
      message: resp,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

const deleteQuestionById = async (req, res) => {
  try {
    const deleteMessage = await Question.deleteOne({
      _id: req.params.questionId,
    });
    res.status(201).json({
      message: deleteMessage,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

const patchQuestionByProblemCode = async (req, res) => {
  try {
    const updateMessage = await Question.updateOne(
      {
        problemCode: req.params.problemCode,
      },
      {
        $set: req.body,
      }
    );

    res.status(201).json({
      message: updateMessage,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

module.exports = {
  putQuestion,
  getRandom,
  getQuestion,
  getQuestionById,
  deleteQuestion,
  deleteQuestionById,
  patchQuestionByProblemCode,
};
