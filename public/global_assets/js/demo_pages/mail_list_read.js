/* ------------------------------------------------------------------------------
 *
 *  # Inbox page - Reading
 *
 *  Demo JS code for mail_list_read.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var MailListRead = function() {


    //
    // Setup module components
    //

    // Grab first letter and insert to the icon
    var _componentIconLetter = function() {

        // Title
	    var $title = $('.letter-icon-title'),
	        letter = $title.eq(0).text().charAt(0).toUpperCase();

	    // Icon
	    var $icon = $title.parent().parent().find('.letter-icon');
	        $icon.eq(0).text(letter);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentIconLetter();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    MailListRead.init();
});
