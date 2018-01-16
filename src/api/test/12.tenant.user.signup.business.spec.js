import './testHelpers';
import pgPool from '../../../database/connector';
import app from '../../../server';

describe('tenant user signup business', function () { // eslint-disable-line
  this.timeout(10000);
  beforeEach(async () => {
    this.basicAuth = new Buffer(`${tenants.local_test_tenant.id}:${tenants.local_test_tenant.pass}`).toString('base64');
    this.user = {
      username: 'user@test.com',
      password: 'testpass',
    };
    this.new_pass = 'newpass';
    this.agent = chai.request.agent(app);

    await pgPool.query('delete from starcedu_auth.users');
    await pgPool.query('delete from starcedu_auth.logins');
    await pgPool.query('delete from starcedu_auth.oauth2users');
    return Promise.resolve();
  });

  it('can signup', async () => {
    await chai.request(app)
      .post('/api/tenant/user/signup')
      .set(serverConfig.auth.tenantHeader, `basic ${this.basicAuth}`)
      .send(this.user)
      .then((res) => {
        res.should.have.status(200);
        res.body.message.should.equal('register successfully');
        res.body.data.should.have.property('token');
      });
  });

  it('can not signup without tenant authentication', () => {
    return chai.request(app)
      .post('/api/tenant/user/signup')
      .send(this.user)
      .then(null, (err) => {
        err.should.have.status(401);
      });
  });
});
