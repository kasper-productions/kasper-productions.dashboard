/**
 * Created by kawika on 6/19/17.
 */
var app = angular.module('kasperProductionsdashboardApp.apiManager', []);

app.factory('ApiManager', function ($q) {

  var BASE_URL = "http://localhost:3306";
  var SECRET = "29dByc4wJaKeVj2YBSXzEVvirlpwkE26";
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

    var urlPOST = BASE_URL + '/users';

    var data = JSON.stringify(
      {
        "email": email,
        "password": password,
        "access_token": SECRET
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

  apiManager.postLoginUser = function (email, password) {
    var deferred = $q.defer();
    var request = new XMLHttpRequest();

    var urlPOST = BASE_URL + '/auth';

    var data = JSON.stringify(
      {
        "access_token": SECRET
      }
    );

    request.open("POST", urlPOST);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "Basic " + btoa(email + ":" + password));

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        console.log(JSON.stringify(request));
        if (request.status == 201) {
          var response = JSON.parse(request.responseText);
          console.log(JSON.stringify(response, null, 2));
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


