$('.home-page-tabs > a').on('click', function(){
  var panelId = $(this).attr('href');
  
  $(this).add(panelId)
    .addClass('active')
  .siblings()
    .removeClass('active');

  }).filter('[href="#home"]')
    .trigger('click');
