$(document).ready(function(){
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

	$(document).ready(function(){

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
		
	});


	/*=========================================
		# Order Form
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
	
	/*=========================================
		# Offer Form
	=========================================*/
	if($("#offer-form").length) {
		$('#offer-form').validate({
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
				full_address:{
					required: true
				},
				city:{
					required: true
				},
				state:{
					required: true
				},
				zip:{
					required: true
				},
				country:{
					required: true
				},
			},
			submitHandler: function(form) {
				var formData = $('#offer-form').serialize();
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
							$("#offer-form").trigger("reset");
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

	/* ================================================== */
	/* # Copyright year auto update */
	/* ================================================== */
	document.getElementById('copy_rightYears').innerHTML = new Date().getFullYear();

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

});


