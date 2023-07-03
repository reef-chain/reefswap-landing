$(document).ready(function() {

	AOS.init({
		duration: 1200,
		once: true,
	})
	
      $('.menu-btn').click(function(){
		$(this).toggleClass('open');
		$('.menu-main').toggleClass('show-srchbar');
		$('body').toggleClass('hide-body');
		$('.menu-overly-srch').toggle();
	});     

	
});

$(window).on('scroll', function(){
	if ($('.list-item').is(':visible')){
		$('.icon-sm svg').addClass("active");
   	}
});