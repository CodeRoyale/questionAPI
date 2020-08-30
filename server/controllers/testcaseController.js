const Testcase = require('../models/testcaseModel');

const putTestcase = async (req, res) => {
  try {
    const testcase = await Testcase.create(req.body);
    res.status(201).json({
      message: testcase,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

const getTestcase = async (req, res) => {
  try {
    const testArray = {};
    const n = req.query.id.length;
    let i;
    console.log(req.query.id);
    console.log('lol');
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < n; i++) {
      // eslint-disable-next-line no-await-in-loop
      const testcase = await Testcase.findOne({ qid: req.query.id[i] });
      console.log(testcase);
      testArray[req.query.id[i]] = testcase.testcases;
    }
    console.log(testArray);
    res.status(200).json({
      message: testArray,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

module.exports = {
  putTestcase,
  getTestcase,
};
