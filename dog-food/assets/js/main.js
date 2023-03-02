/*=========================================
	# Preload Spinner
=========================================*/
$(window).on('load', function() {
    setTimeout(removeLoader, 200);
});

function removeLoader() {
    $(".preloadSpinner").fadeOut(100, function() {
        $(".preloadSpinner").remove();
    });
}

/*=========================================
	## Back To Top
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
	# Document Ready
=========================================*/
$(document).ready(function() {

    /* ================================================== */
    /* Header Height */
    /* ================================================== */
    if ($("#header-wrap").length) {

        var divHeight = $('#header-wrap').height();
        $('#content').css('margin-top', divHeight + 'px');
    }

    /* ================================================== */
    /* FAQ */
    /* ================================================== */
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

    /* ================================================== */
    /* jQuery Smooth Scroll and go to destination. */
    /* ================================================== */
    jQuery('.navbar-nav a').on('click', function(e) {
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
    	Order Form
    =========================================*/

    if ($("#orderform").length) {
        $("#orderform").validate({
            errorPlacement: function(error, element) {
                return true;
            },
            rules: {
                first_name: {
                    required: true,
                    minlength: 3
                },
                last_name: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                phone_number: {
                    required: true,
                },
                billing_address: {
                    required: true,
                },
                billing_address2: {
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
                var formData = $('#orderform').serialize();
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
                            $("#orderform").trigger("reset");
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
    /* Footer Copyrights Year. */
    /* ================================================== */

    $('#copyright_year').html(new Date().getFullYear());


});