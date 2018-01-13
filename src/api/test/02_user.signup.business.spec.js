import './testHelpers';
import pgPool from '../../../database/connector';
import app from '../../../server';

const validCredentials = {
  username: 'user@test.com',
  password: '123456',
};

describe('user signup business', function () { // eslint-disable-line
  this.timeout(10000);
  beforeEach(async () => {
    await pgPool.query('delete from starcedu_auth.logins'); // eslint-disable-line
    await pgPool.query('delete from starcedu_auth.users'); // eslint-disable-line
    return pgPool.query('delete from starcedu_auth.oauth2users'); // eslint-disable-line
  });

  it('should be ok when signup with incorrect credentials', () => {
    return chai.request(app)
        .post('/api/local/user/signup')
        .send({
          username: 'justusername',
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.equal('password empty');
          return res;
        });
  });

  it('should return error message when username not provided', () => {
    return chai.request(app)
        .post('/api/local/user/signup')
        .send({
          password: 'justpassword',
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.equal('username empty');
          return res;
        });
  });

  it('should return error message when username illigal', () => {
    return chai.request(app)
        .post('/api/local/user/signup')
        .send({
          username: 'testpass',
          password: 'testpass',
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.equal('provided username illigal');
          return res;
        });
  });

  it('should be ok when signup with correct credentials', () => {
    return chai.request(app)
        .post('/api/local/user/signup')
        .send(validCredentials)
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          return res;
        });
  });
});

it('should return error message when password illigal', () => {
  return chai.request(app)
      .post('/api/local/user/signup')
      .send({
        username: 'naerns@nae.nbc',
        password: '?*na_',
      })
      .then((res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.message.should.equal('provided password illigal');
        return res;
      });
});
