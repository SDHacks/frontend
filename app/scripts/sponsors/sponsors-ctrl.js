'use strict';

app.controller('SponsorsCtrl',
  ['$scope', function ($scope) {

    var levels = [
      'partner',
      'platinum',
      'gold',
      'silver',
      'bronze'
    ];

    var sponsors = [
      {
        name: 'Google',
        image: 'images/sponsors/google.png',
        level: 'partner'
      }
      ,
      {
        name: 'Twilio',
        image: 'images/sponsors/twilio.png',
        level: 'bronze'
      }
      ,
      {
        name: 'Swipe Development',
        image: 'images/sponsors/swipedevelopment.png',
        level: 'bronze'
      }
    ];

    $scope.sponsors = sponsors;

    $scope.levels = levels;

  }]);
