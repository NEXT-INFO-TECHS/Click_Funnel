/*=========================================
	# Document Ready
=========================================*/
$(document).ready(function () {
    /*=========================================
		## Countdown
	=========================================*/
    // Replace current Date and Time below
    $('#counter').countdown('2024/12/11 00:00:00', function (event) {
        $('#day').html(event.strftime('%D'));
        $('#hour').html(event.strftime('%H'));
        $('#minute').html(event.strftime('%M'));
        $('#second').html(event.strftime('%S'));
    });

});
