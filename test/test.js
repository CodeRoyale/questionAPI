process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const Question = require('../server/models/questionModel');
const { server } = require('../server/server');

let should = chai.should();

// console.log('server is ', server);

chai.use(chaiHttp);

const questionDetails = {
  questionTitle: 'Chef and Street Food',
  problemCode: 'STFOOD',
  description:
    'Chef wants to maximise his daily profit. Help Chef choose which type of food to offer and find the maximum daily profit he can make.',
  author: 'kingofnumbers',
  tags: 'Linear Data Structure',
  dateAdded: '12-13-11',
  timeLimit: 1,
  sourceLimit: 3,
  difficulty: 5,
};

const questionDetails1 = {
  questionTitle: 'Prime Numbers',
  problemCode: 'PMNRS',
  description: 'FIND PRIME NUMBERS',
  author: 'naveen',
  tags: 'Mathematics',
  dateAdded: '29-07-20',
  timeLimit: 3,
  sourceLimit: 4,
  difficulty: 7,
};

let questionId = 0;

describe('Question test suit', () => {
  before((done) => {
    // Before each test we empty the database
    Question.deleteMany({}, (err) => {
      done(); // doubt
    });
  });

  describe('/POST question', () => {
    // Register student
    it('it should post question', (done) => {
      chai
        .request(server)
        .post('/questions')
        .send(questionDetails)
        .end((err, res) => {
          res.should.have.status(201);
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
          res.body.message.should.have.property('dateAdded').eql('12-13-11');
          res.body.message.should.have.property('timeLimit').eql(1);
          res.body.message.should.have.property('sourceLimit').eql(3);
          res.body.message.should.have.property('difficulty').eql(5);

          res.body.message.should.be.an('Object');
          console.log('responce from post is :');
          questionId = res.body.message._id;
          done();
        });
    });
  });

  describe('/GET questions', () => {
    it('it should get question', (done) => {
      chai
        .request(server)
        .get('/questions?tags=Linear Data Structure')
        .end((err, res) => {
          res.should.have.status(200);

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
          res.body.message[0].should.have.property('dateAdded').eql('12-13-11');
          res.body.message[0].should.have.property('timeLimit').eql(1);
          res.body.message[0].should.have.property('sourceLimit').eql(3);
          res.body.message[0].should.have.property('difficulty').eql(5);

          res.body.message[0].should.be.an('Object');
          done();
        });
    });
  });

  // describe('/PATCH QUESTION BY ID', () => {
  //   it('it should update question by id ', (done) => {
  //     chai
  //       .request(server)
  //       .patch('/questions/', questionId)
  //       .end((err, res) => {
  //         res.should.have.status(201);
  //         res.body.should.have.property('n').eql(1);
  //         res.body.should.have.property('ok').eql(1);
  //         res.body.should.have.property('deletedCount').eql(1);
  //         done();
  //       });
  //   });
  // });

  // describe('/POST question', () => {
  //   // Register student
  //   it('it should post question', (done) => {
  //     chai
  //       .request(server)
  //       .post('/questions')
  //       .send(questionDetails1)
  //       .end((err, res) => {
  //         res.should.have.status(201);
  //         questionId1 = res.body.message._id;
  //         done();
  //       });
  //   });
  // });

  // describe('/DELETE QUESTION BY ID', () => {
  //   it('it should delete question by id ', (done) => {
  //     chai
  //       .request(server)
  //       .delete('/questions/', questionId1)
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a('object');
  //         res.body.should.have.property('n').eql(1);
  //         res.body.should.have.property('ok').eql(1);
  //         res.body.should.have.property('deletedCount').eql(1);
  //         done();
  //       });
  //   });
  // });
  describe('/DELETE QUESTION BY ID', () => {
    it('it should delete question by id ', (done) => {
      chai
        .request(server)
        .delete('/questions/', questionId)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          console.log(res.body);
          res.body.should.have.property('n').eql(1);
          res.body.should.have.property('ok').eql(1);
          res.body.should.have.property('deletedCount').eql(1);
          done();
        });
    });

    it('it should ignore deleting a article without particular id', (done) => {
      chai
        .request(server)
        .delete('/questions/5ea5dc9e92a6a52cc245389e')
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('message').be.a('object');
          console.log(res.body);
          res.body.message.should.have.property('n').eql(0);
          res.body.message.should.have.property('ok').eql(1);
          res.body.message.should.have.property('deletedCount').eql(0);
          done();
        });
    });
  });
  describe('/POST question', () => {
    // Register student
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
    it('it should delete questions', (done) => {
      chai
        .request(server)
        .delete('/questions')
        .end((err, res) => {
          res.body.should.be.a('object');

          res.body.should.have.property('n').eql(1);
          res.body.should.have.property('ok').eql(1);
          res.body.should.have.property('deletedCount').eql(1);
          done();
        });
    });
  });

  const beforeQuestion = {
    questionTitle: 'Array of Strings',
    problemCode: 'ARRSTR',
    description:
      'There is a array which is made up of strings and you have to do what you have to do.',
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
    author: 'Sanith',
    tags: ['Graph', 'Strings'],
    dateAdded: '12-13-13',
    timeLimit: 3,
    sourceLimit: 5,
    difficulty: 7,
  };
  let id = 0;
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

          res.body.message.should.have
            .property('questionTitle')
            .eql('Array of Strings');
          res.body.message.should.have.property('problemCode').eql('ARRSTR');
          res.body.message.should.have
            .property('description')
            .eql(
              'There is a array which is made up of strings and you have to do what you have to do.'
            );
          // res.body.message.should.have.property('tags')[0].eql('Array');
          res.body.message.should.have.property('author').eql('Sanidh');
          res.body.message.should.have.property('dateAdded').eql('12-13-12');
          res.body.message.should.have.property('timeLimit').eql(2);
          res.body.message.should.have.property('sourceLimit').eql(4);
          res.body.message.should.have.property('difficulty').eql(6);
          res.body.message.should.have.property('_id');
          id = res.body.message._id;
          console.log(id);

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
        .get(`/questions/?tags=Graph&tags=Strings`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message[0].should.have
            .property('questionTitle')
            .eql('String of Arrays');
          res.body.message[0].should.have.property('problemCode').eql('STRARR');
          res.body.message[0].should.have
            .property('description')
            .eql(
              'There is a array which is made up of strings and you have to do what you have to do.'
            );
          // res.body.message[0].should.have.property('tags')[0].eql('Graph');
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
});
