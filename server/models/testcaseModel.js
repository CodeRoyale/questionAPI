const mongoose = require('mongoose');

const testcaseSchema = new mongoose.Schema({
  qid: {
    type: String,
    required: true,
  },
  testcases: [
    {
        input: String,
        output: String,
    }
    ]
});

// eslint-disable-next-line prettier/prettier
module.exports = mongoose.model('testcase', testcaseSchema);
