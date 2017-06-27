'use strict';

/**
 * @ngdoc function
 * @name kasperProductionsdashboardApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the kasperProductionsdashboardApp
 */
angular.module('kasperProductionsdashboardApp')
  .controller('PhotosCtrl', function ($scope, ApiManager) {

    $scope.albums = [];

    $scope.$on('$viewContentLoaded', function () {
      
    });

    $scope.isLoggedIn = function () {
      return ApiManager.getUser() != null;
    };
  });
