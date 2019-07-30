/* ------------------------------------------------------------------------------
 *
 *  # Dropzone multiple file uploader
 *
 *  Demo JS code for uploader_dropzone.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DropzoneUploader = function() {


    //
    // Setup module components
    //

    // Dropzone file uploader
    var _componentDropzone = function() {
        if (typeof Dropzone == 'undefined') {
            console.warn('Warning - dropzone.min.js is not loaded.');
            return;
        }

        // Multiple files
        Dropzone.options.dropzoneMultiple = {
            paramName: "file", // The name that will be used to transfer the file
            dictDefaultMessage: 'Drop files to upload <span>or CLICK</span>',
            maxFilesize: 0.1 // MB
        };

        // Single files
        Dropzone.options.dropzoneSingle = {
            paramName: "file", // The name that will be used to transfer the file
            maxFilesize: 1, // MB
            maxFiles: 1,
            dictDefaultMessage: 'Drop file to upload <span>or CLICK</span>',
            autoProcessQueue: false,
            init: function() {
                this.on('addedfile', function(file){
                    if (this.fileTracker) {
                    this.removeFile(this.fileTracker);
                }
                    this.fileTracker = file;
                });
            }
        };

        // Accepted files
        Dropzone.options.dropzoneAcceptedFiles = {
            paramName: "file", // The name that will be used to transfer the file
            dictDefaultMessage: 'Drop files to upload <span>or CLICK</span>',
            maxFilesize: 1, // MB
            acceptedFiles: 'image/*'
        };

        // Removable thumbnails
        Dropzone.options.dropzoneRemove = {
            paramName: "file", // The name that will be used to transfer the file
            dictDefaultMessage: 'Drop files to upload <span>or CLICK</span>',
            maxFilesize: 1, // MB
            addRemoveLinks: true
        };

        // File limitations
        Dropzone.options.dropzoneFileLimits = {
            paramName: "file", // The name that will be used to transfer the file
            dictDefaultMessage: 'Drop files to upload <span>or CLICK</span>',
            maxFilesize: 0.4, // MB
            maxFiles: 4,
            maxThumbnailFilesize: 1,
            addRemoveLinks: true
        };
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentDropzone();
        }
    }
}();


// Initialize module
// ------------------------------

DropzoneUploader.init();
