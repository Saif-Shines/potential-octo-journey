var gitController = require('../../controllers/gitController')();
var chai = require('chai');
chai.should();

describe('gitController', function () {
  it.only(`should get user and repos from git service`, function (done) {
    var req = { params: { userId: 'Saif-Shines' } };
    var res = { json: test };

    function test(user) {
      user.login.should.equal('Saif-Shines');
      done();
    }

    gitController.userGet(req, res);
  });
});
