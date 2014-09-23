'use strict';

app.controller('SponsorsCtrl',
  ['$scope', 'Sponsors', function ($scope, Sponsors) {

    var levels = [
      'partner',
      'platinum',
      'gold',
      'silver',
      'bronze'
    ];

    $scope.sponsors = Sponsors.getSponsors();

    $scope.levels = levels;

  }]);
