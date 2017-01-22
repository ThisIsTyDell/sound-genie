function AccountService($http, $timeout) {

  first_name = ''

  this.getAccount = function(id) {
    return $http.get('accounts/show')
  }

  this.updateAccount = function(ctrl) {
    return $http.patch('accounts/update', { data: ctrl }).then($timeout(this.getAccount, 1000))
  }
  
}
 
angular
    .module('myApp')
    .service('AccountService', AccountService);