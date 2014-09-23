'use strict';

app.controller('StatsCtrl',
  ['$scope', 'Sponsors', function ($scope, Sponsors) {
    $scope.animation = 'hidden';
    $scope.options = {
      offset: '25%'
    };

    var stats = {
      hours: 36,
      hackers: 1000 + '+',
      companies: 5*(Math.floor(Math.abs(Sponsors.getCount()/5))) + '+',
      'in prizes': '$1,000s'
    };

    $scope.stats = stats;

    $scope.pop = function() {
      $scope.animation = 'animated fadeIn';
      $scope.$apply();
      console.log($scope.animated);
    };
  }]);
