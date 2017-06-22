'use strict';

/**
 * @ngdoc function
 * @name kasperProductionsdashboardApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the kasperProductionsdashboardApp
 */
angular.module('kasperProductionsdashboardApp')
  .controller('LoginCtrl', function ($scope, ApiManager, $location) {

    $scope.vm = {};

    $scope.$on('$viewContentLoaded', function () {
      if (null != ApiManager.getUser()) {
        $location.path('/home');
      }
    });

    $scope.loginUser = function () {
      ApiManager.postLoginUser($scope.vm.email, $scope.vm.password).then(
        function (success) {
          if (success) {
            $location.path('/home');
          }
        }
      );
    }
  });
