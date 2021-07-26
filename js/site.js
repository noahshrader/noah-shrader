$(function () {
  $('.view-library').click(function () {
    $('.read').addClass('open')
  })

  $('.book-list-close').click(function () {
    $(this).removeClass('open')
    $('.read').removeClass('open')
  })
});

$(window).load(function () {
  $('body').addClass('active')

  $('.body-close').click(function () {
    $('body').addClass('close')
  })
})
