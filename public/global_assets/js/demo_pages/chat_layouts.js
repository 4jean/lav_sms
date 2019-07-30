/* ------------------------------------------------------------------------------
 *
 *  # Chat layouts
 *
 *  Demo JS code for chat_layouts.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var ChatLayouts = function() {


    //
    // Setup module components
    //

	// Scroll to bottom of the chat on page load. Mainly for demo
    var _layoutChat = function() {
		$('.media-chat-scrollable').scrollTop($(this).height());
	};

    var _layoutChatHidden = function() {
    	$('.nav-link[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			_layoutChat();
		});
	};


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _layoutChat();
            _layoutChatHidden();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    ChatLayouts.init();
});
