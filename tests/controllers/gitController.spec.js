var rewire = require('rewire');
var GitCtrl = rewire('../../controllers/gitController');
var gitController = GitCtrl();
var chai = require('chai');
var sinon = require('sinon');
chai.should();

var getUser;
describe('gitController', function () {
  beforeEach(function () {
    var gitService = GitCtrl.__get__('gitService');
    getUser = sinon.spy(gitService, 'getUser');
    GitCtrl.__set__('gitService', gitService);
  });

  it.only(`should get user and repos from git service`, function (done) {
    this.timeout(5000);
    var req = { params: { userId: 'Saif-Shines' } };
    var res = { json: test };

    function test(user) {
      console.log(getUser.getCall(0).args);
      user.login.should.equal('Saif-Shines');
      done();
    }

    gitController.userGet(req, res);
  });
});
