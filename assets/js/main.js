
$( document ).ready(function() {
    $('.item-hover').hover( function() {
      $(this).find('.item-hover-caption').fadeIn(300);
    }, function() {
      $(this).find('.item-hover-caption').fadeOut(100);
    })

});
