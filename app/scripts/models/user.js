/**
 * Created by kawika on 6/21/17.
 */
var app = angular.module('kasperProductionsdashboardApp.userModel', []);

app.factory('User', function () {

  var User = function(token, name, email, isAdmin, id) {
    this.token = token;
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
    this.id = id;
  };

  User.prototype = {};

  return User;
});