'use strict';

app.controller('StatsCtrl',
  ['$scope', function ($scope) {
    $scope.animation = 'hidden';
    $scope.options = {
      offset: '25%'
    };

    var stats = {
      hours: 36,
      hackers: 1000,
      companies: 42,
      'in prizes': '$20000'
    };

    $scope.stats = stats;

    $scope.pop = function() {
      $scope.animation = 'animated fadeIn';
      $scope.$apply();
      console.log($scope.animated);
    };
  }]);
