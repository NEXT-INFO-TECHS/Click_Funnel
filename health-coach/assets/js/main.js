/*=========================================
	Preload Spinner
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
	Header
==========================================*/
$(window).on("scroll", function() {
	var scroll = $(window).scrollTop();
	if (scroll > 1) {
		$("header").addClass("fixed-top");
	} else {
		$("header").removeClass("fixed-top");
	}
});
/*=========================================
	Back To Top
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


$(document).ready(function() {
	/*=========================================
		Footer copyright Year
	==========================================*/
	$('#copyright_year').html(new Date().getFullYear());
	/*=========================================
		Nav Bar on Mobile
	==========================================*/
	$(" .navbar .nav .nav-item .nav-link").click(function() {
		$(".navbar-collapse").removeClass("show");
		$(".navbar-toggler").removeClass("close");
	})
	$(document).on('click', 'body', function() {
		if ($('#navbarNav').hasClass('show')) {
			$('#navbarNav').removeClass('show');
			$(".navbar-toggler").toggleClass("close");
		}
	});
	$(".navbar-toggler").click(function() {
		$(".navbar-toggler").toggleClass("close");
	});
	/*=========================================
		Parallax
	=========================================*/
	if ($(".parallax").length) {
		$('.parallax').jarallax();
	}
	/*=========================================
		FAQ
	=========================================*/
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}
	$('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');
		if ($(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();
			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}
		e.preventDefault();
	});
	/*=========================================
		Order Form
	=========================================*/
	if ($("#order-form").length) {
		$("#order-form").validate({
			errorPlacement: function(error, element) {
				return true;
			},
			rules: {
				full_name: {
					required: true,
					minlength: 3
				},
				email: {
					required: true,
					email: true
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
		Free Consultation Form
	=========================================*/
	if ($("#free-consultation-form").length) {
		$('#free-consultation-form').validate({
			errorPlacement: function(error, element) {
				return true;
			},
			rules: {
				email: {
					required: true,
					email: true
				},
			},
			submitHandler: function(form) {
				var formData = $('#free-consultation-form').serialize();
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
							$("#free-consultation-form").trigger("reset");
							window.location.href = 'order.html';
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