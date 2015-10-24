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
  angular.module("jakd-undertow", ['ngRoute'])

  .run(function($http, $rootScope){
    $http.get('/apis/questions.json')
      .then(function(response){
        $rootScope.questions = response.data;
      });
    }) // END run function (questions)

    .run(function($http, $rootScope) {
      $http.get('/apis/members.json')
        .then(function(response){
          $rootScope.member = response.data;
        });
    }) // END RUN FUNCTION (member)

  ; // END MODULE
})(); // END IIFE
