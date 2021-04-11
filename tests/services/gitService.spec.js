var gitService = require('../../services/gitService')();

describe('Git Service', function () {
  describe('Get User', function () {
    it(`should return a user and repo`, async function () {
      let user = await gitService.getUser('Saif-Shines');
      console.log(user);
    });
  });
});
