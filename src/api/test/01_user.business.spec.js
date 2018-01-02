import './testHelpers';
import pgPool from '../../../database/connector';
import app from '../../../server';

const validCredentials = { username: 'ccnuyan@gmail.com', password: '123456' };

describe('USER BUSINESS', function () { // eslint-disable-line
  this.timeout(10000);
  beforeEach(async () => {
    await pgPool.query('delete from starcedu_auth.users'); // eslint-disable-line
    return pgPool.query('delete from starcedu_auth.oauth2users'); // eslint-disable-line
  });

  describe('when signup with correct credentials', () => {
    it('returns correct signup message', () => {
      return chai.request(app)
        .post('/api/user/signup')
        .send(validCredentials)
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          res.body.data.should.have.property('token');
          return res;
        });
    });
  });

  describe('with incorrect credentials', () => {
    it('returns correct error message when password not provided', () => {
      return chai.request(app)
        .post('/api/user/signup')
        .send({
          username: 'testpass',
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(111);
          res.body.message.should.equal('password empty');
          return res;
        });
    });

    it('returns correct error message when username not provided', () => {
      return chai.request(app)
        .post('/api/user/signup')
        .send({
          password: 'testpass',
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(101);
          res.body.message.should.equal('username empty');
          return res;
        });
    });

    it('returns correct error message when username illigal', () => {
      return chai.request(app)
        .post('/api/user/signup')
        .send({
          username: 'testpass',
          password: 'testpass',
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(102);
          res.body.message.should.equal('provided username illigal');
          return res;
        });
    });

    it('returns correct error message when password illigal', () => {
      return chai.request(app)
        .post('/api/user/signup')
        .send({
          username: 'naerns@nae.nbc',
          password: '?*na_',
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(112);
          res.body.message.should.equal('provided password illigal');
          return res;
        });
    });
  });

  describe('after signup', function () { // eslint-disable-line
    beforeEach(() => {
      this.user = {
        username: 'user@test.com',
        password: 'testpass',
      };
      this.new_pass = 'newpass';
      return chai.request(app)
        .post('/api/user/signup')
        .send(this.user)
        .then((res) => {
          res.should.have.status(200);
          this.signuptoken = res.body.data.token;
          return res;
        });
    });

    it('could signin with correct credentials', () => {
      return chai.request(app)
        .post('/api/user/signin')
        .send(this.user)
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          res.body.data.should.have.property('token');
          return res;
        });
    });

    it('could signin with capitalized username', () => {
      return chai.request(app)
        .post('/api/user/signin')
        .send({
          ...this.user,
          username: this.user.username.toUpperCase(),
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          res.body.data.should.have.property('token');
          return res;
        });
    });

    it('could update password', () => {
      return chai.request(app)
        .put('/api/user/update_password')
        .set('authorization', `bearer ${this.signuptoken}`)
        .send({
          old_password: this.user.password,
          new_password: this.new_pass,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          return res;
        });
    });

    afterEach(() => {
      return pgPool.query('delete from starcedu_auth.users'); // eslint-disable-line
    });
  });

  afterEach(async () => {
    await pgPool.query('delete from starcedu_auth.users'); // eslint-disable-line
    return pgPool.query('delete from starcedu_auth.oauth2users'); // eslint-disable-line
  });
});
