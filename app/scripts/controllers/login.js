'use strict';

/**
 * @ngdoc function
 * @name kasperProductionsdashboardApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the kasperProductionsdashboardApp
 */
angular.module('kasperProductionsdashboardApp')
  .controller('LoginCtrl', function ($scope, ApiManager) {

    $scope.vm = {};

    $scope.loginUser = function () {
      ApiManager.postLoginUser($scope.vm.email, $scope.vm.password);
    }
  });
