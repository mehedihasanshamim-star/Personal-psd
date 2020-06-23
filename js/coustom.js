$(document).ready(function(){

	/* -- out- typed js --*/
	var typed = new Typed('.typing-1', {
		strings: ["Web Developer",
		"Web Designer",
		"Graphics Designer", 
		"UI/UX Designer"
		],
		loop:true,
		backSpeed:200,
		typeSpeed: 200,
		backDelay: 200
	});



	$(".project-filter li").on('click', function() {
        /*-- active-class remove-add --*/
		$(".project-filter li").removeClass('active');
		$(this).addClass('active');
		 /*-- active-class remove-add end --*/

		var selector = $(this).attr('data-filter');
		$(".project-list").isotope({
			filter: selector,
		});
	});

	$('.project-list').isotope({

	});






});