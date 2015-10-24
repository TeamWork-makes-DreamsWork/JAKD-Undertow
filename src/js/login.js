$('.q-vote > a[href] > i').on('click', function(){
  $('i').removeClass('active');
  $(this).addClass('active');
});

$('.home-page-tabs > a').on('click', function(){
  var panelId = $(this).attr('href');

  $(this).add(panelId)
    .addClass('active')
  .siblings()
    .removeClass('active');
  });
