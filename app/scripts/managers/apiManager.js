/**
 * Created by kawika on 6/19/17.
 */
var app = angular.module('kasperProductionsdashboardApp.apiManager', []);

app.factory('ApiManager', function ($q) {

  var BASE_URL = "api.com";
  var SECRET = "api.secret";
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

  apiManager.postRegisterUser = function (email, password) {
    var deferred = $q.defer();
    var request = new XMLHttpRequest();

    var urlPOST = BASE_URL + '/register';

    var data = JSON.stringify(
      {
        "email": email,
        "password": password,
        "secret": SECRET
      }
    );

    request.open("POST", urlPOST);
    request.setRequestHeader("Content-Type", "application/json");

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status == 201) {
          deferred.resolve(request);
        } else {
          deferred.reject(request);
        }
      }
    };
    request.send(data);
  };

  return apiManager;
});


