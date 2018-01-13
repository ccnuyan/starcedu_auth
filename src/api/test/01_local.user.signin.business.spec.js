import './testHelpers';
import pgPool from '../../../database/connector';
import app from '../../../server';

describe('local user signin business', function () { // eslint-disable-line
  this.timeout(10000);
  beforeEach(async () => {
    await pgPool.query('delete from starcedu_auth.users');
    await pgPool.query('delete from starcedu_auth.logins');
    await pgPool.query('delete from starcedu_auth.oauth2users');

    this.user = {
      username: 'user@test.com',
      password: 'testpass',
    };
    this.new_pass = 'newpass';

    this.agent = chai.request.agent(app);
    await this.agent
      .post('/api/local/user/signup')
      .send(this.user)
      .then((res) => {
        res.should.have.status(200);
        res.should.have.cookie('connect.sid');
      });
    return Promise.resolve();
  });

  it('can update password', async () => {
    return this.agent.put('/api/local/user/update_password')
      .send({
        old_password: this.user.password,
        new_password: this.new_pass,
      })
      .then((res) => {
        res.should.have.status(200);
        res.should.not.have.cookie('connect.sid');
      });
  });

  it('can signin with correct credentials', () => {
    return chai.request(app).post('/api/local/user/signin')
      .send(this.user)
      .then((res) => {
        res.should.have.status(200);
        res.body.message.should.equal('authenticate successfully');
      });
  });

  it('can signin with capitalized username', () => {
    return chai.request(app).post('/api/local/user/signin')
      .send({
        ...this.user,
        username: this.user.username.toUpperCase(),
      })
      .then((res) => {
        res.should.have.status(200);
      });
  });

  it('can signin with auto signin', async () => {
    const agent = chai.request.agent(app);
    await agent.post('/api/local/user/signin')
      .send({
        ...this.user,
        autoSignin: true,
      })
      .then((res1) => {
        res1.should.have.status(200);
        res1.should.have.cookie('connect.sid');
      });
    return agent.get('/api/local/user/me')
      .then((res2) => {
        res2.should.have.status(200);
        res2.body.data.username.should.equal(this.user.username);
      });
  });
});
