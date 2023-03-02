/*=========================================
	Header Sticky
=========================================*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.home-header').addClass("sticky");
    } else {
        $('.home-header').removeClass("sticky");
    }
});
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


$(document).ready(function() {

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

    /* ================================================== 
        Copyright year auto update 
    ================================================== */
    $('#copy_rightYears').html(new Date().getFullYear());

    /* ================================================== 
        Tabbing
    ================================================== */

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

    // Navigation toggler

    $(".navbar .nav .nav-item .nav-link").click(function() {
        $(".navbar-collapse").removeClass("show");
    })
    $(".nav-link").click(function() {
        $(".navbar-collapse").removeClass("show");
        $(".navbar-toggler").removeClass("show");
    });
    $(".navbar-toggler").click(function() {
        $(".navbar-toggler").toggleClass("show");
    });


    if ($("#header-wrap").length) {
        var divHeight = $('#header-wrap').height();
        $('#content').css('margin-top', divHeight + 'px');
    }


});