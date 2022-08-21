function scrollProgressBar() {
  var getMax = function () {
    return $(document).height() - $(window).height()
  }

  var getValue = function () {
    return $(window).scrollTop()
  }

  var progressBar = $(".progress-bar"),
    max = getMax(),
    value,
    width

  var getWidth = function () {
    value = getValue()
    width = (value / max) * 100
    width = width + "%"
    return width
  }

  var setWidth = function () {
    progressBar.css({ width: getWidth() })
  }

  $(document).on("scroll", setWidth)
  $(window).on("resize", function () {
    max = getMax()
    setWidth()
  })
}

$(function () {
  $('.view-library').click(function () {
    $('.read').addClass('open')
  })

  $('.book-list-close').click(function () {
    $(this).removeClass('open')
    $('.read').removeClass('open')
  })

  $('.post-info h2').hover(function () {
    $(this).parent().siblings().toggleClass('active')
  })
})

$(window).load(function () {
  $('body').addClass('active')

  $('.body-close').click(function () {
    $('body').addClass('close')
  })
})

$(document).ready(function () {
  scrollProgressBar()
})