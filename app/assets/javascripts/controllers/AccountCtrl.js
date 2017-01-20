function AccountCtrl(AccountService) {
  var ctrl = this;

  ctrl.account = '';

  AccountService
    .getAccount()
    .then(function(res) {
      ctrl.account = res.data.account
    })

}

angular
  .module('myApp')
  .controller('AccountCtrl', AccountCtrl)