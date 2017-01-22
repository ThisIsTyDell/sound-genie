function AccountService($http, $timeout) {

  first_name = ''

  this.getAccount = function(id) {
    return $http.get('accounts/show')
  }

  this.updateAccount = function(ctrl) {
    return $http.patch('accounts/update', { data: ctrl }).then($timeout(this.getAccount, 1000))


    //var accountData = ctrl
    //$http({
    //  method: 'PATCH',
    //  dataType: 'json',
    //  url: 'accounts/update',
    //  data: { data: ctrl },
    //  headers: {"Content-Type": "application/json"}
    //})
    //.success(function() {
      
      
    //})
    
  }
  
}
 
angular
    .module('myApp')
    .service('AccountService', AccountService);