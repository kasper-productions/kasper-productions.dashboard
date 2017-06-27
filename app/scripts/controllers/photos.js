'use strict';

/**
 * @ngdoc function
 * @name kasperProductionsdashboardApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the kasperProductionsdashboardApp
 */
angular.module('kasperProductionsdashboardApp')
  .controller('PhotosCtrl', function ($scope, ApiManager, $uibModal) {

    $scope.albums = [];

    $scope.$on('$viewContentLoaded', function () {

    });

    $scope.isLoggedIn = function () {
      return ApiManager.getUser() != null;
    };

    $scope.createAlbum = function () {
      $uibModal.open({
        templateUrl: 'createAlbumModal.html',
        windowClass: 'createAlbumModal',
        scope: $scope
      });
    }

  });
