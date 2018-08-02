$(function() {
  $('.view-library').click(function() {
    $('.book-list, .book-list-close').addClass('open')
    $('body').addClass('stuck')
  })
  $('.book-list-close').click(function() {
    $(this).removeClass('open')
    $('.book-list').removeClass('open')
    $('body').removeClass('stuck')
  })
});

$(window).load(function() {
  $('body').addClass('active')
})