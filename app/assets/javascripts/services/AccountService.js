function AccountService($http) {

  this.getAccount = function(id) {

    return $http.get('users/' + id)
  }
}
 
angular
    .module('myApp')
    .service('AccountService', AccountService);