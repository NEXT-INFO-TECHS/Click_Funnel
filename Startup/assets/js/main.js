/*=========================================
	Preload Spinner
=========================================*/
$(window).on('load', function(){
	setTimeout(removeLoader, 300);
});
function removeLoader(){
	$( ".preloadSpinner" ).fadeOut(200, function() {
	$( ".preloadSpinner" ).remove();  
	});  
}

$(document).ready(function(){
 /*=========================================
	Header
 =========================================*/

  $(window).on("scroll", function() {
	var scroll = $(window).scrollTop();
	if (scroll < 10) {
	$("header").removeClass("fixed-top");
	} else {
	$("header").addClass("fixed-top");
	}
 });


	$(".navbar .nav .nav-item .nav-link").click(function(){
		$(".navbar-collapse").removeClass("show");
	})

	$(".nav-link").click(function(){
		$(".navbar-collapse").removeClass("show");
		$(".navbar-toggler").removeClass("show");
	});

	$(".navbar-toggler").click(function(){
		$(".navbar-toggler").toggleClass("show");
	});

	/*=========================================
		Order Form
	=========================================*/
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
	/* ---------- Banner Timer ----------*/
	$(document).ready(function() {

		var counters = $(".count");
		var countersQuantity = counters.length;
		var counter = [];
	  
		for (i = 0; i < countersQuantity; i++) {
		  counter[i] = parseInt(counters[i].innerHTML);
		}
	  
		var count = function(start, value, id) {
		  var localStart = start;
		  setInterval(function() {
			if (localStart < value) {
			  localStart++;
			  counters[id].innerHTML = localStart;
			}
		  }, 40);
		}
	  
		for (j = 0; j < countersQuantity; j++) {
		  count(0, counter[j], j);
		}
	});
	/*==================================================
        Consultation Form
    ==================================================*/

    if($("#consultationForm").length) {

		$('#consultationForm').validate({

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

							window.location.href = 'leadership.html';

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


