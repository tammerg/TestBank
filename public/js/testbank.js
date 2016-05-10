var app = angular.module('testBankApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
       url: '/',
       templateUrl: 'partial-home.html'
     })
   .state('login', {
      url: '/login',
      templateUrl: 'partial-login.html'
    })
    .state('register', {
       url: '/register',
       templateUrl: 'partial-register.html'
     });
  });

app.controller('mainController', function(){

});
