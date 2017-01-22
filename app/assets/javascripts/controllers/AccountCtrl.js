function AccountCtrl(AccountService, $http) {
  var ctrl = this;
  
  ctrl.first_name = ''
  ctrl.last_name = ''
  ctrl.label = ''
  ctrl.credits = ''

  AccountService
    .getAccount()
    .then(function(res) {
      ctrl.first_name = res.data.first_name
      ctrl.last_name = res.data.last_name
      ctrl.label = res.data.label_name
      ctrl.credits = res.data.credits
      
    });

  ctrl.submit = function() {
    $http({
      method: 'PATCH',
      dataType: 'json',
      url: 'accounts/update',
      data: {data: ctrl},
      headers: {"Content-Type": "application/json"}
    })
  }

}

angular
  .module('myApp')
  .controller('AccountCtrl', AccountCtrl)