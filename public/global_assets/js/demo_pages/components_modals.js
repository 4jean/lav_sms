/* ------------------------------------------------------------------------------
 *
 *  # Bootstrap modals and extensions
 *
 *  Demo JS code for components_modals.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Modals = function () {


    //
    // Setup module components
    //

    // Load remote content
    var _componentModalRemote = function() {
        $('#modal_remote').on('show.bs.modal', function() {
            $(this).find('.modal-body').load('../../../../global_assets/demo_data/wizard/education.html', function() {
                _componentSelect2();
            });
        });
    };

    // Modal callbacks
    var _componentModalCallbacks = function() {

        // onShow callback
        $('#modal_onshow').on('show.bs.modal', function() {
            alert('onShow callback fired.')
        });

        // onShown callback
        $('#modal_onshown').on('shown.bs.modal', function() {
            alert('onShown callback fired.')
        });

        // onHide callback
        $('#modal_onhide').on('hide.bs.modal', function() {
            alert('onHide callback fired.')
        });

        // onHidden callback
        $('#modal_onhidden').on('hidden.bs.modal', function() {
            alert('onHidden callback fired.')
        });
    };

    // Bootbox extension
    var _componentModalBootbox = function() {
        if (typeof bootbox == 'undefined') {
            console.warn('Warning - bootbox.min.js is not loaded.');
            return;
        }

        // Alert dialog
        $('#alert').on('click', function() {
            bootbox.alert({
                title: 'Check this out!',
                message: 'Native alert dialog has been replaced with Bootbox alert box.'
            });
        });

        // Confirmation dialog
        $('#confirm').on('click', function() {
            bootbox.confirm({
                title: 'Confirm dialog',
                message: 'Native confirm dialog has been replaced with Bootbox confirm box.',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-link'
                    }
                },
                callback: function (result) {
                    bootbox.alert({
                        title: 'Confirmation result',
                        message: 'Confirm result: ' + result
                    });
                }
            });
        });

        // Prompt dialog
        $('#prompt').on('click', function() {
            bootbox.prompt({
                title: 'Please enter your name',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-link'
                    }
                },
                callback: function (result) {
                    if (result === null) {                                             
                        bootbox.alert({
                            title: 'Prompt dismissed',
                            message: 'You have cancelled this damn thing'
                        });                              
                    } else {
                        bootbox.alert({
                            title: 'Hi <strong>' + result + '</strong>',
                            message: 'How are you doing today?'
                        });                              
                    }
                }
            });
        });

        // Prompt dialog with default value
        $('#prompt_value').on('click', function() {
            bootbox.prompt({
                title: 'What is your real name?',
                value: 'Eugene Kopyov',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-link'
                    }
                },
                callback: function(result) {
                    if (result === null) {                                             
                        bootbox.alert({
                            title: 'Prompt dismissed',
                            message: 'You have cancelled this damn thing'
                        });                              
                    } else {
                        bootbox.alert({
                            title: 'Hi <strong>' + result + '</strong>',
                            message: 'How are you doing today?'
                        });                              
                    }
                }
            });
        });

        // Custom bootbox dialog
        $('#bootbox_custom').on('click', function() {
            bootbox.dialog({
                message: 'I am a custom dialog',
                title: 'Custom title',
                buttons: {
                    success: {
                        label: 'Success!',
                        className: 'btn-success',
                        callback: function() {
                            bootbox.alert({
                                title: 'Success!',
                                message: 'This is a great success!'
                            });
                        }
                    },
                    danger: {
                        label: 'Danger!',
                        className: 'btn-danger',
                        callback: function() {
                            bootbox.alert({
                                title: 'Ohh noooo!',
                                message: 'Uh oh, look out!'
                            });
                        }
                    },
                    main: {
                        label: 'Click ME!',
                        className: 'btn-primary',
                        callback: function() {
                            bootbox.alert({
                                title: 'Hooray!',
                                message: 'Something awesome just happened!'
                            });
                        }
                    }
                }
            });
        });

        // Custom bootbox dialog with form
        $('#bootbox_form').on('click', function() {
            bootbox.dialog({
                    title: 'This is a form in a modal.',
                    message: '<div class="row">  ' +
                        '<div class="col-md-12">' +
                            '<form action="">' +
                                '<div class="form-group row">' +
                                    '<label class="col-md-4 col-form-label">Name</label>' +
                                    '<div class="col-md-8">' +
                                        '<input id="name" name="name" type="text" placeholder="Your name" class="form-control">' +
                                        '<span class="form-text text-muted">Here goes your name</span>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="form-group row">' +
                                    '<label class="col-md-4 col-form-label">How awesome is this?</label>' +
                                    '<div class="col-md-8">' +
                                        '<div class="form-check">' +
                                            '<label class="form-check-label">' +
                                                '<input type="radio" class="form-check-input" name="awesomeness" id="awesomeness-0" value="Really awesome" checked>' +
                                                'Really awesomeness' +
                                            '</label>' +
                                        '</div>' +
                                        '<div class="form-check">' +
                                            '<label class="form-check-label">' +
                                                '<input type="radio" class="form-check-input" name="awesomeness" id="awesomeness-1" value="Super awesome">' +
                                                'Super awesome' +
                                            '</label>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</form>' +
                        '</div>' +
                    '</div>',
                    buttons: {
                        success: {
                            label: 'Save',
                            className: 'btn-success',
                            callback: function () {
                                var name = $('#name').val();
                                var answer = $('input[name="awesomeness"]:checked').val()
                                bootbox.alert({
                                    title: 'Hello ' + name + '!',
                                    message: 'You have chosen <strong>' + answer + '</strong>.'
                                });
                            }
                        }
                    }
                }
            );
        });
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentModalRemote();
            _componentModalCallbacks();
            _componentModalBootbox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Modals.initComponents();
});
