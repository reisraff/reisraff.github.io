jQuery(document).ready(function($) {
  $('#back-to-top').on('click', function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
});