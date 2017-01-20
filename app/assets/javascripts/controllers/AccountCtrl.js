function AccountCtrl(AccountService) {
  var ctrl = this;
  
  ctrl.first_name = ''
  ctrl.last_name = ''
  ctrl.label_name = ''
  ctrl.credits = ''

  AccountService
    .getAccount()
    .then(function(res) {
      ctrl.first_name = res.data.first_name
      ctrl.last_name = res.data.last_name
      ctrl.label = res.data.label_name
      ctrl.credits = res.data.credits
      
    });

}

angular
  .module('myApp')
  .controller('AccountCtrl', AccountCtrl)