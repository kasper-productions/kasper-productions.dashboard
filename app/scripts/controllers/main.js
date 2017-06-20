'use strict';

/**
 * @ngdoc function
 * @name kasperProductionsdashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kasperProductionsdashboardApp
 */
angular.module('kasperProductionsdashboardApp')
  .controller('MainCtrl', function ($scope, ApiManager) {
    
    $scope.isLoggedIn = function () {
      return ApiManager.getUser() != null;
    }
  });
