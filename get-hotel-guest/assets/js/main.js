/*=========================================
	Preload Spinner
=========================================*/
$(window).on('load', function(){
	setTimeout(removeLoader, 500);
});
function removeLoader(){
	$( ".preloadSpinner" ).fadeOut(300, function() {
	$( ".preloadSpinner" ).remove();  
});  
}


$(document).ready(function($) {

	// On scorll Add class or remove class
	$(window).on("scroll", function() {
		var scroll = $(window).scrollTop();
		if (scroll < 10) {
			$("header").removeClass("fixed-top");
		} 
		else {
			$("header").addClass("fixed-top");
		}
	});

	/*=========================================
		    Countdown
	=========================================*/
	$('#counter').countdown('2022/12/31', function (event) {
		$('#day').html(event.strftime('%D'));
		$('#hour').html(event.strftime('%H'));
		$('#minute').html(event.strftime('%M'));
		$('#second').html(event.strftime('%S'));
	});

	/* ================================================== */
	/* FAQ */
	/* ================================================== */
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
		05. Consultation Form
	=========================================*/
	if($("#consultationForm").length) {
		$('#consultationForm').validate({
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
			},
			submitHandler: function(form) {
				var formData = $('#consultationForm').serialize();
				$.ajax({
					type: 'POST',
					url: 'assets/php/popup-form.php',
					dataType: "json",
					data: formData,
					success: function(data) {
						if(data.success) {
							$('.form-status').addClass('alert alert-success');
							$('.form-status').text('Your Message Has been Sent Successfully');
							form.submit();
							$('.form-status').slideDown().delay(3000).slideUp();
							$("#consultationForm").trigger("reset");
							window.location.href = 'oto.html';
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
		Order Form
	=========================================*/

	if ($("#order-form").length) {
		$("#order-form").validate({
			errorPlacement: function(error,element) {
                return true;
            },
			rules: {
				full_name: {
					required: true,
					minlength: 3,
				},
				email: {
					required: true,
					email: true,
				},
				company_name: {
					required: true,
					minlength: 3
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
		Back To Top
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
	// Jquery Code below for footer copyright Year
	$('#copyright_year').html(new Date().getFullYear());

});
