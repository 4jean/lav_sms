/* ------------------------------------------------------------------------------
 *
 *  # Trumbowyg editor
 *
 *  Demo JS code for editor_trumbowyg.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Trumbowyg = function() {


    //
    // Setup module components
    //

    // Trumbowyg editor
    var _componentTrumbowyg = function() {
        if (!$().trumbowyg) {
            console.warn('Warning - trumbowyg.min.js is not loaded.');
            return;
        }

        // Set custom icons path
        $.trumbowyg.svgPath = '../../../../global_assets/js/plugins/editors/trumbowyg/ui/icons.svg';

        // Default initialization
        $('#trumbowyg_default').trumbowyg();

        // Custom toolbar
        $('#trumbowyg_custom').trumbowyg({
            btns: [
                // ['formatting'],
                ['strong', 'em'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                ['unorderedList', 'orderedList'],
                ['undo', 'redo'], // Only supported in Blink browsers
                ['insertImage', 'link'],
                ['viewHTML'],
                ['fullscreen']
            ]
        });

        // Custom plugins
        $('#trumbowyg_plugins').trumbowyg({
            btns: [
                ['base64'],
                ['foreColor', 'backColor'],
                ['insertAudio'],
                ['noembed'],
                ['preformatted'],
                ['template'],
                ['upload'],
                ['fullscreen']
            ],
            plugins: {
                templates: [
                    {
                        name: 'Template 1',
                        html: '<p>I am a template!</p>'
                    },
                    {
                        name: 'Template 2',
                        html: '<p>I am a different template!</p>'
                    }
                ],
                upload: {
                    serverPath: '',
                    fileFieldName: 'image',
                    headers: {
                        '': ''
                    },
                    urlPropertyName: ''
                }
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentTrumbowyg();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Trumbowyg.init();
});
