$(function() {
  $('.view-library').click(function() {
    $('.book-list, .book-list-close, main').addClass('open')
    $('body').addClass('stuck')
  })

  $('.book-list-close').click(function() {
    $(this).removeClass('open')
    $('.book-list, main').removeClass('open')
    $('body').removeClass('stuck')
  })
});

$(window).load(function() {
  $('body').addClass('active')
})