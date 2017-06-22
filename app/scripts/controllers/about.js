'use strict';

/**
 * @ngdoc function
 * @name kasperProductionsdashboardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kasperProductionsdashboardApp
 */
angular.module('kasperProductionsdashboardApp')
  .controller('AboutCtrl', function ($scope, ApiManager) {

    $scope.isLoggedIn = function () {
      return ApiManager.getUser() != null;
    }
  });
