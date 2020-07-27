process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const Question = require('../server/models/questionModel');
const { server } = require('../server/server');
let should = chai.should();

console.log('server is ', server);

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
          console.log('lol');
          console.log(res.should);
          res.should.have.status(201);
          res.body.should.have.property('message').eql('Question Created');
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
});
