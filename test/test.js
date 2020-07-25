const chai = require('chai');
const chaiHttp = require('chai-http');
const Question = require('../server/models/questionModel');
const { server } = require('../server/server');

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
        .post('/questions/post')
        .send(questionDetails)
        .end((err, res) => {
          console.log('lol');
          console.log(res);
          res.should.have.statusCode(201);
          res.body.should.have.property('message').eql('Question Created');
          done();
        });
    });
  });

  describe('/GET student', () => {
    it('it should get question', (done) => {
      chai
        .request(server)
        .get('/questions/get')
        .end((err, res) => {
          console.log(res.body);
          console.log('lol1');
          res.should.have.status(200);
          res.body.should.have.property(message).eql(questionDetails);
          res.body.data.should.be.an('Object');
          done();
        });
    });
  });
});
