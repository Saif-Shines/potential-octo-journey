var chai = require('chai'),
  sinon = require('sinon');
chai.should();
var gitService = require('../../services/gitService')();

describe('Git Service', function () {
  describe('Get User', function () {
    it(`should return a user and repo`, async function () {
      this.timeout(10000);
      let user = await gitService.getUser('Saif-Shines');
      user.login.should.equal('Saif-Shines');
      user.should.have.property('repos');
    });
  });
});
