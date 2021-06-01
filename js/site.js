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

window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
        document.title = `Noah Shrader - ${id}`;
      } else {
        document.querySelector(`nav a[href="#${id}"]`).classList.remove('active');
      }
    });
  });
  document.querySelectorAll('div[id]').forEach((section) => {
    observer.observe(section);
  });
});

$(window).on( 'scroll', function(){
  if ($(window).scrollTop() < 10) {
    $(document).prop('title', 'Noah Shrader');
  }
})