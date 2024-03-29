process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const Question = require('../server/models/questionModel');
const Testcase = require('../server/models/testCase');

const { server } = require('../server/server');

const should = chai.should();

chai.use(chaiHttp);

// 1st question for testing
const questionDetails = {
  questionTitle: 'Chef and Street Food',
  problemCode: 'STFOOD',
  description:
    'Chef wants to maximise his daily profit. Help Chef choose which type of food to offer and find the maximum daily profit he can make.',
  format:
    'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES',
  io: [
    {
      input: 'Sample Input 1\n0 2 5 3',
      output: 'Sample Output 1\nNO',
      explanation:
        "Explanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.",
    },
  ],
  author: 'kingofnumbers',
  tags: 'Linear Data Structure',
  dateAdded: '12-13-11',
  timeLimit: 1,
  sourceLimit: 3,
  difficulty: 5,
};

// 2nd question for testing
const questionDetails1 = {
  questionTitle: 'Prime Numbers',
  problemCode: 'PMNRS',
  description: 'FIND PRIME NUMBERS',
  format:
    'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES',
  io: [
    {
      input: 'Sample Input 1\n0 2 5 3',
      output: 'Sample Output 1\nNO',
      explanation:
        "Explanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.",
    },
  ],
  author: 'naveen',
  tags: 'Mathematics',
  dateAdded: '29-07-20',
  timeLimit: 3,
  sourceLimit: 4,
  difficulty: 7,
};

// 3rd question for testing
const questionDetails2 = {
  questionTitle: 'Prime Numbers',
  format:
    'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES',
  io: [
    {
      input: 'Sample Input 1\n0 2 5 3',
      output: 'Sample Output 1\nNO',
      explanation:
        "Explanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.",
    },
  ],
  dateAdded: '29-07-20',
  timeLimit: 3,
  sourceLimit: 4,
  difficulty: 7,
};

// 4th question for testing
const questionDetails3 = {
  questionTitle: 'Prime Numbers',
  problemCode: 'PMNRS',
  description: 'FIND PRIME NUMBERS',
  format:
    'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES',
  io: [
    {
      input: 'Sample Input 1\n0 2 5 3',
      output: 'Sample Output 1\nNO',
      explanation:
        "Explanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.",
    },
  ],
  author: 'naveen',
  tags: 'Mathematics',
  dateAdded: '29-07-20',
  timeLimit: 3,
  sourceLimit: 'sdadsad',
  difficulty: 7,
};

// questions for patch testing
const beforeQuestion = {
  questionTitle: 'Array of Strings',
  problemCode: 'ARRSTR',
  description:
    'There is a array which is made up of strings and you have to do what you have to do.',
  format:
    'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES',
  io: [
    {
      input: 'Samble Input 1\n0 2 5 3',
      output: 'Samble Output 1\nNO',
      explanation:
        "Xplanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.",
    },
  ],
  author: 'Sanidh',
  tags: ['Array', 'Strings'],
  dateAdded: '12-13-12',
  timeLimit: 2,
  sourceLimit: 4,
  difficulty: 6,
};

const afterQuestion = {
  questionTitle: 'String of Arrays',
  problemCode: 'STRARR',
  description:
    'There is a array which is made up of strings and you have to do what you have to do.',
  format:
    'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES',
  io: [
    {
      input: 'Sample Input 1\n0 2 5 3',
      output: 'Sample Output 1\nNO',
      explanation:
        "Explanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.",
    },
  ],
  author: 'Sanith',
  tags: ['Graph', 'Strings'],
  dateAdded: '12-13-13',
  timeLimit: 3,
  sourceLimit: 5,
  difficulty: 7,
};

// id for patch testing
let id = 0;
// creating a illegal question
const illegalQuestion = {
  _id: `newID6969`,
  questionTitle: 'String of Arrays',
  problemCode: 'STRARR',
  description:
    'There is a array which is made up of strings and you have to do what you have to do.',
  author: 'Sanith',
  tags: ['Graph', 'Strings'],
  dateAdded: '12-13-13',
  timeLimit: 3,
  sourceLimit: 5,
  difficulty: 7,
};

// for getting the question id for the 1st question
let questionId = 0;

describe('Question test suit', () => {
  before((done) => {
    // Before each test we empty the database
    Question.deleteMany({}, () => {
      done();
    });
  });

  describe('/POST question', () => {
    // ADD question
    it('it should post question', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(questionDetails)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.be.an('Object');
          res.body.message.should.have
            .property('questionTitle')
            .eql('Chef and Street Food');
          res.body.message.should.have.property('problemCode').eql('STFOOD');
          res.body.message.should.have
            .property('description')
            .eql(
              'Chef wants to maximise his daily profit. Help Chef choose which type of food to offer and find the maximum daily profit he can make.'
            );
          res.body.message.should.have
            .property('format')
            .eql(
              'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES'
            );

          res.body.message.io[0].should.have
            .property('input')
            .eql('Sample Input 1\n0 2 5 3');

          res.body.message.io[0].should.have
            .property('output')
            .eql('Sample Output 1\nNO');

          res.body.message.io[0].should.have
            .property('explanation')
            .eql(
              `Explanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.`
            );

          res.body.message.should.have.property('author').eql('kingofnumbers');
          res.body.message.should.have
            .property('tags')
            .eql(['Linear Data Structure']);
          res.body.message.should.have.property('dateAdded').eql('12-13-11');
          res.body.message.should.have.property('timeLimit').eql(1);
          res.body.message.should.have.property('sourceLimit').eql(3);
          res.body.message.should.have.property('difficulty').eql(5);

          // stored the question id and will be used in delete question by id
          questionId = res.body.message._id;
          done();
        });
    });

    it('it should give error when keys which are not having default values are not given values', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(questionDetails2)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.have
            .property('message')
            .eql(
              'question validation failed: author: Path `author` is required., description: Path `description` is required., problemCode: Path `problemCode` is required.'
            );
          done();
        });
    });

    it('it should give error when mismatch of type is given', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(questionDetails3)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.have
            .property('message')
            .eql(
              'question validation failed: sourceLimit: Cast to Number failed for value "sdadsad" at path "sourceLimit"'
            );
          done();
        });
    });
  });

  describe('/GET questions', () => {
    // GET the added question
    it('it should get question', (done) => {
      chai
        .request(server)
        .get('/questions/question?tags=Linear Data Structure')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message[0].should.be.an('Object');
          res.body.message[0].should.have
            .property('questionTitle')
            .eql('Chef and Street Food');
          res.body.message[0].should.have.property('problemCode').eql('STFOOD');
          res.body.message[0].should.have
            .property('description')
            .eql(
              'Chef wants to maximise his daily profit. Help Chef choose which type of food to offer and find the maximum daily profit he can make.'
            );
          res.body.message[0].should.have
            .property('format')
            .eql(
              'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES'
            );

          res.body.message[0].io[0].should.have
            .property('input')
            .eql('Sample Input 1\n0 2 5 3');

          res.body.message[0].io[0].should.have
            .property('output')
            .eql('Sample Output 1\nNO');

          res.body.message[0].io[0].should.have
            .property('explanation')
            .eql(
              `Explanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.`
            );

          res.body.message[0].should.have
            .property('author')
            .eql('kingofnumbers');
          res.body.message[0].should.have
            .property('tags')
            .eql(['Linear Data Structure']);
          res.body.message[0].should.have.property('dateAdded').eql('12-13-11');
          res.body.message[0].should.have.property('timeLimit').eql(1);
          res.body.message[0].should.have.property('sourceLimit').eql(3);
          res.body.message[0].should.have.property('difficulty').eql(5);
          done();
        });
    });

    it('It gets the first question poseted if tags is not given as parameter', (done) => {
      chai
        .request(server)
        .get('/questions/question')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.should.be.an('Object');
          res.body.message.should.have
            .property('questionTitle')
            .eql('Chef and Street Food');
          res.body.message.should.have.property('problemCode').eql('STFOOD');
          res.body.message.should.have
            .property('description')
            .eql(
              'Chef wants to maximise his daily profit. Help Chef choose which type of food to offer and find the maximum daily profit he can make.'
            );
          res.body.message.should.have.property('author').eql('kingofnumbers');
          res.body.message.should.have
            .property('tags')
            .eql(['Linear Data Structure']);
          res.body.message.should.have
            .property('format')
            .eql(
              'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES'
            );

          res.body.message.io[0].should.have
            .property('input')
            .eql('Sample Input 1\n0 2 5 3');

          res.body.message.io[0].should.have
            .property('output')
            .eql('Sample Output 1\nNO');

          res.body.message.io[0].should.have
            .property('explanation')
            .eql(
              `Explanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.`
            );

          res.body.message.should.have.property('dateAdded').eql('12-13-11');
          res.body.message.should.have.property('timeLimit').eql(1);
          res.body.message.should.have.property('sourceLimit').eql(3);
          res.body.message.should.have.property('difficulty').eql(5);
          done();
        });
    });
  });

  describe('/DELETE QUESTION BY ID', () => {
    it('it should delete question by id ', (done) => {
      chai
        .request(server)
        .delete(`/questions/deleteById/${questionId}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.message.should.have.property('n').eql(1);
          res.body.message.should.have.property('ok').eql(1);
          res.body.message.should.have.property('deletedCount').eql(1);
          done();
        });
    });

    it('it should ignore deleting a question without particular id', (done) => {
      chai
        .request(server)
        // random and illegal id
        .delete('/questions/deleteById/5ea5dc9e92a6a52cc245389e')
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('message').be.a('object');
          res.body.message.should.have.property('n').eql(0);
          res.body.message.should.have.property('ok').eql(1);
          res.body.message.should.have.property('deletedCount').eql(0);
          done();
        });
    });
  });

  // posted
  describe('/POST question', () => {
    // add question
    it('it should post question', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(questionDetails1)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });
  describe('/DELETE ALL QUESTIONS', () => {
    it('it should delete all the questions', (done) => {
      chai
        .request(server)
        .delete('/questions/deleteAll')
        .end((err, res) => {
          res.body.should.be.a('object');
          res.body.message.should.have.property('n').eql(1);
          res.body.message.should.have.property('ok').eql(1);
          res.body.message.should.have.property('deletedCount').eql(1);
          done();
        });
    });
  });

  describe('/PATCH question with ID', () => {
    it('it should patch a added question', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(beforeQuestion)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          // initial check
          res.body.message.should.have
            .property('questionTitle')
            .eql('Array of Strings');
          res.body.message.should.have.property('problemCode').eql('ARRSTR');
          res.body.message.should.have
            .property('description')
            .eql(
              'There is a array which is made up of strings and you have to do what you have to do.'
            );

          res.body.message.should.have
            .property('format')
            .eql(
              'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES'
            );

          res.body.message.io[0].should.have
            .property('input')
            .eql('Samble Input 1\n0 2 5 3');

          res.body.message.io[0].should.have
            .property('output')
            .eql('Samble Output 1\nNO');

          res.body.message.io[0].should.have
            .property('explanation')
            .eql(
              `Xplanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.`
            );
          res.body.message.should.have.property('author').eql('Sanidh');
          res.body.message.should.have.property('dateAdded').eql('12-13-12');
          res.body.message.should.have.property('timeLimit').eql(2);
          res.body.message.should.have.property('sourceLimit').eql(4);
          res.body.message.should.have.property('difficulty').eql(6);
          res.body.message.should.have.property('_id');
          // storing the id
          id = res.body.message._id;
          // now we check the question update status
          return chai
            .request(server)
            .patch(`/questions/${id}`)
            .send(afterQuestion)
            .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
              res.body.should.have.property('message');
              res.body.message.should.have.property('n').eql(1);
              res.body.message.should.have.property('nModified').eql(1);
              res.body.message.should.have.property('ok').eql(1);
              done();
            });
        });
    });

    // the values should have changed
    it('it should change the values', (done) => {
      chai
        .request(server)
        .get(`/questions/question?tags=Graph&tags=Strings`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          // after patch check
          res.body.message[0].should.have
            .property('questionTitle')
            .eql('String of Arrays');
          res.body.message[0].should.have.property('problemCode').eql('STRARR');
          res.body.message[0].should.have
            .property('description')
            .eql(
              'There is a array which is made up of strings and you have to do what you have to do.'
            );
          res.body.message[0].should.have
            .property('format')
            .eql(
              'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES'
            );

          res.body.message[0].io[0].should.have
            .property('input')
            .eql('Sample Input 1\n0 2 5 3');

          res.body.message[0].io[0].should.have
            .property('output')
            .eql('Sample Output 1\nNO');

          res.body.message[0].io[0].should.have
            .property('explanation')
            .eql(
              `Explanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.`
            );

          res.body.message[0].should.have.property('author').eql('Sanith');
          res.body.message[0].should.have.property('dateAdded').eql('12-13-13');
          res.body.message[0].should.have.property('timeLimit').eql(3);
          res.body.message[0].should.have.property('sourceLimit').eql(5);
          res.body.message[0].should.have.property('difficulty').eql(7);
          done();
        });
    });

    // an update to _id is not possible
    it('it should not update _id', (done) => {
      chai
        .request(server)
        .patch(`/questions/${id}`)
        .send(illegalQuestion)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Cast to ObjectId failed for value "newID6969" at path "_id"');
          done();
        });
    });
  });
  let questionId1 = '';
  let questionId2 = '';
  let questionId3 = '';
  // created a array to push the ids of the questions
  const arr = [];

  describe('/POST question for getById functionality', () => {
    // ADD question
    it('it should post question to get Id1', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(questionDetails)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.be.an('Object');

          // stored the question id and will be used in delete question by id
          questionId1 = res.body.message._id;
          arr.push(questionId1);
          done();
        });
    });

    it('it should post question to get Id2', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(questionDetails1)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.be.an('Object');

          // stored the question id and will be used in delete question by id
          questionId2 = res.body.message._id;
          arr.push(questionId2);
          done();
        });
    });

    it('it should post question to get Id3', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(beforeQuestion)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.be.an('Object');
          // stored the question id and will be used in delete question by id
          questionId3 = res.body.message._id;
          done();
        });
    });
  });

  // json object for getQById
  const messageFromFrontEnd = {
    id: arr,
  };

  describe('/POST by the front-end', () => {
    // ADD question
    it('it should post a json to get respective ids', (done) => {
      chai
        .request(server)
        .post('/questions/getQById')
        .send(messageFromFrontEnd)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.message[0].should.have
            .property('questionTitle')
            .eql('Chef and Street Food');
          res.body.message[0].should.have.property('problemCode').eql('STFOOD');
          res.body.message[0].should.have
            .property('description')
            .eql(
              'Chef wants to maximise his daily profit. Help Chef choose which type of food to offer and find the maximum daily profit he can make.'
            );
          res.body.message[0].should.have
            .property('author')
            .eql('kingofnumbers');
          res.body.message[0].should.have
            .property('tags')
            .eql(['Linear Data Structure']);
          res.body.message[0].should.have
            .property('format')
            .eql(
              'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES'
            );

          res.body.message[0].io[0].should.have
            .property('input')
            .eql('Sample Input 1\n0 2 5 3');

          res.body.message[0].io[0].should.have
            .property('output')
            .eql('Sample Output 1\nNO');

          res.body.message[0].io[0].should.have
            .property('explanation')
            .eql(
              `Explanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.`
            );
          res.body.message[0].should.have.property('dateAdded').eql('12-13-11');
          res.body.message[0].should.have.property('timeLimit').eql(1);
          res.body.message[0].should.have.property('sourceLimit').eql(3);
          res.body.message[0].should.have.property('difficulty').eql(5);
          res.body.message[1].should.have
            .property('questionTitle')
            .eql('Prime Numbers');
          res.body.message[1].should.have.property('problemCode').eql('PMNRS');
          res.body.message[1].should.have
            .property('description')
            .eql('FIND PRIME NUMBERS');
          res.body.message[1].should.have
            .property('format')
            .eql(
              'kangaroo has the following parameter(s):\nx1, v1: integers, starting position and jump distance for kangaroo 1\nx2, v2: integers, starting position and jump distance for kangaroo 2\nInput Format\nA single line of four space-separated integers denoting the respective values of X1,V1,X2 and V2.\nOutput Format\nPrint YES'
            );

          res.body.message[1].io[0].should.have
            .property('input')
            .eql('Sample Input 1\n0 2 5 3');

          res.body.message[1].io[0].should.have
            .property('output')
            .eql('Sample Output 1\nNO');

          res.body.message[1].io[0].should.have
            .property('explanation')
            .eql(
              `Explanation 1\nThe second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., X2 > X1 ). Because the second kangaroo moves at a faster rate (meaning V2 > V1 ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.`
            );
          res.body.message[1].should.have.property('author').eql('naveen');
          res.body.message[1].should.have.property('tags').eql(['Mathematics']);
          res.body.message[1].should.have.property('dateAdded').eql('29-07-20');
          res.body.message[1].should.have.property('timeLimit').eql(3);
          res.body.message[1].should.have.property('sourceLimit').eql(4);
          res.body.message[1].should.have.property('difficulty').eql(7);
          done();
        });
    });
  });

  describe('/POST question for getRandom functionality', () => {
    // ADD question
    it('it should post question to get Random Id1', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(questionDetails)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.be.an('Object');
          done();
        });
    });

    it('it should post question to get Random Id2', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(questionDetails1)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.be.an('Object');
          done();
        });
    });

    it('it should post question to get Random Id3', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(questionDetails1)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.be.an('Object');
          done();
        });
    });

    it('it should post question to get Random Id4', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(questionDetails1)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.be.an('Object');
          done();
        });
    });

    it('it should post question to get Random Id5', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(beforeQuestion)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.be.an('Object');
          done();
        });
    });
  });

  const qids = [];
  describe('/GET questionIds for getRandom ', () => {
    // GET the added questionIds
    it('it should get n random distinct questionIds', (done) => {
      chai
        .request(server)
        .get('/questions/random?noIds=3')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('Object');
          res.body.message.should.be.a('array');
          res.body.message.should.have.length(3);
          qids.push(res.body.message[0]);
          qids.push(res.body.message[1]);
          qids.push(res.body.message[2]);

          const qidsset = new Set(qids);

          qidsset.should.have.length(qids.length);
          done();
        });
    });
  });
});

// 1st testcase for testing
const testcaseDetails = {
  problemCode: '123',
  testcases: [
    {
      input: '0 3 4 2',
      output: 'YES',
    },
    {
      input: '0 2 5 3',
      output: 'NO',
    },
    {
      input: '14 4 98 2',
      output: 'YES',
    },
    {
      input: '21 6 47 3',
      output: 'NO',
    },
  ],
};

// 2nd testcase for testing
const testcaseDetails2 = {
  testcases: [
    {
      input: 'SOSSPSSQSSOR',
      output: '3',
    },
    {
      input: 'SOSSOT',
      output: '1',
    },
    {
      input: 'SOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOS',
      output: '0',
    },
    {
      input: 'SOSOOSOSOSOSOSSOSOSOSOSOSOS',
      output: '12',
    },
  ],
};

let questionidTestcase = '';
describe('TestCase test suit', () => {
  before((done) => {
    // Before each test we empty the database
    Testcase.deleteMany({}, () => {
      done();
    });
  });

  describe('/POST testcase', () => {
    // ADD testcase
    it('it should post testcase', (done) => {
      chai
        .request(server)
        .post('/questions/testcase')
        .send(testcaseDetails)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.be.an('Object');
          res.body.message.should.have.property('problemCode').eql('123');
          questionidTestcase = res.body.message.qid;
          done();
        });
    });

    it('it should give error when keys which are not having default values are not given values', (done) => {
      chai
        .request(server)
        .post('/questions/testcase')
        .send(testcaseDetails2)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.have
            .property('message')
            .eql(
              'testcase validation failed: problemCode: Path `problemCode` is required.'
            );
          done();
        });
    });
  });
});
