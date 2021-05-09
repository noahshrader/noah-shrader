$(function() {
  $('.view-library').click(function() {
    $('.read').addClass('open')
  })

  $('.book-list-close').click(function() {
    $(this).removeClass('open')
    $('.read').removeClass('open')
  })
});

$(window).load(function() {
  $('body').addClass('active')
})

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
			} else {
				document.querySelector(`nav a[href="#${id}"]`).classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('div[id]').forEach((section) => {
		observer.observe(section);
	});

});