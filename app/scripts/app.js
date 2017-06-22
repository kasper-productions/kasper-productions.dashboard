'use strict';

/**
 * @ngdoc overview
 * @name kasperProductionsdashboardApp
 * @description
 * # kasperProductionsdashboardApp
 *
 * Main module of the application.
 */
angular
  .module('kasperProductionsdashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    // managers
    'kasperProductionsdashboardApp.apiManager',
    
    //models
    'kasperProductionsdashboardApp.userModel'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosCtrl',
        controllerAs: 'photos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
