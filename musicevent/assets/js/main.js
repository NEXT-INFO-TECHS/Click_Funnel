/*=========================================
	Preload Spinner
=========================================*/
$(window).on('load', function(){
	setTimeout(removeLoader, 200);
});
function removeLoader(){
	$( ".preloadSpinner" ).fadeOut(100, function() {
	$( ".preloadSpinner" ).remove();  
	});  
}


$(document).ready(function($){

/*=========================================
				Header
	=========================================*/

	$(window).on("scroll", function() {

		var scroll = $(window).scrollTop();
	
		if (scroll > 1) {
	
		$("header").addClass("fixed-top");
	
		} else {
	
		$("header").removeClass("fixed-top");
	
		}
	
	});
	
	
	// Nav Bar on Mobile
	
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
	
	
	

	// Tabbing



	$('.tablinks').click(function (event){

		event.preventDefault();

		let showTargetId = $(this).data('id');

		$('.tabtarget').each(function (){

			if($(this).hasClass(showTargetId)){

				$(this).removeClass('d-none');

			} else {

				$(this).addClass('d-none');

			}

		});

	});





	if ($("#header-wrap").length) {

		var divHeight = $('#header-wrap').height();

		$('#content').css('margin-top', divHeight + 'px');

	}



	/* ---------- Banner Timer ----------*/

	    

	if($("#countdownTimer").length){

	

		var deadline = new Date("dec 31, 2022 15:37:25").getTime();

	

		var x = setInterval(function () {

	

			var now = new Date().getTime();

			var t = deadline - now;

			var days = Math.floor(t / (1000 * 60 * 60 * 24));

			var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

			var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));

			var seconds = Math.floor((t % (1000 * 60)) / 1000);

			$('#day').html(days);

			$('#hour').html(hours);

			$('#minute').html(minutes);

			$('#second').html(seconds);

			if (t < 0) {

				clearInterval(x);

				document.getElementById("demo").innerHTML = "TIME UP";

				document.getElementById("day").innerHTML = '0';

				document.getElementById("hour").innerHTML = '0';

				document.getElementById("minute").innerHTML = '0';

				document.getElementById("second").innerHTML = '0';

			}

		}, 1000);

	}

	



	/*=========================================

		06. Order Form

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

				phone: {

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

	/*=========================================

		05. Registration Form

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