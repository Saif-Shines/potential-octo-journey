var chai = require('chai'),
  sinon = require('sinon'),
  https = require('https');
var PassThrough = require('stream').PassThrough;
chai.should();
var gitService = require('../../services/gitService')();

describe('Git Service', function () {
  describe('Get User', function () {
    beforeEach(function () {
      this.request = sinon.stub(https, 'request');
    });

    it(`should return a user and repo`, async function () {
      this.timeout(10000);
      var getJson = { login: 'Saif-Shines', repos: ['a'] };
      var gitResponse = new PassThrough();
      gitResponse.write(JSON.stringify(getJson));
      gitResponse.end();

      this.request.callsArgWith(1, gitResponse).returns(new PassThrough());
      // https.request = {};
      let user = await gitService.getUser('Saif-Shines');
      console.log(user);
      user.login.should.equal('Saif-Shines');
      user.should.have.property('repos');
    });

    afterEach(function () {
      this.request.restore();
    });
  });
});
