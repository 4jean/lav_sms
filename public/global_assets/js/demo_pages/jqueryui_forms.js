/* ------------------------------------------------------------------------------
 *
 *  # jQuery UI forms
 *
 *  Demo JS code for jqueryui_forms.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var JqueryUiForms = function() {


    //
    // Setup module components
    //

    // Datepicker
    var _componentUiDatepicker = function() {
        if (!$().datepicker) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Default functionality
        $('.datepicker').datepicker({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Dates in other months
        $('.datepicker-dates').datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Button bar
        $('.datepicker-button-bar').datepicker({
            showButtonPanel: true,
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Month and year menu
        $('.datepicker-menus').datepicker({
            changeMonth: true,
            changeYear: true,
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Multiple months
        $('.datepicker-multiple').datepicker({
            numberOfMonths: 3,
            showButtonPanel: true,
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Icon trigger
        $('.datepicker-icon').datepicker({
            showOn: 'button',
            buttonImage: '../../../../global_assets/images/ui/datepicker_trigger.png',
            buttonImageOnly: true,
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Populate alternate field
        $('.datepicker-alternate').datepicker({
            altField: '#alternate',
            altFormat: 'DD, d MM, yy',
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Restrict date range
        $('.datepicker-restrict').datepicker({ 
            minDate: -20,
            maxDate: '+1M +10D',
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Show week number
        $('.datepicker-weeks').datepicker({
            showWeek: true,
            firstDay: 1,
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });


        //
        // Date range
        //

        // From
        $('#range-from').datepicker({
            defaultDate: '+1w',
            numberOfMonths: 3,
            onClose: function( selectedDate ) {
                $( '#range-to' ).datepicker( 'option', 'minDate', selectedDate );
            },
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // To
        $('#range-to').datepicker({
            defaultDate: '+1w',
            numberOfMonths: 3,
            onClose: function( selectedDate ) {
                $( '#range-from' ).datepicker( 'option', 'maxDate', selectedDate );
            },
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });


        //
        // Format date
        //

        // Initialize
        $('.datepicker-format').datepicker({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Format date on change
        $('#format').on('change', function() {
            $('.datepicker-format').datepicker('option', 'dateFormat', $(this).val());
        });


        //
        // Format date
        //

        // Initialize
        $('.datepicker-animation').datepicker({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Animate picker on change
        $('#anim').on('change', function() {
            $('.datepicker-animation').datepicker('option', 'showAnim', $(this).val());
        });
    };

    // Autiocomplete
    var _componentUiAutocomplete = function() {
        if (!$().autocomplete) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Add demo data
        var availableTags = [
            'ActionScript',
            'AppleScript',
            'Asp',
            'BASIC',
            'C',
            'C++',
            'Clojure',
            'COBOL',
            'ColdFusion',
            'Erlang',
            'Fortran',
            'Groovy',
            'Haskell',
            'Java',
            'JavaScript',
            'Lisp',
            'Perl',
            'PHP',
            'Python',
            'Ruby',
            'Scala',
            'Scheme'
        ];

        // Basic example
        $('#ac-basic').autocomplete({
            source: availableTags
        });


        //
        // Accent folding
        //

        // Add data
        var names = ['Jörn Zaefferer', 'Scott González', 'John Resig'];

        // Map
        var accentMap = {
            'á': 'a',
            'ö': 'o'
        };

        // Normalize
        var normalize = function(term) {
            var ret = '';
            for (var i = 0; i < term.length; i++) {
                ret += accentMap[ term.charAt(i) ] || term.charAt(i);
            }
            return ret;
        };

        // Init autocomplete
        $('#ac-folding').autocomplete({
            source: function(request, response) {
                var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), 'i');
                response($.grep(names, function(value) {
                    value = value.label || value.value || value;
                    return matcher.test(value) || matcher.test(normalize(value));
                }));
            }
        });


        //
        // Categories
        //

        // Custom widget
        $.widget('custom.catcomplete', $.ui.autocomplete, {
            _create: function() {
                this._super();
                this.widget().menu('option', 'items', '> :not(.ui-autocomplete-category)');
            },
            _renderMenu: function(ul, items) {
                var that = this,
                currentCategory = '';

                $.each( items, function(index, item) {
                    var li;
                    if (item.category != currentCategory) {
                        ul.append('<li class="ui-autocomplete-category">' + item.category + '</li>');
                        currentCategory = item.category;
                    }
                    li = that._renderItemData(ul, item);
                    if (item.category) {
                        li.attr('aria-label', item.category + ' : ' + item.label);
                    }
                });
            }
        });

        // Demo data
        var data = [
            {label: 'anders', category: ''},
            {label: 'andreas', category: ''},
            {label: 'antal', category: ''},
            {label: 'annhhx10', category: 'Products'},
            {label: 'annk K12', category: 'Products'},
            {label: 'annttop C13', category: 'Products'},
            {label: 'anders andersson', category: 'People'},
            {label: 'andreas andersson', category: 'People'},
            {label: 'andreas johnson', category: 'People'}
        ];

        // Initialize autocomplete
        $( '#ac-categories' ).catcomplete({
            delay: 0,
            source: data
        });


        //
        // Custom data and display
        //

        // Demo data
        var projects = [
            {
                label: 'Limitless',
                desc: 'responsive web application kit'
            },
            {
                label: 'Londinium',
                desc: 'responsive bootstrap 3 admin template'
            },
            {
                label: 'It\'s Brain',
                desc: 'Bootstrap based premium admin template'
            }
        ];

        // Initialize autocomplete
        $('#ac-custom').autocomplete({
            minLength: 0,
            source: projects,
            focus: function( event, ui ) {
                $('#ac-custom').val(ui.item.label);
                return false;
            },
            select: function( event, ui ) {
                $('#ac-custom').val(ui.item.label);
                return false;
            }
        })
        .autocomplete('instance')._renderItem = function(ul, item) {
            return $('<li>').append('<span class="font-weight-semibold pb-0">' + item.label + '</span>' + '<div class="text-muted font-size-sm pt-0">' + item.desc + '</div>').appendTo(ul);
        };


        //
        // Custom data and display
        //

        // Split values
        function split(val) {
            return val.split(/,\s*/);
        }

        // Extract the last term
        function extractLast(term) {
            return split(term).pop();
        }

        // Configure and initialize
        $('#ac-multiple').bind('keydown', function(event) {
            if (event.keyCode === $.ui.keyCode.TAB && $(this).autocomplete('instance').menu.active) {
                event.preventDefault();
            }
        })
        .autocomplete({
            minLength: 0,
            source: function(request, response) {

                // Delegate back to autocomplete, but extract the last term
                response( $.ui.autocomplete.filter(
                    availableTags, extractLast( request.term ) ) );
                },
                focus: function() {

                // Prevent value inserted on focus
                return false;
            },
            select: function(event, ui) {
                var terms = split(this.value);

                // Remove the current input
                terms.pop();

                // Add the selected item
                terms.push(ui.item.value);

                // Add placeholder to get the comma-and-space at the end
                terms.push('');
                this.value = terms.join('', '');
                return false;
            }
        });


        //
        // Remote data
        //

        // Remote data
        $('#ac-remote').autocomplete({
            minLength: 2,
            source: '../../../../global_assets/demo_data/jquery_ui/autocomplete.php',
            search: function() {
                $(this).parent().addClass('ui-autocomplete-processing');
            },
            open: function() {
                $(this).parent().removeClass('ui-autocomplete-processing');
            }
        });

        // Remote data with caching
        var cache = {};
        $('#ac-caching').autocomplete({
            minLength: 2,
            source: function(request, response) {
                var term = request.term;
                if (term in cache) {
                    response(cache[term]);
                    return;
                }

                $.getJSON('../../../../global_assets/demo_data/jquery_ui/autocomplete.php', request, function(data, status, xhr) {
                    cache[ term ] = data;
                    response(data);
                });
            },
            search: function() {
                $(this).parent().addClass('ui-autocomplete-processing');
            },
            open: function() {
                $(this).parent().removeClass('ui-autocomplete-processing');
            }
        });


        //
        // Combo box
        //

        // Configure custom widget
        $.widget('custom.combobox', {
            _create: function() {
                this.wrapper = $('<div>').addClass('custom-combobox input-group').insertAfter(this.element);
                this.element.hide();
                this._createAutocomplete();
                this._createShowAllButton();
            },
            _createAutocomplete: function() {
                var selected = this.element.children(':selected'),
                value = selected.val() ? selected.text() : '';

                var input = this.input = $('<input>')
                    .appendTo(this.wrapper)
                    .val(value)
                    .attr('title', '')
                    .attr('placeholder', 'Search')
                    .addClass('form-control')
                    .autocomplete({
                        delay: 0,
                        minLength: 0,
                        source: $.proxy(this, '_source')
                    });

                this._on(this.input, {
                    autocompleteselect: function( event, ui ) {
                        ui.item.option.selected = true;
                        this._trigger('select', event, {
                            item: ui.item.option
                        });
                    },

                    autocompletechange: '_removeIfInvalid'
                });
            },
            _createShowAllButton: function() {
                var input = this.input,
                    wasOpen = false;

                // Append fonr control icon
                this.wrapper.append('<div class="form-control-feedback"><i class="icon-search4 font-size-base"></i></div>');

                // Add input group button
                var wrapper2 = $('<span>').attr('class', 'input-group-append').appendTo(this.wrapper);


                // Link
                $( '<a>' )
                    .attr( 'tabIndex', -1 )
                    .appendTo( wrapper2 )
                    .button({
                        icons: {
                            primary: 'icon-arrow-down12'
                        },
                        text: false
                    })
                    .removeClass('')
                    .on('mousedown', function() {
                        wasOpen = input.autocomplete('widget').is(':visible');
                    })
                    .on('click', function() {
                        input.focus();

                        // Close if already visible
                        if (wasOpen) {
                            return;
                        }

                        // Pass empty string as value to search for, displaying all results
                        input.autocomplete('search', '');
                    });
            },
            _source: function( request, response ) {
                var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), 'i');
                response( this.element.children('option').map(function() {
                    var text = $(this).text();
                    if (this.value && (!request.term || matcher.test(text)))
                        return {
                            label: text,
                            value: text,
                            option: this
                        };
                    })
                );
            },
            _removeIfInvalid: function( event, ui ) {

                // Selected an item, nothing to do
                if (ui.item) {
                    return;
                }

                // Search for a match (case-insensitive)
                var value = this.input.val(),
                    valueLowerCase = value.toLowerCase(),
                    valid = false;

                this.element.children('option').each(function() {
                    if ($(this).text().toLowerCase() === valueLowerCase) {
                        this.selected = valid = true;
                        return false;
                    }
                });

                // Found a match, nothing to do
                if (valid) {
                    return;
                }

                // Remove invalid value
                this.input.val('').attr('title', value + ' didn\'t match any item');

                this.element.val('');
                this._delay(function() {
                    this.input.tooltip('close').attr('title', '');
                }, 2500);
                this.input.autocomplete('instance').term = '';
            },
            _destroy: function() {
                this.wrapper.remove();
                this.element.show();
            }
        });

        // Initialize
        $('#ac-combo').combobox();
    };

    // Selectmenu
    var _componentUiSelectmenu = function() {
        if (!$().selectmenu) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic select
        $('.select-basic').selectmenu({
            width: '100%'
        });

        // Optgroups example
        $('#select-optgroups').selectmenu({
            width: '100%'
        });

        // Default width
        $('#select-width').selectmenu({
            width: 200
        });

        // Disabled select
        $('#select-disabled').selectmenu({
            width: '100%',
            disabled: true
        });


        //
        // Select with icons
        //

        // Custom widget configuration
        $.widget('custom.iconselectmenu', $.ui.selectmenu, {
            _renderItem: function(ul, item) {
                var li = $('<li>'),
                    wrapper = $('<div>', { text: item.label });

                if (item.disabled) {
                    li.addClass('ui-state-disabled');
                }

                $('<i>', {
                    style: item.element.attr('data-style'),
                    'class': 'ui-icon ' + item.element.attr('data-icon')
                }).prependTo(wrapper);

                // return li.appendTo(ul);
                return li.append( wrapper ).appendTo( ul );
            }
        });
     
        // Initialize
        $('#select-icons').iconselectmenu({width: '100%'}).iconselectmenu('menuWidget');


        //
        // Select with images
        //

        // Custom widget configuration
        $.widget('custom.imageselectmenu', $.ui.selectmenu, {
            _renderItem: function(ul, item) {
                var li = $('<li>'),
                    wrapper = $('<div>', { text: item.label });

                if (item.disabled) {
                    li.addClass('ui-state-disabled');
                }

                $('<span>', {
                    style: item.element.attr('data-style'),
                    'class': item.element.attr('data-class')
                }).prependTo(wrapper);

                // return li.appendTo(ul);
                return li.append( wrapper ).appendTo( ul );
            }
        });

        // Initialize
        $('#select-images').imageselectmenu({width: '100%'}).imageselectmenu('menuWidget').addClass('ui-selectmenu-images');
    };

    // Spinner
    var _componentUiSpinner = function() {
        if (!$().spinner) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic spinner
        $('#spinner-basic').spinner();

        // Disabled spinner
        $('#spinner-disabled').spinner({
            disabled: true
        });

        // Spinner min/max limits
        $('#spinner-limits').spinner({
            min: 90,
            max: 110,
            start: 100
        });

        // Spinner step
        $('#spinner-step').spinner({
            step: 20,
            start: 500
        });

        // Spinner overflow
        $('#spinner-overflow').spinner({
            spin: function(event, ui) {
                if (ui.value > 10) {
                    $(this).spinner('value', -10);
                    return false;
                }
                else if (ui.value < -10) {
                    $(this).spinner('value', 10);
                    return false;
                }
            }
        });


        //
        // Currency spinner
        //

        // Culture
        $('#spinner-currency-culture').on('selectmenuchange', function() {
            $('#spinner-currency').spinner('option', 'culture', $(this).val());
        });

        // Initialize
        $('#spinner-currency').spinner({
            start: 1000,
            numberFormat: 'C'
        });


        //
        // Decimal spinner
        //

        // Culture
        $( '#spinner-decimal-culture' ).on('selectmenuchange', function() {
            var current = $('#spinner-decimal').spinner('value');
            Globalize.culture( $(this).val() );
            $('#spinner-decimal').spinner('value', current);
        });

        // Initialize
        $('#spinner-decimal').spinner({
            step: 0.01,
            numberFormat: 'n'
        });


        //
        // Time spinner
        //

        // Configure custom widget
        $.widget('ui.timespinner', $.ui.spinner, {
            options: {
                step: 60 * 1000, // seconds
                page: 60 // hours
            },
            _parse: function(value) {
                if (typeof value === 'string') {

                    // Already a timestamp
                    if (Number(value) == value) {
                        return Number(value);
                    }
                    return +Globalize.parseDate(value);
                }
                return value;
            },
            _format: function(value) {
                return Globalize.format(new Date(value), 't');
            }
        });

        // Culture
        $('#spinner-time-culture').on('selectmenuchange', function() {
            var current = $('#spinner-time').timespinner('value');
            Globalize.culture($(this).val());
            $('#spinner-time').timespinner('value', current);
        });

        // Initialize
        $('#spinner-time').timespinner();
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUiDatepicker();
            _componentUiAutocomplete();
            _componentUiSelectmenu();
            _componentUiSpinner();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    JqueryUiForms.init();
});
