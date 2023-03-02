/*=========================================
	# Preload Spinner
=========================================*/
$(window).on('load', function(){
	setTimeout(removeLoader, 200);
});
function removeLoader(){
	$( ".preloadSpinner" ).fadeOut(100, function() {
		$( ".preloadSpinner" ).remove();  
	});  
}

/*=========================================
	# Document Ready
=========================================*/
$(document).ready(function(){

	/*=========================================
		# Header
	=========================================*/
	$(window).on("scroll", function() {
		var scroll = $(window).scrollTop();
		if (scroll > 1) {
		$("header").addClass("fixed-top");
		} else {
		$("header").removeClass("fixed-top");
		}
	});

		

	// # Nav Bar on Mobile
	$(" .navbar .nav .nav-item .nav-link").click(function(){
		$(".navbar-collapse").removeClass("show");
		$(".navbar-toggler").removeClass("close");
	})

	$(document).on('click', 'body', function() {
		if ($('#navbarNav').hasClass('show')){
			$('#navbarNav').removeClass('show');
			$(".navbar-toggler").toggleClass("close");
		}
	});

	$(".navbar-toggler").click(function(){
		$(".navbar-toggler").toggleClass("close");
	});

	/*=========================================
		# Registration Form
	=========================================*/
	if($("#free-consultation-form").length) {
		$('#free-consultation-form').validate({
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
				var formData = $('#free-consultation-form').serialize();
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
							$("#free-consultation-form").trigger("reset");
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
		# Order Form
	=========================================*/
	var length = $("#order-form").length;
	if($("#order-form").length) {
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

						if(data.success) {
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

	/* ================================================== */
	/* # Copyright year auto update */
	/* ================================================== */
	document.getElementById("copy_rightYears").innerHTML = new Date().getFullYear();

});