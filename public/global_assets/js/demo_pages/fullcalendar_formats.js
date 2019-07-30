/* ------------------------------------------------------------------------------
 *
 *  # Fullcalendar time and language options
 *
 *  Demo JS code for extra_fullcalendar_formats.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FullCalendarFormats = function() {


    //
    // Setup module components
    //

    // FullCalendar formats examples
    var _componentFullCalendarFormats = function() {
        if (!$().fullCalendar) {
            console.warn('Warning - fullcalendar.min.js is not loaded.');
            return;
        }

        // Add events
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


        // Date formats
        // ------------------------------

        $('.fullcalendar-formats').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },
            views: {
                month: {
                    titleFormat: 'LL',
                    columnFormat: 'dddd'
                },
                week: {
                    titleFormat: 'MMM Do YY',
                    columnFormat: 'ddd D'
                },
                day: {
                    titleFormat: 'dddd',
                    columnFormat: 'dddd'
                }
            },
            timeFormat: 'H:mm', // uppercase H for 24-hour clock
            defaultDate: '2014-11-12',
            editable: true,
            events: events,
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });


        // Internationalization
        // ------------------------------

        // Set default language
        var initialLocaleCode = 'en';

        // Build the language selector's options
        $.each($.fullCalendar.locales, function(localeCode) {
            $('#lang-selector').append(
                $('<option/>')
                .attr('value', localeCode)
                .prop('selected', localeCode == initialLocaleCode)
                .text(localeCode)
            );
        });

        // Re-render the calendar when the selected option changes
        $('#lang-selector').on('change', function() {
            if (this.value) {
                $('.fullcalendar-languages').fullCalendar('option', 'locale', this.value);
            }
        });

        // Render calendar
        $('.fullcalendar-languages').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            defaultDate: '2014-11-12',
            locale: initialLocaleCode,
            buttonIcons: false, // show the prev/next text
            weekNumbers: true,
            editable: true,
            events: [
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
            ],
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });
    };

    // Select2 select
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // We're using Select2 for language select
        $('.form-control-select2').select2({
            width: 100,
            minimumResultsForSearch: Infinity
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFullCalendarFormats();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FullCalendarFormats.init();
});
