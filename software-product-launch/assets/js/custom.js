/*=========================================
	Preload Spinner
=========================================*/
$(window).on('load', function() {
    setTimeout(removeLoader, 500);
});

function removeLoader() {
    $(".preloadSpinner").fadeOut(300, function() {
        $(".preloadSpinner").remove();
    });
}

$(document).ready(function($) {

    /*=========================================
    	01.Header
    =========================================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.home-header').addClass("sticky");
        } else {
            $('.home-header').removeClass("sticky");
        }
    });


    // Tabbing
    $('.tablinks').click(function(event) {
        event.preventDefault();
        let showTargetId = $(this).data('id');
        $('.tabtarget').each(function() {
            if ($(this).hasClass(showTargetId)) {
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

    /* ================================================== */
    /* 02. FAQ */
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

    /*=========================================
    	03. Order Form
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
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                },
                shipping_address: {
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

    /*=========================================
    	04. Registration Form
    =========================================*/
    if ($("#registration_form").length) {
        $('#registration_form').validate({
            errorPlacement: function(error, element) {
                return true;
            },
            rules: {
                email: {
                    required: true,
                    email: true
                },
            },
            submitHandler: function(form) {
                var formData = $('#registration_form').serialize();
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
                            $("#registration_form").trigger("reset");
                            window.location.href = 'video_1.html';
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
        05	Back To Top
    =========================================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.backtotop').fadeIn(100);
        } else {
            $('.backtotop').fadeOut(100);
        }
    });
    $('.backtotop').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 100);
        return false;
    });
    /* ================================================== 
       06 Copyright year auto update 
    ================================================== */
    $('#copy_rightYears').html(new Date().getFullYear());


});