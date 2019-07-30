/* ------------------------------------------------------------------------------
 *
 *  # Alpaca - Controls
 *
 *  Demo JS code for alpaca_controls.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var AlpacaControls = function() {


    //
    // Setup module components
    //

    // Alpaca examples
    var _componentAlpacaControls = function() {
        if (!$().alpaca) {
            console.warn('Warning - alpaca.min.js is not loaded.');
            return;
        }


        // Checkboxes
        // ------------------------------

        // Checkbox with label
        var $alpacaCheckboxLabel = $('#alpaca-checkbox-label');
        $alpacaCheckboxLabel.alpaca({
            data: true,
            options: {
                label: 'Question:',
                rightLabel: 'Do you like Alpaca?'
            },
            postRender: function(control) {
                $alpacaCheckboxLabel.find('.checkbox').addClass('form-check');
                $alpacaCheckboxLabel.find('label:not(.alpaca-control-label)').addClass('form-check-label');
                $alpacaCheckboxLabel.find('input[type=checkbox]').addClass('form-check-input');
            }
        });

        // Display only mode
        $('#alpaca-checkbox-static').alpaca({
            data: false,
            view: 'bootstrap-display',
            options: {
                label: 'Registered?'
            }
        });

        // Basic checkbox list
        var $alpacaCheckboxList = $('#alpaca-checkbox-list');
        $alpacaCheckboxList.alpaca({
            data: ['sandwich', 'cookie', 'drink'],
            schema: {
                type: 'array',
                enum: ['sandwich', 'chips', 'cookie', 'drink']
            },
            options: {
                type: 'checkbox',
                label: 'What would you like with your order?',
                optionLabels: ['A Sandwich', 'Potato Chips', 'A Cookie', 'Soft Drink']
            },
            postRender: function(control) {
                $alpacaCheckboxList.find('.checkbox').addClass('form-check');
                $alpacaCheckboxList.find('label:not(.alpaca-control-label)').addClass('form-check-label');
                $alpacaCheckboxList.find('input[type=checkbox]').addClass('form-check-input');
            }
        });


        // Radios
        // ------------------------------

        // Basic radios
        var $alpacaRadioBasic = $('#alpaca-radio-basic');
        $alpacaRadioBasic.alpaca({
            data: 'green',
            options: {
                type: 'radio',
                label: 'Favorite Color',
                helper: 'Pick your favorite color',
                optionLabels: {
                    red: 'Red',
                    green: 'Green',
                    blue: 'Blue',
                    white: 'White',
                    black: 'Black'
                }
            },
            schema: {
                required: true,
                enum: ['red', 'green', 'blue', 'white', 'black']
            },
            postRender: function(control) {
                $alpacaRadioBasic.find('.radio').addClass('form-check');
                $alpacaRadioBasic.find('label:not(.alpaca-control-label)').addClass('form-check-label');
                $alpacaRadioBasic.find('input[type=radio]').addClass('form-check-input');
            }
        });

        // Disabled mode
        var $alpacaRadioBasicDisabled = $('#alpaca-radio-basic-disabled');
        $alpacaRadioBasicDisabled.alpaca({
            data: 'Jimi Hendrix',
            schema: {
                enum: ['Jimi Hendrix', 'Mark Knopfler', 'Joe Satriani', 'Eddie Van Halen', 'Orianthi']
            },
            options: {
                type: 'radio',
                label: 'Who is your favorite guitarist?',
                vertical: true,
                disabled: true
            },
            postRender: function(control) {
                $alpacaRadioBasicDisabled.find('.radio').addClass('form-check');
                $alpacaRadioBasicDisabled.find('label:not(.alpaca-control-label)').addClass('form-check-label');
                $alpacaRadioBasicDisabled.find('input[type=radio]').addClass('form-check-input');
            }
        });

        // Required radios
        var $alpacaRadioRequired = $('#alpaca-radio-required');
        $alpacaRadioRequired.alpaca({
            data: 'Coffee2',
            options: {
                label: 'Ice cream',
                helper: 'Guess my favorite ice cream?',
                optionLabels: ['Vanilla Flavor', 'Chocolate Flavor', 'Coffee Flavor']
            },
            schema: {
                required: true,
                enum: ['Vanilla', 'Chocolate', 'Coffee']
            },
            postRender: function(control) {
                $alpacaRadioRequired.find('.radio').addClass('form-check');
                $alpacaRadioRequired.find('label:not(.alpaca-control-label)').addClass('form-check-label');
                $alpacaRadioRequired.find('input[type=radio]').addClass('form-check-input');
            }
        });

        // Options
        var $alpacaRadioOptions = $('#alpaca-radio-options');
        $alpacaRadioOptions.alpaca({
            data: 'Jimi Hendrix',
            schema: {
                enum: ['Jimi Hendrix', 'Mark Knopfler', 'Joe Satriani', 'Eddie Van Halen', 'Orianthi']
            },
            options: {
                type: 'radio',
                label: 'Who is your favorite guitarist?',
                removeDefaultNone: true,
                vertical: true
            },
            postRender: function(control) {
                $alpacaRadioOptions.find('.radio').addClass('form-check');
                $alpacaRadioOptions.find('label:not(.alpaca-control-label)').addClass('form-check-label');
                $alpacaRadioOptions.find('input[type=radio]').addClass('form-check-input');
            }
        });
    };

    // Alpaca with Uniform
    var _componentAlpacaControlsUniform = function() {
        if (!$().alpaca || !$().uniform) {
            console.warn('Warning - alpaca.min.js and/or uniform.min.js is not loaded.');
            return;
        }

        // Styled checkbox
        var $alpacaCheckboxStyled = $('#alpaca-checkbox-styled');
        $alpacaCheckboxStyled.alpaca({
            data: true,
            options: {
                label: 'Question:',
                rightLabel: 'Do you like Alpaca?'
            },
            postRender: function(control) {
                $alpacaCheckboxStyled.find('.checkbox').addClass('form-check');
                $alpacaCheckboxStyled.find('label:not(.alpaca-control-label)').addClass('form-check-label');
                $alpacaCheckboxStyled.find('input[type=checkbox]').addClass('form-check-input').uniform();
            }
        });

        // Disabled checkbox
        var $alpacaCheckboxStyledDisabled = $('#alpaca-checkbox-styled-disabled');
        $alpacaCheckboxStyledDisabled.alpaca({
            data: true,
            options: {
                label: 'Question:',
                rightLabel: 'Do you like Alpaca?',
                disabled: true
            },
            postRender: function(control) {
                $alpacaCheckboxStyledDisabled.find('.checkbox').addClass('form-check');
                $alpacaCheckboxStyledDisabled.find('label:not(.alpaca-control-label)').addClass('form-check-label');
                $alpacaCheckboxStyledDisabled.find('input[type=checkbox]').addClass('form-check-input').uniform();
            }
        });

        // Styled checkbox list
        var $alpacaCheckboxListStyled = $('#alpaca-checkbox-list-styled');
        $alpacaCheckboxListStyled.alpaca({
            data: ['sandwich', 'cookie', 'drink'],
            schema: {
                type: 'array',
                enum: ['sandwich', 'chips', 'cookie', 'drink']
            },
            options: {
                type: 'checkbox',
                label: 'What would you like with your order?',
                optionLabels: ['A Sandwich', 'Potato Chips', 'A Cookie', 'Soft Drink']
            },
            postRender: function(control) {
                $alpacaCheckboxListStyled.find('.checkbox').addClass('form-check');
                $alpacaCheckboxListStyled.find('label:not(.alpaca-control-label)').addClass('form-check-label');
                $alpacaCheckboxListStyled.find('input[type=checkbox]').addClass('form-check-input').uniform();
            }
        });

        // Styled radios
        var $alpacaRadioStyled = $('#alpaca-radio-styled');
        $alpacaRadioStyled.alpaca({
            data: 'Jimi Hendrix',
            schema: {
                enum: ['Jimi Hendrix', 'Mark Knopfler', 'Joe Satriani', 'Eddie Van Halen', 'Orianthi']
            },
            options: {
                type: 'radio',
                label: 'Who is your favorite guitarist?',
                vertical: true
            },
            postRender: function(control) {
                $alpacaRadioStyled.find('.radio').addClass('form-check');
                $alpacaRadioStyled.find('label:not(.alpaca-control-label)').addClass('form-check-label');
                $alpacaRadioStyled.find('input[type=radio]').addClass('form-check-input').uniform();
            }
        });

        // Disabled mode
        var $alpacaRadioStyledDisabled = $('#alpaca-radio-styled-disabled');
        $alpacaRadioStyledDisabled.alpaca({
            data: 'Jimi Hendrix',
            schema: {
                enum: ['Jimi Hendrix', 'Mark Knopfler', 'Joe Satriani', 'Eddie Van Halen', 'Orianthi']
            },
            options: {
                type: 'radio',
                label: 'Who is your favorite guitarist?',
                vertical: true,
                disabled: true
            },
            postRender: function(control) {
                $alpacaRadioStyledDisabled.find('.radio').addClass('form-check');
                $alpacaRadioStyledDisabled.find('label:not(.alpaca-control-label)').addClass('form-check-label');
                $alpacaRadioStyledDisabled.find('input[type=radio]').addClass('form-check-input').uniform();
            }
        });
    };

    // Alpaca with Switchery
    var _componentAlpacaControlsSwitchery = function() {
        if (!$().alpaca || typeof Switchery == 'undefined') {
            console.warn('Warning - alpaca.min.js and/or switchery.min.js is not loaded.');
            return;
        }

        // Switchery toggle
        var $alpacaSwitchery = $('#alpaca-switchery');
        $alpacaSwitchery.alpaca({
            data: true,
            options: {
                label: 'Question:',
                rightLabel: 'Do you like Alpaca?',
                fieldClass: 'switchery-demo'
            },
            postRender: function() {

                // Init Switchery
                var elems = Array.prototype.slice.call(document.querySelectorAll('.switchery-demo input[type=checkbox]'));
                elems.forEach(function(html) {
                  var switchery = new Switchery(html);
                });

                $alpacaSwitchery.find('.checkbox').addClass('form-check form-check-switchery');
                $alpacaSwitchery.find('label:not(.alpaca-control-label)').addClass('form-check-label');
            }
        });

        // Disabled Switchery
        var $alpacaSwitcheryDisabled = $('#alpaca-switchery-disabled');
        $alpacaSwitcheryDisabled.alpaca({
            data: true,
            options: {
                label: 'Question:',
                rightLabel: 'Do you like Alpaca?',
                fieldClass: 'switchery-disabled-demo',
                disabled: true
            },
            postRender: function(control) {

                // Init Switchery
                var elems = Array.prototype.slice.call(document.querySelectorAll('.switchery-disabled-demo input[type=checkbox]'));
                elems.forEach(function(html) {
                  var switchery = new Switchery(html);
                });

                $alpacaSwitcheryDisabled.find('.checkbox').addClass('form-check form-check-switchery');
                $alpacaSwitcheryDisabled.find('label:not(.alpaca-control-label)').addClass('form-check-label');
            }
        });
    };

    // Alpaca with Tokenfield
    var _componentAlpacaControlsTokenfield = function() {
        if (!$().alpaca || !$().tokenfield) {
            console.warn('Warning - alpaca.min.js and/or tokenfield.min.js is not loaded.');
            return;
        }

        // Basic setup
        $('#alpaca-tokenfield').alpaca({
            schema: {
                title: 'Character Names',
                type: 'string'
            },
            options: {
                type: 'token',
                focus: false,
                tokenfield: {
                    autocomplete: {
                        source: ['marty', 'doc', 'george', 'biff', 'lorraine', 'mr. strickland'],
                        delay: 100
                    },
                    showAutocompleteOnFocus: true
                }
            },
            data: 'marty,doc,george,biff'
        });

        // Display only mode
        $('#alpaca-tokenfield-static').alpaca({
            schema: {
                title: 'Character Names',
                type: 'string'
            },
            options: {
                type: 'token',
                focus: false,
                tokenfield: {
                    autocomplete: {
                        source: ['marty', 'doc', 'george', 'biff', 'lorraine', 'mr. strickland'],
                        delay: 100
                    },
                    showAutocompleteOnFocus: true
                }
            },
            data: 'marty,doc,george,biff',
            view: 'bootstrap-display'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentAlpacaControls();
            _componentAlpacaControlsUniform();
            _componentAlpacaControlsSwitchery();
            _componentAlpacaControlsTokenfield();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    AlpacaControls.init();
});
