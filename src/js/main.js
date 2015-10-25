$('.home-page-tabs > a').on('click', function(){
  var panelId = $(this).attr('href');

  $(this).add(panelId)
    .addClass('active')
  .siblings()
    .removeClass('active');

  }).filter('[href="#home"]')
    .trigger('click');

$('.q-vote > a[href] > i').on('click', function(){
  $('i').removeClass('active');
  $(this).addClass('active');
});



;(function(){ // START IIFE
  angular.module("jakd-undertow", ['ngRoute'], function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'home.html'
      })
      .when('/home', {
        templateUrl: 'home.html'
      })
      .when('/login', {
        templateUrl: 'login.html'
      })
      .when('/signup', {
        templateUrl: 'signup.html'
      })
      .when('/questions', {
        templateUrl: 'questions.html'
      })
      .when('/answers', {
        templateUrl: 'answers.html'
      })
      .when('/ask', {
        templateUrl: 'ask.html'
      });
  })


  .run(function($http, $rootScope){
    $http.get('https://jakd.herokuapp.com/questions.json')
    // $http.get('/apis/questions.json')
      .then(function(response){
        $rootScope.questions = response.data;
      });
    }) // END run function (questions)

    .run(function($http, $rootScope) { // TODO: make work
      $http.get('/apis/members.json')
        .then(function(response){
          $rootScope.member = response.data;
        });
    }) // END RUN FUNCTION (member)


  ; // END MODULE
})(); // END IIFE
