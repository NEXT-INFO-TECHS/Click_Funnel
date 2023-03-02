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



$(document).ready(function($) {

    /*=========================================
    	# #Footer Copyrights Year
    =========================================*/
    $('#copyright_year').html(new Date().getFullYear());

    /*=========================================
		#Enquiry Form
	=========================================*/

    if ($("#inquiry-form").length) {
        $("#inquiry-form").validate({
            errorPlacement: function(error, element) {
                return true;
            },
            rules: {
                full_name: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                phone_number: {
                    required: true,
                    number: true,
                    minlength: 10
                }
            },

            submitHandler: function(form) {
                var formData = $('#inquiry-form').serialize();
                $.ajax({
                    type: 'POST',
                    url: 'assets/php/inquiry-form.php',
                    dataType: "json",
                    data: formData,
                    success: function(data) {
                        if (data.success) {
                            $('.form-status').addClass('alert alert-success');
                            $('.form-status').text('Your Message Has been Sent Successfully');
                            form.submit();
                            $('.form-status').slideDown().delay(3000).slideUp();
                            $("#inquiry-form").trigger("reset");
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
		#Order Form
	=========================================*/

    if ($("#order-form").length) {
        $("#order-form").validate({
            errorPlacement: function(error, element) {
                return true;
            },
            rules: {
                full_name: {
                    required: true,
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
                address: {
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
                            form.submit();
                            $('.form-status').slideDown().delay(3000).slideUp();
                            $("#order-form").trigger("reset");
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