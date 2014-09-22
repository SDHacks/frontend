'use strict';

var app = angular.module('sdhacks', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'wu.masonry', 'ui.jq']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      abstract: true,
      url: '/',
      templateUrl: 'partials/main.html'
    })
    .state('home.contact', {
      url: '',
      templateUrl: 'partials/contact/form.html'
    })
    .state('home.contact-submit', {
      url: '',
      template: '<h4 style="text-align: center;">Thank you for your message!</h4>'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'partials/register.html'
    });

  $urlRouterProvider.otherwise('/');
});
