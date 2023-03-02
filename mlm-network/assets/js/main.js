/*=========================================
	# Preload Spinner
=========================================*/
$(window).on('load', function() {
	setTimeout(removeLoader, 300);
});

function removeLoader() {
	$(".preloadSpinner").fadeOut(200, function() {
		$(".preloadSpinner").remove();
	});
}

/*=========================================
	# Back To Top
=========================================*/
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.backtotop').fadeIn(100);
	} else {
		$('.backtotop').fadeOut(100);
	}
});
$('.backtotop').click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, 100);
	return false;
});

/*=========================================
	# Header
=========================================*/

$(window).scroll(function() {
	if ($(this).scrollTop() > 1) {
		$('.home-header').addClass("sticky");
	} else {
		$('.home-header').removeClass("sticky");
	}
});

/*=========================================
	# Document Ready
=========================================*/
$(document).ready(function($) {
	/*=========================================
		##Footer Copyrights Year
	=========================================*/
	document.getElementById("copyright_year").innerHTML = new Date().getFullYear();


	/*=========================================
		## Nav bar.
	=========================================*/
	$('.navbar-toggler').click(function() {
		$(this).toggleClass("show");

	});
	$('.navbar-collapse .nav-item .nav-link').click(function() {
		$('#navbarNav').removeClass("show");
		$('.navbar-toggler').removeClass("show");
	});
	$(document).click(function() {
		if ($('#navbarNav').hasClass("show")) {
			$('.navbar-toggler').removeClass("show");
			$('#navbarNav').removeClass("show");
		}
	});

	/*=========================================
		## Parallax
	=========================================*/
	if ($(".parallax").length) {
		$('.parallax').jarallax();
	}

	/*=========================================
		## Smooth Scroll
	=========================================*/

	$(".navbar a[href^='#']").on('click', function(event) {
		event.preventDefault();
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 60
		}, 300);
	});

	/*=========================================
		## Order Form 
	=========================================*/
	if ($("#order-form").length) {
		$("#order-form").validate({
			errorPlacement: function(error, element) {
				return true;
			},
			rules: {
				first_name: {
					required: true,
					minlength: 3
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true,
					number: true,
					minlength: 10
				},
				billing_address: {
					required: true,
				},
				city: {
					required: true,
				},
				state: {
					required: true,
				},
				zip: {
					required: true,
				},
				country: {
					required: true,
				}
			},
			submitHandler: function(form) {
				var formData = $('#order-form').serialize();
				$.ajax({
					type: 'POST',
					url: 'assets/php/order-form.php',
					dataType: "json",
					data: formData,
					success: function(data) {
						if (data.success) {
							$('.form-status').addClass('alert alert-success');
							$('.form-status').text('Your Message Has been Sent Successfully');
							$('.form-status').slideDown().delay(3000).slideUp();
							$("#order-form").trigger("reset");
							form.submit();
						} else {
							$('.form-status').addClass('alert alert-danger');
							$('.form-status').text('Error Occurred, Please Try Again');
							$('.form-status').slideDown().delay(3000).slideUp();
						}
					},
					error: function(xhr, status, error) {
						$('.form-status').addClass('alert alert-danger');
						$('.form-status').text('Something Went Wrong');
						$('.form-status').slideDown().delay(3000).slideUp();
					}
				});
			}
		});
	}
	/*=========================================
		## Home Popup Form 
	=========================================*/
	if ($("#consultationForm").length) {
		$('#consultationForm').validate({
			errorPlacement: function(error, element) {
				return true;
			},
			rules: {
				firstname: {
					required: true,
					minlength: 3
				},
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				firstname: {
					required: "Enter Your Name",
					minlength: "Name must consist of at least 3 characters"
				},
				email: {
					required: "Enter Your Email",
					email: "Enter a valid Email"
				}
			},
			submitHandler: function(form) {
				var formData = $('#consultationForm').serialize();
				$.ajax({
					type: 'POST',
					url: 'assets/php/popup-form.php',
					dataType: "json",
					data: formData,
					success: function(data) {
						if (data.success) {
							$('.form-status').addClass('alert alert-success');
							$('.form-status').text('Your Message Has been Sent Successfully');
							form.submit();
							$('.form-status').slideDown().delay(3000).slideUp();
							$("#consultationForm").trigger("reset");
							window.location.href = './schedule.html';
						} else {
							$('.form-status').addClass('alert alert-danger');
							$('.form-status').text('Error Occurred, Please Try Again');
							$('.form-status').slideDown().delay(3000).slideUp();
						}
					},
					error: function(xhr, status, error) {
						$('.form-status').addClass('alert alert-danger');
						$('.form-status').text('Something Went Wrong');
						$('.form-status').slideDown().delay(3000).slideUp();
					}
				});
			}
		});
	}

});