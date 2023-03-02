/* ==================================================
    Preloader
================================================== */
$(window).on('load', function() {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
        });
    }
});
/*=========================================
    Back to top button
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

jQuery(document).ready(function($) {
    /* ================================================== 
    /* Copyright year auto update 
    ================================================== */
    $('#copy_rightYears').html(new Date().getFullYear());
    /* ==================================================
	
    /* ================================================== */
    /* Go to Order form Section on click */
    /* ================================================== */

    jQuery(function($) {
        // $('a[href*="#"]:not([href="#"])').click(function() {
        $('a.btn').click(function() {
            var target = $(this.hash);
            $('html,body').stop().animate({
                scrollTop: target.offset().top - 55
            }, 800);
        });
        if (location.hash) {
            var id = $(location.hash);
        }
        $(window).ready(function() {
            if (location.hash) {
                $('html,body').animate({
                    scrollTop: id.offset().top - 55
                }, 600)
            };
        });
    });

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
    /* Order Form */
    /* ================================================== */
    if ($("#order-form").length) {
        $("#order-form").validate({
            errorPlacement: function(error, element) {
                return true;
            },
            rules: {
                first_name: {
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