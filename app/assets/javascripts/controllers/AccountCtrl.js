function AccountCtrl(AccountService) {
  var ctrl = this;

  ctrl.account = {};

  AccountService
    .getAccount()
    .then(function(res) {
      ctrl.account = {
        first_name: res.data.first_name,
        last_name: res.data.last_name,
        label: res.data.label_name,
        credits: res.data.credits
      }
    })

}

angular
  .module('myApp')
  .controller('AccountCtrl', AccountCtrl)