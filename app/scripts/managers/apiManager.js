/**
 * Created by kawika on 6/19/17.
 */
var app = angular.module('kasperProductionsdashboardApp.apiManager', []);

app.factory('ApiManager', function () {

  var user = null;

  var apiManager = {};

  //temp param
  //TODO create user model
  apiManager.setUser = function (name) {
    user = name;
  };
  
  apiManager.getUser = function () {
    return user;
  };

  return apiManager;
});


