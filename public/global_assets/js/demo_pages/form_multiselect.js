/* ------------------------------------------------------------------------------
 *
 *  # Bootstrap multiselect
 *
 *  Demo JS code for form_multiselect.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var BootstrapMultiselect = function() {


    //
    // Setup module components
    //

    // Default file input style
    var _componentMultiselect = function() {
        if (!$().multiselect) {
            console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }


        // Basic examples
        // ------------------------------

        // Basic initialization
        $('.multiselect').multiselect();

        // Limit options number
        $('.multiselect-number').multiselect({
            numberDisplayed: 1
        });

        // Custom empty text
        $('.multiselect-nonselected-text').multiselect({
            nonSelectedText: 'Please choose'
        });

        // Select All option
        $('.multiselect-select-all').multiselect({
            includeSelectAllOption: true
        });

        // Enable filtering
        $('.multiselect-filtering').multiselect({
            enableFiltering: true,
            enableCaseInsensitiveFiltering: true
        });

        // Select All and Filtering features
        $('.multiselect-select-all-filtering').multiselect({
            includeSelectAllOption: true,
            enableFiltering: true,
            enableCaseInsensitiveFiltering: true
        });

        // Linked button style
        $('.multiselect-link').multiselect({
            buttonClass: 'btn btn-link'
        });

        // Clickable optgroups
        $('.multiselect-clickable-groups').multiselect({
            enableClickableOptGroups: true
        });

        // Disable if empty
        $('.multiselect-disable-empty').multiselect({
            disableIfEmpty: true
        });

        // Menu background color
        $('.multiselect-menu-bg-color').multiselect({
            templates: {
                ul: '<div class="multiselect-container bg-teal-400 dropdown-menu"></div>'
            }
        });

        // Combined colors
        $('.multiselect-combine-all').multiselect({
            buttonClass: 'btn bg-slate',
            templates: {
                ul: '<div class="multiselect-container bg-slate dropdown-menu"></div>'
            }
        });

        // Full featured example
        $('.multiselect-full-featured').multiselect({
            includeSelectAllOption: true,
            enableFiltering: true
        });

        // With max height
        $('.multiselect-max-height').multiselect({
            maxHeight: 200
        });

        // Prevent deselect
        var $preventDeselectElement = $('.multiselect-prevent-deselect');
        $preventDeselectElement.multiselect({
            onChange: function(option, checked) {
                if (checked === false) {
                    $preventDeselectElement.multiselect('select', option.val());
                }
            }
        });

        // Remove active option class
        $('.multiselect-no-active-class').multiselect({
            selectedClass: null
        });



        // Events
        // ------------------------------

        // onChange
        $('.multiselect-onchange-notice').multiselect({
            onChange: function(element, checked){
                new PNotify({
                    text: '<code>onChange</code> callback fired.',
                    addclass: 'bg-teal border-teal'
                });
            }
        });

        // onChange desktop
        $('.multiselect-onchange-desktop').multiselect({
            onChange:function(element, checked){
                PNotify.desktop.permission();
                (new PNotify({
                    title: 'Desktop Notice',
                    text: 'onChange callback desktop notification.',
                    desktop: {
                        desktop: true,
                        addclass: 'bg-blue',
                        icon: 'assets/images/pnotify/info.png'
                    }
                })).get().on('click', function(e) {
                    if ($('.ui-pnotify-closer, .ui-pnotify-sticker, .ui-pnotify-closer *, .ui-pnotify-sticker *').is(e.target)) return;
                    alert('Hey! You clicked the desktop notification!');
                });
            }
        });

        // onShow
        $('.multiselect-show-event').multiselect({
            onDropdownShow: function() {
                new PNotify({
                    text: '<code>onDropdownShow</code> event fired.',
                    addclass: 'bg-teal border-teal'
                });
            }
        });

        // onHide
        $('.multiselect-hide-event').multiselect({
            onDropdownHide: function() {
                new PNotify({
                    text: '<code>onDropdownHide</code> event fired.',
                    addclass: 'bg-teal border-teal'
                });
            }
        });



        // Methods
        // ------------------------------

        //
        // Create and destroy
        //

        // Initialize
        $('.multiselect-method-destroy').multiselect();

        // Destroy
        $('.multiselect-destroy-button').on('click', function() {
            $('.multiselect-method-destroy').multiselect('destroy');
        });

        // Create
        $('.multiselect-create-button').on('click', function() {
            $('.multiselect-method-destroy').multiselect();
        });


        //
        // Refresh
        //

        // Initialize
        $('.multiselect-method-refresh').multiselect();

        // Select option
        $('.multiselect-select-button').on('click', function() {
            
            $('option[value="tomatoes"]', $('.multiselect-method-refresh')).attr('selected', 'selected');
            $('option[value="tomatoes"]', $('.multiselect-method-refresh')).prop('selected', true);
            
            $('option[value="mushrooms"]', $('.multiselect-method-refresh')).prop('selected', true);
            $('option[value="mushrooms"]', $('.multiselect-method-refresh')).attr('selected', 'selected');
            
            $('option[value="onions"]', $('.multiselect-method-refresh')).prop('selected', true);
            $('option[value="onions"]', $('.multiselect-method-refresh')).attr('selected', 'selected');

            alert('Selected Tomatoes, Mushrooms and Onions.');
        });

        // Deselect
        $('.multiselect-deselect-button').on('click', function() {
            $('option', $('.multiselect-method-refresh')).each(function(element) {
                $(this).removeAttr('selected').prop('selected', false);
            });
        });

        // Refresh
        $('.multiselect-refresh-button').on('click', function() {
            $('.multiselect-method-refresh').multiselect('refresh');
        });


        //
        // Rebuild
        //

        // Initialize
        $('.multiselect-method-rebuild').multiselect();

        // Add option
        $('.multiselect-add-button').on('click', function() {
            $('.multiselect-method-rebuild').append('<option value="add1">Addition 1</option><option value="add2">Addition 2</option><option value="add3">Addition 3</option>');
        });

        // Remove option
        $('.multiselect-delete-button').on('click', function() {
            $('option[value="add1"]', $('.multiselect-method-rebuild')).remove();
            $('option[value="add2"]', $('.multiselect-method-rebuild')).remove();
            $('option[value="add3"]', $('.multiselect-method-rebuild')).remove();
        });

        // Rebuild menu
        $('.multiselect-rebuild-button').on('click', function() {
            $('.multiselect-method-rebuild').multiselect('rebuild');
        });


        //
        // Select
        //

        // Initialize
        $('.multiselect-method-select').multiselect();

        // Select first option
        $('.multiselect-select-cheese-button').on('click', function() {
            $('.multiselect-method-select').multiselect('select', 'cheese');
        });

        // Select second option
        $('.multiselect-select-onions-button').on('click', function() {
            $('.multiselect-method-select').multiselect('select', 'onions');
        });


        //
        // Deselect
        //

        // Initialize
        $('.multiselect-method-deselect').multiselect();

        // Deselect first option
        $('.multiselect-deselect-cheese-button').on('click', function() {
            $('.multiselect-method-deselect').multiselect('deselect', 'cheese');
        });

        // Deselect second option
        $('.multiselect-deselect-onions-button').on('click', function() {
            $('.multiselect-method-deselect').multiselect('deselect', 'onions');
        });


        //
        // Disable
        //

        // Initialize
        $('.multiselect-method-disable').multiselect();

        // Enable
        $('.multiselect-enable1-button').on('click', function() {
            $('.multiselect-method-disable').multiselect('enable');
        });

        // Disable
        $('.multiselect-disable1-button').on('click', function() {
            $('.multiselect-method-disable').multiselect('disable');
        });


        //
        // Enable
        //

        // Initialize
        $('.multiselect-method-enable').multiselect();

        // Enable
        $('.multiselect-enable2-button').on('click', function() {
            $('.multiselect-method-enable').multiselect('enable');
        });

        // Disable
        $('.multiselect-disable2-button').on('click', function() {
            $('.multiselect-method-enable').multiselect('disable');
        });



        // Advanced examples
        // ------------------------------

        // Simulate selections
        $('.multiselect-simulate-selections').multiselect({
            onChange: function(option, checked) {
                var values = [];
                $('.multiselect-simulate-selections option').each(function() {
                    if ($(this).val() !== option.val()) {
                        values.push($(this).val());
                    }
                });

                $('.multiselect-simulate-selections').multiselect('deselect', values);
            }
        });

        // Close dropdown automaticallywhen options are selected
        $('.multiselect-close-dropdown').multiselect({
            onChange: function(option, checked) {
                var selected = 0;
                $('option', $('.multiselect-close-dropdown')).each(function() {
                    if ($(this).prop('selected')) {
                        selected++;
                    }
                });

                if (selected >= 3) {
                    $('.multiselect-close-dropdown').siblings('div').children('.dropdown-menu').dropdown('toggle');
                }
            }
        });

        // Templates
        $('.multiselect-templates').multiselect({
            templates: {
                divider: '<div class="multiselect-item dropdown-divider border-danger"></div>'
            }
        });


        //
        // Display values
        //

        // Initialize
        $('.multiselect-display-values').multiselect();

        // Select options
        $('.multiselect-display-values-select').on('click', function() {
            $('.multiselect-display-values').multiselect('select', 'cheese');
            $('.multiselect-display-values').multiselect('select', 'tomatoes');

            $('.values-area').addClass('alert alert-info').text('Selected: ' + $('.multiselect-display-values').val().join(', '));
        });

        // Deselect options
        $('.multiselect-display-values-deselect').on('click', function() {
            $('.multiselect-display-values').multiselect('deselect', 'cheese');
            $('.multiselect-display-values').multiselect('deselect', 'tomatoes');

            $('.values-area').addClass('alert alert-info').text('Selected: ' + $('.multiselect-display-values').val() > 0 ? $('.multiselect-display-values').val().join(', ') : 'Nothing selected');
        });


        //
        // Toggle selection
        //

        // Select all/Deselect all
        function multiselect_selected($el) {
            var ret = true;
            $('option', $el).each(function(element) {
                if (!!!$(this).prop('selected')) {
                    ret = false;
                }
            });
            return ret;
        }
        function multiselect_selectAll($el) {
            $('option', $el).each(function(element) {
                $el.multiselect('select', $(this).val());
            });
        }
        function multiselect_deselectAll($el) {
            $('option', $el).each(function(element) {
                $el.multiselect('deselect', $(this).val());
            });
        }
        function multiselect_toggle($el, $btn) {
            if (multiselect_selected($el)) {
                multiselect_deselectAll($el);
                $btn.text('Select All');
            }
            else {
                multiselect_selectAll($el);
                $btn.text('Deselect All');
            }
        }

        // Initialize
        $('.multiselect-toggle-selection').multiselect();

        // Toggle selection on button click
        $('.multiselect-toggle-selection-button').on('click', function(e) {
            e.preventDefault();
            multiselect_toggle($('.multiselect-toggle-selection'), $(this));
        });


        //
        // Order options
        //

        var orderCount = 0;

        // Initialize
        $('.multiselect-order-options').multiselect({
            buttonText: function(options) {
                if (options.length == 0) {
                    return 'None selected';
                }
                else if (options.length > 3) {
                    return options.length + ' selected';
                }
                else {
                    var selected = [];
                    options.each(function() {
                        selected.push([$(this).text(), $(this).data('order')]);
                    });

                    selected.sort(function(a, b) {
                        return a[1] - b[1];
                    });

                    var text = '';
                    for (var i = 0; i < selected.length; i++) {
                        text += selected[i][0] + ', ';
                    }

                    return text.substr(0, text.length -2);
                }
            },
            onChange: function(option, checked) {
                if (checked) {
                    orderCount++;
                    $(option).data('order', orderCount);
                }
                else {
                    $(option).data('order', '');
                }
            }
        });
     
        // Order selected options on button click
        $('.multiselect-order-options-button').on('click', function() {
            var selected = [];
            $('.multiselect-order-options option:selected').each(function() {
                selected.push([$(this).val(), $(this).data('order')]);
            });

            selected.sort(function(a, b) {
                return a[1] - b[1];
            });

            var text = '';
            for (var i = 0; i < selected.length; i++) {
                text += selected[i][0] + ', ';
            }
            text = text.substring(0, text.length - 2);

            alert(text);
        });


        //
        // Reset selections
        //

        // Initialize
        $('.multiselect-reset').multiselect();

        // Reset using reset button
        $('#multiselect-reset-form').on('reset', function() {
            $('.multiselect-reset option:selected').each(function() {
                $(this).prop('selected', false);
            })

            $('.multiselect-reset').multiselect('refresh');
        });
    };

    // Uniform
    var _componentUniform = function(element) {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-control-styled').uniform();
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentMultiselect();
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    BootstrapMultiselect.init();
});
