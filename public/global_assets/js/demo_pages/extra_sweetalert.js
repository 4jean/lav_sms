/* ------------------------------------------------------------------------------
 *
 *  # Sweet Alert component
 *
 *  Demo JS code for extra_sweetalert.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var SweetAlert = function () {


    //
    // Setup module components
    //

    // Sweet Alerts
    var _componentSweetAlert = function() {
        if (typeof swal == 'undefined') {
            console.warn('Warning - sweet_alert.min.js is not loaded.');
            return;
        }

        // Defaults
        var setCustomDefaults = function() {
            swal.setDefaults({
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-primary',
                cancelButtonClass: 'btn btn-light'
            });
        }
        setCustomDefaults();


        //
        // Basic options
        //

        // Basic
        $('#sweet_basic').on('click', function() {
            swal({
                title: 'Here is a message!'
            });
        });

        // With title
        $('#sweet_title_text').on('click', function() {
            swal({
                title: 'Here\'s a message!',
                text: 'It\'s pretty, isn\'t it?'
            });
        });

        // Close button
        $('#sweet_close').on('click', function() {
            swal({
                title: 'Good job!',
                text: 'You clicked the button!',
                type: 'success',
                showCloseButton: true
            }).catch(swal.noop);
        });

        // Custom padding
        $('#sweet_padding').on('click', function() {
            swal({
                title: 'Oops...',
                text: 'Something went wrong!',
                type: 'error',
                padding: 30
            });
        });

        // Custom width
        $('#sweet_width').on('click', function() {
            swal({
                title: 'Got question?',
                text: 'If you have any questions, don\t hesitate to let us know!',
                type: 'question',
                width: '35%'
            });
        });

        // Auto closing
        $('#sweet_auto_closer').on('click', function() {
            swal({
                title: 'Auto close alert!',
                text: 'I will close in 2 seconds.',
                timer: 2000
            });
        });

        // Dynamic queue
        $('#sweet_queue').on('click', function() {
            swal.queue([{
                title: 'Your public IP',
                confirmButtonText: 'Show my public IP',
                text: 'Your public IP will be received ' + 'via AJAX request',
                showLoaderOnConfirm: true,
                preConfirm: function () {
                    return new Promise(function (resolve) {
                        $.get('https://api.ipify.org?format=json')
                        .done(function (data) {
                            swal.insertQueueStep(data.ip);
                            resolve();
                        });
                    });
                }
            }]);
        });

        // AJAX requests
        $('#sweet_ajax').on('click', function() {
            swal({
                title: 'Submit email to run ajax request',
                input: 'email',
                inputPlaceholder: 'Enter your email',
                inputClass: 'form-control',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                preConfirm: function (email) {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            if (email === 'taken@example.com') {
                                swal.showValidationError('This email is already taken.')
                            }
                            resolve();
                        }, 2000);
                    });
                },
                allowOutsideClick: false
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        title: 'Ajax request finished!',
                        html: 'Submitted email: <span class="font-weight-semibold">' + result.value + '</span>'
                    });
                }
            });
        });

        // HTML message
        $('#sweet_html').on('click', function() {
            swal({
                title: '<i>HTML</i> <u>example</u>',
                html: 'You can use <strong>bold text</strong>, ' + '<a href="http://demo.interface.club">links</a> ' + 'and other <span class="text-warning">HTML tags</span>'
            });
        });

        // Image
        $('#sweet_image').on('click', function() {
            swal({
                title: 'Sweet!',
                text: 'Bootstrap is awesome.',
                imageUrl: 'https://getbootstrap.com/assets/img/bootstrap-stack.png',
                imageWidth: 260
            });
        });

        // Background image
        $('#sweet_bg').on('click', function() {
            swal({
                title: 'Sweet!',
                type: 'success',
                text: 'Custom backgrounds are awesome.',
                background: '#fff url(../../../../global_assets/images/backgrounds/seamless.png) repeat'
            });
        });

        // Chaining notifications
        $('#sweet_chain').on('click', function() {

            // Defaults
            swal.setDefaults({
                input: 'text',
                confirmButtonText: 'Next <i class="icon-arrow-right14 ml-2"></i>',
                showCancelButton: false,
                inputClass: 'form-control',
                animation: false,
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-primary',
                progressSteps: ['1', '2', '3']
            });

            // Setup steps
            var steps = [
                {
                    title: 'Question 1',
                    text: 'Step #1 - ask your first question',
                    inputPlaceholder: 'Enter your first question'
                },
                {
                    title: 'Question 2',
                    text: 'Step #2 - ask your second question',
                    inputPlaceholder: 'Enter your second question'
                },
                {
                    title: 'Question 3',
                    text: 'Step #3 - ask your third question',
                    inputPlaceholder: 'Enter your third question'
                }
            ];

            // Initialize
            swal.queue(steps).then(function (result) {
                swal.resetDefaults();
                setCustomDefaults();
                swal({
                    title: 'All done!',
                    html: 'Your answers: <pre class="mt-3"><code>' + JSON.stringify(result) + '</code></pre>',
                    confirmButtonText: 'Lovely!',
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-primary'
                });
            }, function () {
                swal.resetDefaults();
                setCustomDefaults();
            });
        });

        // Reversed buttons
        $('#sweet_reverse_buttons').on('click', function() {
            swal({
                title: 'What is your name?',
                input: 'text',
                inputPlaceholder: 'Your name or nickname',
                showCancelButton: true,
                inputClass: 'form-control',
                confirmButtonText: 'Submit',
                reverseButtons: true
            });
        });

        // Fullscreen
        $('#sweet_fullscreen').on('click', function() {
            swal({
                title: 'Here\'s a message!',
                text: 'It\'s pretty, isn\'t it?',
                type: 'success',
                showConfirmButton: false,
                showCloseButton: true,
                grow: 'fullscreen'
            });
        });

        // Column grow
        $('#sweet_column').on('click', function() {
            swal({
                title: 'Here\'s a message!',
                text: 'It\'s pretty, isn\'t it?',
                type: 'success',
                showConfirmButton: false,
                showCloseButton: true,
                grow: 'column'
            });
        });

        // Row grow
        $('#sweet_row').on('click', function() {
            swal({
                title: 'Here\'s a message!',
                text: 'It\'s pretty, isn\'t it?',
                type: 'success',
                grow: 'row'
            });
        });

        // Disabled keyboard interactions
        $('#sweet_disabled_keyboard').on('click', function() {
            swal({
                title: 'Oops...',
                text: 'Something went wrong!',
                type: 'error',
                allowEscapeKey: false,
                allowEnterKey: false
            });
        });

        // Disabled animation
        $('#sweet_disabled_animation').on('click', function() {
            swal({
                title: 'For your information',
                text: 'This is some sort of a custom alert',
                type: 'info',
                animation: false
            });
        });

        // Disabled backdrop
        $('#sweet_disabled_backdrop').on('click', function() {
            swal({
                title: 'Got question?',
                text: 'You will get the answer soon!',
                type: 'question',
                backdrop: false
            });
        });

        // Disabled backdrop
        $('#sweet_disabled_outside_click').on('click', function() {
            swal({
                title: 'Oops...',
                text: 'Something went wrong!',
                type: 'error',
                allowOutsideClick: false
            });
        });


        //
        // Input types
        //

        // Text type
        $('#sweet_text').on('click', function() {
            swal({
                title: 'What is your name?',
                input: 'text',
                inputPlaceholder: 'Your name or nickname',
                showCancelButton: true,
                inputClass: 'form-control',
                inputValidator: function (value) {
                    return !value && 'You need to write something!'
                }
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        html: 'Hi, ' + result.value
                    });
                }
            });
        });

        // Email type
        $('#sweet_email').on('click', function() {
            swal({
                title: 'Input email address',
                input: 'email',
                inputClass: 'form-control',
                inputPlaceholder: 'Enter your email',
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        html: 'Entered email: ' + result.value
                    });
                }
            });
        });

        // URL type
        $('#sweet_url').on('click', function() {
            swal({
                title: 'Input URL',
                input: 'url',
                inputClass: 'form-control',
                inputPlaceholder: 'Enter URL',
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        html: 'Entered URL: ' + result.value
                    });
                }
            });
        });

        // Password type
        $('#sweet_password').on('click', function() {
            swal({
                title: 'Enter your password',
                input: 'password',
                inputClass: 'form-control',
                inputPlaceholder: 'Enter your password',
                inputAttributes: {
                    'maxlength': 10,
                    'autocapitalize': 'off',
                    'autocorrect': 'off'
                }
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        html: 'Entered password: ' + result.value
                    });
                }
            });
        });

        // Textarea type
        $('#sweet_textarea').on('click', function() {
            swal({
                title: 'Enter your comment',
                input: 'textarea',
                inputPlaceholder: 'Type your message here',
                showCancelButton: true,
                inputClass: 'form-control'
            }).then(function (result) {
                if (result.value) {
                    swal({
                        title: 'Your comment:',
                        text: result.value
                    });
                }
            });
        });

        // Select type
        $('#sweet_select').on('click', function() {
            swal({
                title: 'Select Netherlands',
                input: 'select',
                inputOptions: {
                    'DE': 'Germany',
                    'UA': 'Ukraine',
                    'HR': 'Croatia',
                    'NL': 'Netherlands'
                },
                inputPlaceholder: 'Select country',
                inputClass: 'form-control',
                showCancelButton: true,
                inputValidator: function (value) {
                    return new Promise(function (resolve) {
                        if (value === 'NL') {
                            resolve();
                        } else {
                            resolve('You need to select Netherlands :)');
                        }
                    });
                }
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        html: 'You selected: ' + result.value
                    });
                }
            });
        });

        // Radio type
        $('#sweet_radio').on('click', function() {

            // inputOptions can be an object or Promise
            var inputOptions = new Promise(function (resolve) {
                setTimeout(function () {
                    resolve({
                        '#ff0000': 'Red',
                        '#00ff00': 'Green',
                        '#0000ff': 'Blue'
                    });
                }, 2000)
            });

            // Initialize
            swal({
                title: 'Select color',
                input: 'radio',
                inputOptions: inputOptions,
                inputValidator: function (value) {
                    return !value && 'You need to choose something!'
                }
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        html: 'You selected: ' + result.value
                    });
                }
            });
        });

        // Checkbox type
        $('#sweet_checkbox').on('click', function() {
            swal({
                title: 'Terms and conditions',
                input: 'checkbox',
                inputValue: 1,
                inputPlaceholder: 'I agree with the terms and conditions',
                confirmButtonText: 'Continue <i class="icon-arrow-right14 ml-2></i>',
                inputValidator: function (value) {
                    return !value && 'You need to agree with T&C'
                }
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        text: 'You agreed with T&C :)'
                    });
                }
            });
        });


        // Range type
        $('#sweet_range').on('click', function() {
            swal({
                title: 'How old are you?',
                type: 'question',
                input: 'range',
                inputAttributes: {
                    min: 8,
                    max: 120,
                    step: 1
                },
                inputValue: 25
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        html: 'Your age is ' + result.value
                    });
                }
            });
        });


        //
        // Contextual alerts
        //
        
        // Success alert
        $('#sweet_success').on('click', function() {
            swal({
                title: 'Good job!',
                text: 'You clicked the button!',
                type: 'success'
            });
        });

        // Error alert
        $('#sweet_error').on('click', function() {
            swal({
                title: 'Oops...',
                text: 'Something went wrong!',
                type: 'error'
            });
        });

        // Warning alert
        $('#sweet_warning').on('click', function() {
            swal({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            });
        });

        // Info alert
        $('#sweet_info').on('click', function() {
            swal({
                title: 'For your information',
                text: 'This is some sort of a custom alert',
                type: 'info'
            });
        });

        // Question
        $('#sweet_question').on('click', function() {
            swal({
                title: 'Got question?',
                text: 'You will get the answer soon!',
                type: 'question'
            });
        });

        // Alert combination
        $('#sweet_combine').on('click', function() {
            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                buttonsStyling: false
            }).then(function () {
                swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
            }, function (dismiss) {

                // Dismiss can be 'cancel', 'overlay', 'close', and 'timer'
                if (dismiss === 'cancel') {
                    swal(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    );
                }
            });
        });


        //
        // Positions
        //

        // Top
        $('#sweet_top').on('click', function() {
            swal({
                title: 'Good job!',
                text: 'You clicked the button!',
                type: 'success',
                position: 'top'
            });
        });

        // Top left
        $('#sweet_top_left').on('click', function() {
            swal({
                title: 'Good job!',
                text: 'You clicked the button!',
                type: 'success',
                position: 'top-left'
            });
        });

        // Top right
        $('#sweet_top_right').on('click', function() {
            swal({
                title: 'Good job!',
                text: 'You clicked the button!',
                type: 'success',
                position: 'top-right'
            });
        });


        // Center left
        $('#sweet_center_left').on('click', function() {
            swal({
                title: 'Good job!',
                text: 'You clicked the button!',
                type: 'success',
                position: 'center-left'
            });
        });

        // Center right
        $('#sweet_center_right').on('click', function() {
            swal({
                title: 'Good job!',
                text: 'You clicked the button!',
                type: 'success',
                position: 'center-right'
            });
        });


        // Bottom
        $('#sweet_bottom').on('click', function() {
            swal({
                title: 'Good job!',
                text: 'You clicked the button!',
                type: 'success',
                position: 'bottom'
            });
        });

        // Bottom left
        $('#sweet_bottom_left').on('click', function() {
            swal({
                title: 'Good job!',
                text: 'You clicked the button!',
                type: 'success',
                position: 'bottom-left'
            });
        });

        // Bottom right
        $('#sweet_bottom_right').on('click', function() {
            swal({
                title: 'Good job!',
                text: 'You clicked the button!',
                type: 'success',
                position: 'bottom-right'
            });
        });


        //
        // Events
        //

        // onOpen event
        $('#sweet_onopen').on('click', function() {
            swal({
                title: 'Here\'s a message!',
                text: 'It\'s pretty, isn\'t it?',
                onOpen: function () {
                    alert('Notification is opened.');
                }
            });
        });

        // onClose event
        $('#sweet_onclose').on('click', function() {
            swal({
                title: 'Here\'s a message!',
                text: 'It\'s pretty, isn\'t it?',
                onClose: function () {
                    alert('Notification is closed.');
                }
            });
        });
    };

    // SweetAlert with Select2 selects
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Select2 single
        $('#sweet_select2_single').on('click', function() {
            swal({
                title: 'Select Netherlands',
                input: 'select',
                inputOptions: {
                    '': '',
                    'DE': 'Germany',
                    'UA': 'Ukraine',
                    'HR': 'Croatia',
                    'NL': 'Netherlands'
                },
                inputClass: 'form-control select-single',
                showCancelButton: true,
                inputValidator: function (value) {
                    return new Promise(function (resolve) {
                        if (value === 'NL') {
                            resolve();
                        } else {
                            resolve('You need to select Netherlands :)');
                        }
                    });
                },
                inputAttributes: {
                    'data-placeholder': 'Select Netherlands'
                },
                onOpen: function() {

                    // Initialize Select2
                    $('.swal2-select.select-single').select2({
                        minimumResultsForSearch: Infinity
                    });
                }
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        html: 'You selected: ' + result.value
                    });
                }
            });
        });

        // Select2 multiple
        $('#sweet_select2_multiple').on('click', function() {
            swal({
                title: 'Select country',
                input: 'select',
                inputOptions: {
                    'DE': 'Germany',
                    'UA': 'Ukraine',
                    'HR': 'Croatia',
                    'NL': 'Netherlands'
                },
                inputValue: 'NL',
                inputClass: 'form-control select-multiple',
                showCancelButton: true,
                inputValidator: function (value) {
                    return !value && 'You need to select something!'
                },
                inputAttributes: {
                    'data-placeholder': 'Select country',
                    'multiple': 'multiple'
                },
                onOpen: function() {

                    // Initialize Select2
                    $('.swal2-select.select-multiple').select2();
                }
            }).then(function (result) {
                if (result.value) {
                swal({
                    type: 'success',
                    html: 'You selected: ' + JSON.stringify($('.swal2-select.select-multiple').val())
                });
            }
            });
        });
    };

    // SweetAlert with Bootstrap Multiselect
    var _componentMultiselect = function() {
        if (!$().multiselect) {
            console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }

        // SweetAlert with Multiselect
        $('#sweet_multiselect').on('click', function() {
            swal({
                title: 'Select countries',
                input: 'select',
                inputOptions: {
                    'DE': 'Germany',
                    'UA': 'Ukraine',
                    'HR': 'Croatia',
                    'NL': 'Netherlands'
                },
                inputClass: 'form-control select-multiselect',
                showCancelButton: true,
                inputValidator: function (value) {
                    return !$('.swal2-select.select-multiselect').val().length && 'You need to select something!'
                },
                inputAttributes: {
                    'multiple': 'multiple'
                },
                onOpen: function() {

                    // Initialize Multiselect when dialog is opened
                    $('.swal2-select.select-multiselect').multiselect();

                    // Initialize Uniform for custom checkboxes
                    $('.swal2-popup input[type=checkbox]').uniform();
                }
            }).then(function (result) {

                // Display selected values
                swal({
                    type: 'success',
                    html: 'You selected: ' + JSON.stringify($('.swal2-select.select-multiselect').val())
                });

                // Show another modal if Cancel button is clicked
                if (result.dismiss === 'cancel') {
                    swal({
                        title: 'Cancelled',
                        text: 'You are safe now :)',
                        type: 'error'
                    });
                }
            });
        });        
    };

    // SweetAlert with custom checkboxes, radios and file input
    var _componentControlsCustom = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Modal with custom checkboxes
        $('#sweet_checkbox_custom').on('click', function() {
            swal({
                title: 'Terms and conditions',
                input: 'checkbox',
                inputValue: 1,
                inputClass: 'form-check-styled',
                inputPlaceholder: 'I agree with the terms and conditions',
                confirmButtonText: 'Continue <i class="icon-arrow-right14 ml-2></i>',
                inputValidator: function (value) {
                    return !value && 'You need to agree with T&C'
                },
                onOpen: function() {

                    // Initialize Uniform for custom checkboxes
                    $('.swal2-checkbox.form-check-styled input[type=checkbox]').uniform();
                }
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        text: 'You agreed with T&C :)'
                    });
                }
            });
        });

        // Modal with custom radios
        $('#sweet_radio_custom').on('click', function() {

            // inputOptions can be an object or Promise
            var inputOptions = new Promise(function (resolve) {
                resolve({
                    '#ff0000': 'Red',
                    '#00ff00': 'Green',
                    '#0000ff': 'Blue'
                });
            });

            // Initialize
            swal({
                title: 'Select color',
                input: 'radio',
                inputOptions: inputOptions,
                inputClass: 'form-check-styled',
                inputValidator: function (value) {
                    return !value && 'You need to choose something!'
                },
                onOpen: function() {

                    // Initialize Uniform for custom radios
                    $('.swal2-radio.form-check-styled input[type=radio]').uniform();
                }
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        html: 'You selected: ' + result.value
                    });
                }
            });
        });

        // File type
        $('#sweet_file').on('click', function() {
            swal({
                title: 'Select image',
                input: 'file',
                inputClass: 'form-control',
                inputAttributes: {
                    accept: 'image/*'
                },
                onOpen: function() {

                    // Initialize Uniform for custom radios
                    $('.swal2-file').uniform();
                }
            }).then(function (result) {
                if (result.value) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        swal({
                            title: 'Your uploaded picture',
                            imageUrl: e.target.result,
                            imageAlt: 'The uploaded picture'
                        });
                    }
                    reader.readAsDataURL(result.value);
                }
            });
        });
    };

    // SweetAlert with custom checkboxes, radios and file input
    var _componentControlSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Modal with custom checkboxes
        $('#sweet_switchery').on('click', function() {
            swal({
                title: 'Terms and conditions',
                input: 'checkbox',
                inputValue: 0,
                inputClass: 'form-check-styled',
                inputPlaceholder: 'I agree with the terms and conditions',
                confirmButtonText: 'Continue <i class="icon-arrow-right14 ml-2></i>',
                inputValidator: function (value) {
                    return !value && 'You need to agree with T&C'
                },
                onOpen: function() {

                    // Initialize Switchery
                    var elem = document.querySelector('.swal2-checkbox.form-check-styled input[type=checkbox]');
                    var init = new Switchery(elem);
                }
            }).then(function (result) {
                if (result.value) {
                    swal({
                        type: 'success',
                        text: 'You agreed with T&C :)'
                    });
                }
            });
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentSweetAlert();
            _componentSelect2();
            _componentMultiselect();
            _componentControlsCustom();
            _componentControlSwitchery();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    SweetAlert.initComponents();
});
