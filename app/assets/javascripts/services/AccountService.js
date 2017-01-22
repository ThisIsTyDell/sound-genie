function AccountService($http) {

  first_name = ''

  this.getAccount = function(id) {
    return $http.get('accounts/show')
  }

  this.updateAccount = function(ctrl) {
    $http({
      method: 'PATCH',
      dataType: 'json',
      url: 'accounts/update',
      data: { data: ctrl },
      headers: {"Content-Type": "application/json"}
    })
    .success(function(ctrl) {
      first_name = ctrl.first_name
    })
  }
  
}
 
angular
    .module('myApp')
    .service('AccountService', AccountService);