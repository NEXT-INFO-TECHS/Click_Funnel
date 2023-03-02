/*=========================================
	Header Fix
=========================================*/
$(window).scroll(function() {
	if ($(this).scrollTop() > 1) {
		$('header').addClass('fixed');
	} else {
		$('header').removeClass('fixed');
	}
})
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
// Document Ready Start here
jQuery(document).ready(function($) {
	/*=========================================
		# Copyright Year
	=========================================*/
	$(".copyrightyear").html(new Date().getFullYear());
	/*=========================================
		Book your appointement (PopUp Form)
	=========================================*/
	if ($("#popup-form").length) {
		$('#popup-form').validate({
			errorPlacement: function(error, element) {
				return true;
			},
			rules: {
				name: {
					required: true,
					minlength: 3
				},
				email: {
					required: true,
					email: true
				},
			},
			submitHandler: function(form) {
				var formData = $('#popup-form').serialize();
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
							$("#popup-form").trigger("reset");
							window.location.href = 'upsell.html';
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
});