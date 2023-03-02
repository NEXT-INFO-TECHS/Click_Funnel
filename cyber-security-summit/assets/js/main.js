/*=========================================
	# Preload Spinner
=========================================*/
$(window).on('load', function(){
	setTimeout(removeLoader, 500);
});
function removeLoader(){
	$( ".preloadSpinner" ).fadeOut(300, function() {
		$( ".preloadSpinner" ).remove();  
	});  
}

	
/*=========================================
	# Back To Top
=========================================*/
$(window).scroll(function(){ 
	if ($(this).scrollTop() > 100) { 
		$('.backtotop').fadeIn(100);
	} else { 
		$('.backtotop').fadeOut(100); 
	} 
}); 
$('.backtotop').click(function(){ 
	$("html, body").animate({ scrollTop: 0 }, 100); 
	return false; 
});

/*=========================================
	# Document Ready
=========================================*/
$(document).ready(function () {

	/*=========================================
		## Header Height
	=========================================*/
	if ($("#header-wrap").length) {		
		var divHeight = $('#header-wrap').height();
		$('#content').css('margin-top', divHeight + 'px');
	}

	/*=========================================
		## Nav bar.
	=========================================*/
	$('.navbar-toggler').click(function(){
		$(this).toggleClass("show");
		
	});
	$('.navbar-collapse .nav-item .nav-link').click(function(){
		$('#navbarSupportedContent').removeClass("show");
		$('.navbar-toggler').removeClass("show");
	});
	$(document).click(function(){
		if($('#navbarSupportedContent').hasClass("show")){
			$('.navbar-toggler').removeClass("show");
			$('#navbarSupportedContent').removeClass("show");
		}
	});

	/*=========================================
		## FAQ
	=========================================*/
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	$('.accordion-section-title').click(function (e) {
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
		## Footer Copyrights Year
	=========================================*/
	// Javascript Code below for footer copyright Year
	$('#copyright_year').html(new Date().getFullYear());

	/*=========================================
		## Smooth Scroll and go to destination.
	=========================================*/
	jQuery('.navbar-nav a').on('click', function (e) {
		if (this.hash != "") {
			e.preventDefault();
			var hash = this.hash;
			jQuery('html, body').animate({
				scrollTop: jQuery(hash).offset().top - 50
			}, 300);
			if ($(window).width() < 768) {
				jQuery('html, body').animate({
					scrollTop: jQuery(hash).offset().top - 40
				}, 300);
			}
		}
	});

	/*=========================================
		## Parallax
	=========================================*/
	if ($(".parallax").length) {
		$('.parallax').jarallax();
	}

	/*=========================================
		## Order Form
	=========================================*/
	if ($("#order-form").length) {
		$("#order-form").validate({
			errorPlacement: function(error,element) {
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
				company_name: {
					required: true,
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
					success: function (data) {
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
					error: function (xhr, status, error) {
						$('.form-status').addClass('alert alert-danger');
						$('.form-status').text('Something Went Wrong');
						$('.form-status').slideDown().delay(3000).slideUp();
					}
				});
			}
		});
	}

	/*=========================================
		## Free Consultation Form
	=========================================*/
	if ($("#free-consultation-form").length) {
		$('#free-consultation-form').validate({
			errorPlacement: function(error,element) {
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
			},
			submitHandler: function(form) {
				var formData = $('#free-consultation-form').serialize();
				$.ajax({
					type: 'POST',
					url: 'assets/php/popup-form.php',
					dataType: "json",
					data: formData,
					success: function (data) {
						if (data.success) {
							$('.form-status').addClass('alert alert-success');
							$('.form-status').text('Your Message Has been Sent Successfully');
							form.submit();
							$('.form-status').slideDown().delay(3000).slideUp();
							$("#free-consultation-form").trigger("reset");
							window.location.href = 'oto.html';
						} else {
							$('.form-status').addClass('alert alert-danger');
							$('.form-status').text('Error Occurred, Please Try Again');
							$('.form-status').slideDown().delay(3000).slideUp();
						}
					},
					error: function (xhr, status, error) {
						$('.form-status').addClass('alert alert-danger');
						$('.form-status').text('Something Went Wrong');
						$('.form-status').slideDown().delay(3000).slideUp();
					}
				});
			}
		});
	}



});