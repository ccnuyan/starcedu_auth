import './testHelpers';
import pgPool from '../../../database/connector';
import oauthServices from '../../services/oauthServices';
import userServices from '../../services/userServices';

import app from '../../../server';

const user = {
  username: 'user@test.com',
  password: 'testpass',
};

const oauthUser = {
  provider: 'qq_mobile',
  unique_provider_id: '12345678',
};

const profile1 = {
  profile: {
    nickname: 'lala',
  },
};

const profile2 = {
  profile: {
    nickname: 'bobo',
  },
};

describe('CLIENT OAUTH BUSINESS', function () { // eslint-disable-line
  this.timeout(10000);
  beforeEach(async () => {
    await pgPool.query('delete from starcedu_auth.users'); // eslint-disable-line
    return pgPool.query('delete from starcedu_auth.oauth2users'); // eslint-disable-line
  });

  describe('when no oauth user record', () => {
    it('can not signin', () => {
      return chai.request(app)
        .post('/api/oauth/oauth_signin')
        .send({
          ...oauthUser,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(400);
          res.body.message.should.equal('oauth user not exist');
          return res;
        });
    });
  });

  describe('when no profile is provided', () => {
    it('returns correct error message when oauth signup', () => {
      return chai.request(app)
        .post('/api/oauth/oauth_signup')
        .send({
          ...oauthUser,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(181);
          res.body.message.should.equal('profile empty');
          return res;
        });
    });
  });

  describe('when everything is correct', () => {
    it('returns correct signup message when oauth signup', () => {
      return chai.request(app)
        .post('/api/oauth/oauth_signup')
        .send({
          ...oauthUser,
          ...profile1,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          res.body.message.should.equal('oauth user created');
          res.body.data.profile.nickname.should.equal('lala');
          return res;
        });
    });
  });

  describe('after oauth signup', function () { // eslint-disable-line
    beforeEach(async () => {
      this.oauthUser = await oauthServices.add_oauth_user({ ...oauthUser, ...profile1 });
      return Promise.resolve(); // eslint-disable-line
    });

    it('returns correct update message when oauth signup', () => {
      return chai.request(app)
        .post('/api/oauth/oauth_signup')
        .send({
          ...oauthUser,
          ...profile2,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          res.body.message.should.equal('oauth user updated');
          res.body.data.profile.nickname.should.equal('bobo');
          return res;
        });
    });

    it('can not signin', () => {
      return chai.request(app)
        .post('/api/oauth/oauth_signin')
        .send({
          ...oauthUser,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(400);
          res.body.message.should.equal('oauth user not bound');
          return res;
        });
    });
  });

  describe('after oauth signup but not bound', function () { // eslint-disable-line
    beforeEach(async () => {
      this.user = await userServices.register(user);
      this.oauthUser = await oauthServices.add_oauth_user({ ...oauthUser, ...profile1 });
      return Promise.resolve();
    });

    it('can bind if provided token', async () => {
      await chai.request(app)
        .post('/api/user/signin')
        .send({
          username: 'user@test.com',
          password: 'testpass',
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          res.body.message.should.equal('authenticate successfully');
          res.body.data.should.have.property('token');
          this.userToken = res.body.data.token;
          return res;
        });
      return chai.request(app)
        .post('/api/oauth/bind_signin')
        .set({
          authorization: `bearer ${this.userToken}`,
        })
        .send({
          password: 'testpass',
          oauth_user_id: this.oauthUser.id,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          res.body.message.should.equal('authenticate and bind successfully');
          res.body.data.should.have.property('token');
          return res;
        });
    });

    it('returns correct message when bind signin', () => {
      return chai.request(app)
        .post('/api/oauth/bind_signin')
        .send({
          ...user,
          oauth_user_id: this.oauthUser.id,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          res.body.message.should.equal('authenticate and bind successfully');
          res.body.data.should.have.property('token');
          return res;
        });
    });

    it('returns correct message when bind signup', () => {
      return chai.request(app)
        .post('/api/oauth/bind_signup')
        .send({
          username: 'newuser@test.com',
          password: 'testpass',
          oauth_user_id: this.oauthUser.id,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          res.body.message.should.equal('register successfully');
          res.body.data.should.have.property('token');
          return res;
        });
    });

    it('can not signin', () => {
      return chai.request(app)
        .post('/api/oauth/oauth_signin')
        .send({
          ...oauthUser,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(400);
          res.body.message.should.equal('oauth user not bound');
          return res;
        });
    });
  });

  describe('after oauth signup and bound', function () { // eslint-disable-line
    beforeEach(async () => {
      this.user = await userServices.register(user);
      this.oauthUser = await oauthServices.add_oauth_user({ ...oauthUser, ...profile1 });
      return chai.request(app)
        .post('/api/oauth/bind_signin')
        .send({
          ...user,
          oauth_user_id: this.oauthUser.id,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          res.body.message.should.equal('authenticate and bind successfully');
          res.body.data.should.have.property('token');
          return res;
        });
    });

    it('can signin', () => {
      return chai.request(app)
        .post('/api/oauth/oauth_signin')
        .send({
          ...oauthUser,
        })
        .then((res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.code.should.equal(0);
          res.body.message.should.equal('oauth signin successfully');
          return res;
        });
    });
  });

  afterEach(async () => {
    await pgPool.query('delete from starcedu_auth.users'); // eslint-disable-line
    return pgPool.query('delete from starcedu_auth.oauth2users'); // eslint-disable-line
  });
});
