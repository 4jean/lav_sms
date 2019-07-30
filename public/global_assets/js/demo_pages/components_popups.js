/* ------------------------------------------------------------------------------
 *
 *  # Tooltips and popovers
 *
 *  Demo JS code for components_popups.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Popups = function () {


    //
    // Setup module components
    //

    // Custom tooltip color
    var _componentTooltipCustomColor = function() {
		$('[data-popup=tooltip-custom]').tooltip({
			template: '<div class="tooltip"><div class="arrow border-teal"></div><div class="tooltip-inner bg-teal"></div></div>'
		});
    };

    // Tooltip events
    var _componentTooltipEvents = function() {

		// onShow event
		$('#tooltip-show').tooltip({
			title: 'I am a tooltip',
			trigger: 'click'
		}).on('show.bs.tooltip', function() {
			alert('Show event fired.');
		});

		// onShown event
		$('#tooltip-shown').tooltip({
			title: 'I am a tooltip',
			trigger: 'click'
		}).on('shown.bs.tooltip', function() {
			alert('Shown event fired.');
		});

		// onHide event
		$('#tooltip-hide').tooltip({
			title: 'I am a tooltip',
			trigger: 'click'
		}).on('hide.bs.tooltip', function() {
			alert('Hide event fired.');
		});

		// onHidden event
		$('#tooltip-hidden').tooltip({
			title: 'I am a tooltip',
			trigger: 'click'
		}).on('hidden.bs.tooltip', function() {
			alert('Hidden event fired.');
		});
    };

    // Tooltip methods
    var _componentTooltipMethods = function() {

		// Show method
		$('#show-tooltip-method').on('click', function() {
			$('#show-tooltip-method-target').tooltip('show');
		});

		// Hide method
		$('#hide-tooltip-method-target').on('mouseenter', function() {
			$(this).tooltip('show')
		});
		$('#hide-tooltip-method').on('click', function() {
			$('#hide-tooltip-method-target').tooltip('hide');
		});

		// Toggle method
		$('#toggle-tooltip-method').on('click', function() {
			$('#toggle-tooltip-method-target').tooltip('toggle');
		})

		// Dispose method
		$('#dispose-tooltip-method').on('click', function() {
			$('#dispose-tooltip-method-target').tooltip('dispose');
		});

		// Toggle enable method
		$('#toggle-enabled-tooltip-method').on('click', function() {
			$('#toggle-enabled-tooltip-method-target').tooltip('toggleEnabled');
		});
    };


    // Custom popover color
    var _componentPopoverCustomHeaderColor = function() {
		$('[data-popup=popover-custom]').popover({
			template: '<div class="popover border-teal"><div class="arrow"></div><h3 class="popover-header bg-teal"></h3><div class="popover-body"></div></div>'
		});
    };

    // Custom popover background color
    var _componentPopoverCustomBackgroundColor = function() {
		$('[data-popup=popover-solid]').popover({
			template: '<div class="popover bg-primary border-primary"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body text-white"></div></div>'
		});
    };

    // Popover events
    var _componentPopoverEvents = function() {

		// onShow event
		$('#popover-show').popover({
			title: 'Popover title',
			content: 'And here\'s some amazing content. It\'s very engaging. Right?',
			trigger: 'click'
		}).on('show.bs.popover', function() {
			alert('Show event fired.');
		});

		// onShown event
		$('#popover-shown').popover({
			title: 'Popover title',
			content: 'And here\'s some amazing content. It\'s very engaging. Right?',
			trigger: 'click'
		}).on('shown.bs.popover', function() {
			alert('Shown event fired.');
		});

		// onHide event
		$('#popover-hide').popover({
			title: 'Popover title',
			content: 'And here\'s some amazing content. It\'s very engaging. Right?',
			placement: 'top',
			trigger: 'click'
		}).on('hide.bs.popover', function() {
			alert('Hide event fired.');
		});

		// onHidden event
		$('#popover-hidden').popover({
			title: 'Popover title',
			content: 'And here\'s some amazing content. It\'s very engaging. Right?',
			trigger: 'click'
		}).on('hidden.bs.popover', function() {
			alert('Hidden event fired.');
		});
    };

    // Popover methods
    var _componentPopoverMethods = function() {

		// Show method
		$('#show-popover-method').on('click', function() {
			$('#show-popover-method-target').popover('show');
		})

		// Hide method
		$('#hide-popover-method-target').on('mouseenter', function() {
			$(this).popover('show')
		});
		$('#hide-popover-method').on('click', function() {
			$('#hide-popover-method-target').popover('hide');
		});

		// Toggle method
		$('#toggle-popover-method').on('click', function() {
			$('#toggle-popover-method-target').popover('toggle');
		})

		// Dispose method
		$('#dispose-popover-method').on('click', function() {
			$('#dispose-popover-method-target').popover('dispose');
		});

		// Toggle enable method
		$('#toggle-enabled-popover-method').on('click', function() {
			$('#toggle-enabled-popover-method-target').popover('toggleEnabled');
		});
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentTooltipCustomColor();
            _componentTooltipEvents();
            _componentTooltipMethods();
            _componentPopoverCustomHeaderColor();
            _componentPopoverCustomBackgroundColor();
            _componentPopoverEvents();
            _componentPopoverMethods();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Popups.init();
});
