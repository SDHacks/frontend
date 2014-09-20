'use strict';

var app = angular.module('sdhacks', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'wu.masonry', 'ui.jq']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/main.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'partials/register.html'
    });

  $urlRouterProvider.otherwise('/');
});
