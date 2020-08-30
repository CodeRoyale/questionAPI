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

  module.exports = {
    putTestcase,
  };
  
  