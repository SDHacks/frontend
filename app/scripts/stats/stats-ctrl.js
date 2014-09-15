'use strict';

app.controller('StatsCtrl',
  ['$scope', function ($scope) {

    var stats = {
      hours: 36,
      hackers: 1000,
      companies: 42,
      'in prizes': '$20000'
    };

    $scope.stats = stats;
  }]);
