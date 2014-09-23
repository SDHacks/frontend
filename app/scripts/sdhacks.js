'use strict';

var app = angular.module('sdhacks', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'wu.masonry', 'ui.jq', 'duScroll']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      abstract: true,
      url: '/',
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl'
    })
    .state('home.contact', {
      url: '',
      templateUrl: 'partials/contact/form.html'
    })
    .state('home.contact-submit', {
      url: '',
      template: '<div class="message"><h4>Thank you for your message!</h4><br /><a class="invert" ui-sref="home.contact">Need to submit another question?</a></div>'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'partials/register.html'
    })
    .state('sponsor', {
      url: '/sponsor',
      templateUrl: 'partials/sponsor.html'
    });

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
}]);
