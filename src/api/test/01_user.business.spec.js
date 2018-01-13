import './testHelpers';
import pgPool from '../../../database/connector';
import app from '../../../server';

const validCredentials = {
  username: 'user@test.com',
  password: '123456',
};

describe('user business', function () { // eslint-disable-line
  this.timeout(10000);
  beforeEach(async () => {
    await pgPool.query('delete from starcedu_auth.logins'); // eslint-disable-line
    await pgPool.query('delete from starcedu_auth.users'); // eslint-disable-line
    return pgPool.query('delete from starcedu_auth.oauth2users'); // eslint-disable-line
  });

  describe('signup', () => {
    it('should be ok when signup with incorrect credentials', () => {
      return chai.request(app)
        .post('/api/local/user/signup')
        .send({
          username: 'justusername',
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(111);
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
          res.body.code.should.equal(101);
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
          res.body.code.should.equal(102);
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
          res.body.code.should.equal(0);
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
        res.body.code.should.equal(112);
        res.body.message.should.equal('provided password illigal');
        return res;
      });
  });

  describe('after signup', function () { // eslint-disable-line
    beforeEach(async () => {
      await pgPool.query('delete from starcedu_auth.users');
      this.user = {
        username: 'user@test.com',
        password: 'testpass',
      };
      this.new_pass = 'newpass';
      this.agent = chai.request.agent(app);
      return this.agent
        .post('/api/local/user/signup')
        .send(this.user)
        .then((res) => {
          res.should.have.status(200);
          res.should.have.cookie('connect.sid');
          return res;
        });
    });

    it('should not be able to signup with same credentials', () => {
      return chai.request(app)
        .post('/api/local/user/signup')
        .send(this.user)
        .then((res) => {
          res.should.have.status(200);
          res.body.code.should.equal(400);
          return res;
        });
    });

    it('should be ok when signin with correct credentials', () => {
      return chai.request(app)
        .post('/api/local/user/signin')
        .send(this.user)
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          return res;
        });
    });

    it('should be ok when signin with capitalized username', () => {
      return chai.request(app)
        .post('/api/local/user/signin')
        .send({
          ...this.user,
          username: this.user.username.toUpperCase(),
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          return res;
        });
    });

    it('should be able to update password', () => {
      return this.agent
        .put('/api/local/user/update_password')
        .send({
          old_password: this.user.password,
          new_password: this.new_pass,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          res.should.not.have.cookie('connect.sid');
          return res;
        });
    });

    it('should be able to signin with auto signin', async () => {
      const agent = chai.request.agent(app);
      await agent
        .post('/api/local/user/signin')
        .send({
          ...this.user,
          autoSignin: true,
        })
        .then((res1) => {
          res1.should.have.status(200);
          res1.body.should.be.a('object');
          res1.body.code.should.equal(0);
          res1.should.have.cookie('connect.sid');
          return res1;
        });
      return agent
        .get('/api/local/user/me')
        .then((res2) => {
          res2.should.have.status(200);
          res2.body.should.be.a('object');
          res2.body.data.username.should.equal(this.user.username);
          return res2;
        });
    });
  });
});
