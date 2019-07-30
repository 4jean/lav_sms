/* ------------------------------------------------------------------------------
 *
 *  # Fullcalendar advanced options
 *
 *  Demo JS code for extra_fullcalendar_advanced.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FullCalendarAdvanced = function() {


    //
    // Setup module components
    //

    // External events
    var _componentFullCalendarEvents = function() {
        if (!$().fullCalendar || typeof Switchery == 'undefined' || !$().draggable) {
            console.warn('Warning - fullcalendar.min.js, switchery.min.js or jQuery UI is not loaded.');
            return;
        }


        // Add demo events
        // ------------------------------

        // Event colors
        var eventColors = [
            {
                title: 'All Day Event',
                start: '2014-11-01',
                color: '#EF5350'
            },
            {
                title: 'Long Event',
                start: '2014-11-07',
                end: '2014-11-10',
                color: '#26A69A'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-11-09T16:00:00',
                color: '#26A69A'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-11-16T16:00:00',
                color: '#5C6BC0'
            },
            {
                title: 'Conference',
                start: '2014-11-11',
                end: '2014-11-13',
                color: '#546E7A'
            },
            {
                title: 'Meeting',
                start: '2014-11-12T10:30:00',
                end: '2014-11-12T12:30:00',
                color: '#546E7A'
            },
            {
                title: 'Lunch',
                start: '2014-11-12T12:00:00',
                color: '#546E7A'
            },
            {
                title: 'Meeting',
                start: '2014-11-12T14:30:00',
                color: '#546E7A'
            },
            {
                title: 'Happy Hour',
                start: '2014-11-12T17:30:00',
                color: '#546E7A'
            },
            {
                title: 'Dinner',
                start: '2014-11-12T20:00:00',
                color: '#546E7A'
            },
            {
                title: 'Birthday Party',
                start: '2014-11-13T07:00:00',
                color: '#546E7A'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2014-11-28',
                color: '#FF7043'
            }
        ];

        // External events
        // ------------------------------

        // Add switcher for events removal
        var remove = document.querySelector('.form-check-input-switchery');
        var removeInit = new Switchery(remove);

        // Initialize the calendar
        $('.fullcalendar-external').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            defaultDate: '2014-11-12',
            events: eventColors,
            locale: 'en',
            droppable: true, // this allows things to be dropped onto the calendar
                drop: function() {
                if ($('#drop-remove').is(':checked')) { // is the "remove after drop" checkbox checked?
                    $(this).remove(); // if so, remove the element from the "Draggable Events" list
                }
            },
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Initialize the external events
        $('#external-events .fc-event').each(function() {

            // Different colors for events
            $(this).css({'backgroundColor': $(this).data('color'), 'borderColor': $(this).data('color')});

            // Store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).html()), // use the element's text as the event title
                color: $(this).data('color'),
                stick: true // maintain when user navigates (see docs on the renderEvent method)
            });

            // Make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 // original position after the drag
            });
        });
    };

    // FullCalendar RTL direction
    var _componentFullCalendarRTL = function() {
        if (!$().fullCalendar) {
            console.warn('Warning - fullcalendar.min.js is not loaded.');
            return;
        }


        // Add demo events
        // ------------------------------

        // Default events
        var events = [
            {
                title: 'All Day Event',
                start: '2014-11-01'
            },
            {
                title: 'Long Event',
                start: '2014-11-07',
                end: '2014-11-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-11-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-11-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2014-11-11',
                end: '2014-11-13'
            },
            {
                title: 'Meeting',
                start: '2014-11-12T10:30:00',
                end: '2014-11-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2014-11-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2014-11-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2014-11-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2014-11-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2014-11-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2014-11-28'
            }
        ];

        // Event colors
        var eventColors = [
            {
                title: 'All Day Event',
                start: '2014-11-01',
                color: '#EF5350'
            },
            {
                title: 'Long Event',
                start: '2014-11-07',
                end: '2014-11-10',
                color: '#26A69A'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-11-09T16:00:00',
                color: '#26A69A'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-11-16T16:00:00',
                color: '#5C6BC0'
            },
            {
                title: 'Conference',
                start: '2014-11-11',
                end: '2014-11-13',
                color: '#546E7A'
            },
            {
                title: 'Meeting',
                start: '2014-11-12T10:30:00',
                end: '2014-11-12T12:30:00',
                color: '#546E7A'
            },
            {
                title: 'Lunch',
                start: '2014-11-12T12:00:00',
                color: '#546E7A'
            },
            {
                title: 'Meeting',
                start: '2014-11-12T14:30:00',
                color: '#546E7A'
            },
            {
                title: 'Happy Hour',
                start: '2014-11-12T17:30:00',
                color: '#546E7A'
            },
            {
                title: 'Dinner',
                start: '2014-11-12T20:00:00',
                color: '#546E7A'
            },
            {
                title: 'Birthday Party',
                start: '2014-11-13T07:00:00',
                color: '#546E7A'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2014-11-28',
                color: '#FF7043'
            }
        ];


        // RTL direction
        // ------------------------------

        $('.fullcalendar-rtl').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2014-11-12',
            editable: true,
            isRTL: true,
            locale: 'ar',
            events: events
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFullCalendarEvents();
            _componentFullCalendarRTL();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FullCalendarAdvanced.init();
});
