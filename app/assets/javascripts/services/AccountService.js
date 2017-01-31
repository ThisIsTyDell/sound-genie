function AccountService($http, $timeout) {
  
  return {
    getAccount: function() {
      return $http.get('accounts/show')
    },
    createAccount: function(ctrl) {
      return $http.post('accounts/create', { data: ctrl })
    },
    updateAccount: function(ctrl) {
      return $http.patch('accounts/update', { data: ctrl })
                  .then($timeout(this.getAccount, 1000))
    }
  } 
}
 
angular
  .module('myApp')
  .service('AccountService', AccountService);