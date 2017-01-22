function AccountService($http) {

  this.getAccount = function(id) {

    return $http.get('accounts/show')
  }
  
}
 
angular
    .module('myApp')
    .service('AccountService', AccountService);