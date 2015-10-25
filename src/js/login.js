// tabs
$('nav > a').on('click', function(){
  var panelId = $(this).attr('href');

  $(this).add(panelId)
    .addClass('active')
  .siblings()
    .removeClass('active');

  }).filter('[href="#login"]')
    .trigger('click');

// account data
$http.post('https://jakd.herokuapp.com/members.json', data, config).then(successCallback, errorCallback);
