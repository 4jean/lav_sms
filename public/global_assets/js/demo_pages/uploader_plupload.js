/* ------------------------------------------------------------------------------
 *
 *  # Plupload multiple file uploader
 *
 *  Demo JS code for uploader_plupload.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Plupload = function() {


    //
    // Setup module components
    //

    // Bootstrap file upload
    var _componentPlupload = function() {
        if (!$().pluploadQueue) {
            console.warn('Warning - Plupload files are not loaded.');
            return;
        }

        // Setup all runtimes
        $('.file-uploader').pluploadQueue({
            runtimes: 'html5, html4, Flash, Silverlight',
            url: '../../../../global_assets/demo_data/uploader/plupload.json',
            chunk_size: '300Kb',
            unique_names: true,
            header: true,
            filters: {
                max_file_size: '300Kb',
                mime_types: [{
                    title: 'Image files',
                    extensions: 'jpg,gif,png'
                }]
            },
            resize: {
                width: 320,
                height: 240,
                quality: 90
            }
        });

        // Setup flash version
        $('.flash-uploader').pluploadQueue({
            runtimes: 'flash',
            url: '../../../../global_assets/demo_data/uploader/plupload.json',
            chunk_size: '300Kb',
            unique_names: true,
            filters: {
                max_file_size: '300Kb',
                mime_types: [{
                    title: 'Image files',
                    extensions: 'jpg,gif,png'
                }]
            },
            resize: {
                width: 320,
                height: 240,
                quality: 90
            },
            flash_swf_url: '../../../../global_assets/js/plugins/uploaders/plupload/files/Moxie.swf'
        });

        // Setup html5 version
        $('.html5-uploader').pluploadQueue({
            runtimes: 'html5',
            url: '../../../../global_assets/demo_data/uploader/plupload.json',
            chunk_size: '300Kb',
            unique_names: true,
            filters: {
                max_file_size: '300Kb',
                mime_types: [{
                    title: 'Image files',
                    extensions: 'jpg,gif,png'
                }]
            },
            resize: {
                width: 320,
                height: 240,
                quality: 90
            }
        });

        // Setup html4 version
        $('.html4-uploader').pluploadQueue({
            runtimes: 'html4',
            url: '../../../../global_assets/demo_data/uploader/plupload.json',
            unique_names: true,
            filters: {
                max_file_size: '300Kb',
                mime_types: [{
                    title: 'Image files',
                    extensions: 'jpg,gif,png'
                }]
            }
        });

        // Events
        $('.uploader-events').pluploadQueue({
            runtimes: 'html5,flash,silverlight,html4',
            url: '../../../../global_assets/demo_data/uploader/plupload.json',
            chunk_size: '300Kb',
            unique_names: true,
            resize: {
                width: 320,
                height: 240,
                quality: 90
            },
            filters: {
                max_file_size: '300Kb',
                mime_types: [{
                    title: 'Image files',
                    extensions: 'jpg,gif,png'
                }]
            },
            flash_swf_url: '../../../../global_assets/js/plugins/uploaders/plupload/files/Moxie.swf',
            silverlight_xap_url: '/plupload/js/Moxie.xap',
            preinit: {
                Init: function(up, info) {
                    log('[Init]', 'Info:', info, 'Features:', up.features);
                },
                UploadFile: function(up, file) {
                    log('[UploadFile]', file);
                }
            },
            init: {
                Browse: function(up) {
                    log('[Browse]'); // Called when file picker is clicked
                },

                Refresh: function(up) {
                    log('[Refresh]'); // Called when the position or dimensions of the picker change
                },

                StateChanged: function(up) {
                    log('[StateChanged]', up.state == plupload.STARTED ? 'STARTED': 'STOPPED'); // Called when the state of the queue is changed
                },

                QueueChanged: function(up) {
                    log('[QueueChanged]'); // Called when queue is changed by adding or removing files
                },

                OptionChanged: function(up, name, value, oldValue) {
                    log('[OptionChanged]', 'Option Name: ', name, 'Value: ', value, 'Old Value: ', oldValue); // Called when one of the configuration options is changed
                },

                BeforeUpload: function(up, file) {
                    log('[BeforeUpload]', 'File: ', file); // Called right before the upload for a given file starts, can be used to cancel it if required
                },

                UploadProgress: function(up, file) {
                    log('[UploadProgress]', 'File:', file, 'Total:', up.total); // Called while file is being uploaded
                },

                FileFiltered: function(up, file) {
                    log('[FileFiltered]', 'File:', file); // Called when file successfully files all the filters
                },

                FilesAdded: function(up, files) {
                    log('[FilesAdded]'); // Called when files are added to queue

                    plupload.each(files, function(file) {
                        log('  File:', file);
                    });
                },

                FilesRemoved: function(up, files) {
                    log('[FilesRemoved]'); // Called when files are removed from queue

                    plupload.each(files, function(file) {
                        log('  File:', file);
                    });
                },

                FileUploaded: function(up, file, info) {
                    log('[FileUploaded] File:', file, 'Info:', info); // Called when file has finished uploading
                },

                ChunkUploaded: function(up, file, info) {
                    log('[ChunkUploaded] File:', file, 'Info:', info); // Called when file chunk has finished uploading
                },

                UploadComplete: function(up, files) {
                    log('[UploadComplete]'); // Called when all files are either uploaded or failed
                },

                Destroy: function(up) {
                    log('[Destroy] '); // Called when uploader is destroyed
                },

                Error: function(up, args) {
                    log('[Error] ', args); // Called when error occurs
                }
            }
        });


        // Write log
        function log() {
            var str = '';

            plupload.each(arguments, function(arg) {
                var row = '';

                if (typeof(arg) != 'string') {
                    plupload.each(arg, function(value, key) {

                        // Convert items in File objects to human readable form
                        if (arg instanceof plupload.File) {

                            // Convert status to human readable
                            switch (value) {
                                case plupload.QUEUED:
                                value = 'QUEUED';
                                break;

                                case plupload.UPLOADING:
                                value = 'UPLOADING';
                                break;

                                case plupload.FAILED:
                                value = 'FAILED';
                                break;

                                case plupload.DONE:
                                value = 'DONE';
                                break;
                            }
                        }

                        if (typeof(value) != 'function') {
                            row += (row ? ', ': '') + key + '=' + value;
                        }
                    });

                    str += row + ' ';
                }
                else {
                    str += arg + ' ';
                }
            });

            var log = $('#log');
            log.append(str + '<br>');
            log.scrollTop(log[0].scrollHeight);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentPlupload();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Plupload.init();
});
