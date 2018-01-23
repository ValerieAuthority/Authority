$(document).ready(function()
{
  $('.mobile-nav a').on('click', function(){
    $('nav.right-container').slideToggle();
    $(this).find('i').toggle();
  });
});
