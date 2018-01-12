import './testHelpers';
import pgPool from '../../../database/connector';
import oauthServices from '../../services/oauthServices';
import userServices from '../../services/userServices';
import config from '../../../config';
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

const basicAuth = new Buffer(`${tenants.local_test_tanant.id}:${tenants.local_test_tanant.pass}`).toString('base64');

describe('tenant oauth business', function () { // eslint-disable-line
  this.timeout(10000);
  beforeEach(async () => {
    await pgPool.query('delete from starcedu_auth.logins'); // eslint-disable-line
    await pgPool.query('delete from starcedu_auth.users'); // eslint-disable-line
    return pgPool.query('delete from starcedu_auth.oauth2users'); // eslint-disable-line
  });

  describe('oauth signup', () => {
    it('should not login when no oauth user record', () => {
      return chai.request(app)
        .post('/api/oauth/tenant/oauth_signin')
        .set(config.auth.tenantHeader, `basic ${basicAuth}`)
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

    it('should not signup when no profile is provided', () => {
      return chai.request(app)
        .post('/api/oauth/tenant/oauth_signup')
        .set(config.auth.tenantHeader, `basic ${basicAuth}`)
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

    it('should return correct signup message when oauth signup', () => {
      return chai.request(app)
        .post('/api/oauth/tenant/oauth_signup')
        .set(config.auth.tenantHeader, `basic ${basicAuth}`)
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

  describe('after oauth signup but not bound', function () { // eslint-disable-line
    beforeEach(async () => {
      this.oauthUser = await oauthServices.add_oauth_user({ ...oauthUser, ...profile1 });
      return Promise.resolve();
    });

    it('should return correct update message when oauth signup', () => {
      return chai.request(app)
        .post('/api/oauth/tenant/oauth_signup')
        .set(config.auth.tenantHeader, `basic ${basicAuth}`)
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

    it('should not be able to signin', () => {
      return chai.request(app)
        .post('/api/oauth/tenant/oauth_signin')
        .set(config.auth.tenantHeader, `basic ${basicAuth}`)
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
        .post('/api/oauth/tenant/bind_signin')
        .set(config.auth.tenantHeader, `basic ${basicAuth}`)
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

    it('should be able to signin', () => {
      return chai.request(app)
        .post('/api/oauth/tenant/oauth_signin')
        .set(config.auth.tenantHeader, `basic ${basicAuth}`)
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

    it('should not be able to signin without client credentials', () => {
      return chai.request(app)
        .post('/api/oauth/tenant/oauth_signin')
        .send({
          ...oauthUser,
        })
        .catch((err) => {
          err.response.status.should.equal(401);
        });
    });
  });

  describe('after oauth signup', function () { // eslint-disable-line
    beforeEach(async () => {
      this.user = await userServices.register(user);
      this.oauthUser = await oauthServices.add_oauth_user({ ...oauthUser, ...profile1 });
      return chai.request(app)
      .post('/api/user/signin')
      .send(user)
      .then((res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.code.should.equal(0);
        res.body.message.should.equal('authenticate successfully');
        res.body.data.should.have.property('token');
        this.userToken = res.body.data.token;
        return res;
      });
    });

    it('should bind if provided token', () => {
      const headers = {};
      headers[config.auth.userHeader] = `bearer ${this.userToken}`;
      headers[config.auth.tenantHeader] = `basic ${basicAuth}`;
      return chai.request(app)
        .post('/api/oauth/tenant/bind_signin')
        .set(headers)
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

    it('should return correct message when bind signin', () => {
      return chai.request(app)
        .post('/api/oauth/tenant/bind_signin')
        .set(config.auth.tenantHeader, `basic ${basicAuth}`)
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

    it('should return correct message when bind signup', () => {
      return chai.request(app)
        .post('/api/oauth/tenant/bind_signup')
        .set(config.auth.tenantHeader, `basic ${basicAuth}`)
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

    it('should not signin again', () => {
      return chai.request(app)
        .post('/api/oauth/tenant/oauth_signin')
        .set(config.auth.tenantHeader, `basic ${basicAuth}`)
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

  afterEach(async () => {
    await pgPool.query('delete from starcedu_auth.users'); // eslint-disable-line
    return pgPool.query('delete from starcedu_auth.oauth2users'); // eslint-disable-line
  });
});
