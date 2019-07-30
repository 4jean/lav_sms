/* ------------------------------------------------------------------------------
 *
 *  # Tag inputs
 *
 *  Demo JS code for form_tag_inputs.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var TagInputs = function() {


    //
    // Setup module components
    //

    // Tokenfield
    var _componentTokenfield = function() {
        if (!$().tokenfield) {
            console.warn('Warning - tokenfield.min.js is not loaded.');
            return;
        }

        // Basic initialization
        $('.tokenfield').tokenfield();

        // Create token on blur
        $('.tokenfield-blur').tokenfield({
            createTokensOnBlur: true
        });

        // Custom delimiter
        $('.tokenfield-delimiter').tokenfield({
            delimiter: ';'
        });


        //
        // Primary color
        //

        // Add class on init
        $('.tokenfield-primary').on('tokenfield:initialize', function (e) {
            $(this).parent().find('.token').addClass('bg-primary text-white');
        });

        // Initialize plugin
        $('.tokenfield-primary').tokenfield();

        // Add class when token is created
        $('.tokenfield-primary').on('tokenfield:createdtoken', function (e) {
            $(e.relatedTarget).addClass('bg-primary text-white');
        });


        //
        // Teal color
        //

        // Add class on init
        $('.tokenfield-teal').on('tokenfield:initialize', function (e) {
            $(this).parent().find('.token').addClass('bg-teal text-white');
        });

        // Initialize plugin
        $('.tokenfield-teal').tokenfield();

        // Add class when token is created
        $('.tokenfield-teal').on('tokenfield:createdtoken', function (e) {
            $(e.relatedTarget).addClass('bg-teal text-white');
        });


        //
        // Success color
        //

        // Add class on init
        $('.tokenfield-success').on('tokenfield:initialize', function (e) {
            $(this).parent().addClass('border-success');
            $(this).parent().find('.token').addClass('bg-success text-white');
        });

        // Initialize plugin
        $('.tokenfield-success').tokenfield();

        // Add class when token is created
        $('.tokenfield-success').on('tokenfield:createdtoken', function (e) {
            $(e.relatedTarget).addClass('bg-success text-white');
        });


        //
        // Danger color
        //

        // Add class on init
        $('.tokenfield-danger').on('tokenfield:initialize', function (e) {
            $(this).parent().addClass('border-danger');
            $(this).parent().find('.token').addClass('bg-danger text-white');
        });

        // Initialize plugin
        $('.tokenfield-danger').tokenfield();

        // Add class when token is created
        $('.tokenfield-danger').on('tokenfield:createdtoken', function (e) {
            $(e.relatedTarget).addClass('bg-danger text-white');
        });


        //
        // Typeahead support
        //

        // Use Bloodhound engine
        var engine = new Bloodhound({
            local: [
                {value: 'red'},
                {value: 'blue'},
                {value: 'green'} ,
                {value: 'yellow'},
                {value: 'violet'},
                {value: 'brown'},
                {value: 'purple'},
                {value: 'black'},
                {value: 'white'}
            ],
            datumTokenizer: function(d) {
                return Bloodhound.tokenizers.whitespace(d.value);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace
        });

        // Initialize engine
        engine.initialize();

        // Initialize tokenfield
        $('.tokenfield-typeahead').tokenfield({
            typeahead: [null, {
                displayKey: 'value',
                source: engine.ttAdapter()
            }]
        });


        //
        // Set tokens method
        //

        $('#set-tokens').on('click', function() {
            $('#set-tokens-field').tokenfield('setTokens', ['blue','red','white']);
        });


        //
        // Get tokens method
        //

        $('#get-tokens').on('click', function() {
            var tokens = $('#get-tokens-field').tokenfield('getTokensList');
            alert(tokens);
        });


        //
        // Create tokens method
        //

        $('#create-token').on('click', function() {
            $('#create-token-field').tokenfield('createToken', { value: 'new', label: 'New token' });
        });


        //
        // Disable, enable
        //

        // Initialize plugin
        $('.tokenfield-disable').tokenfield();

        // Disable on click
        $('#disable').on('click', function() {
            $('.tokenfield-disable').tokenfield('disable');
        });

        // Enabe on click
        $('#enable').on('click', function() {
            $('.tokenfield-disable').tokenfield('enable');
        });


        //
        // Readonly, writeable
        //

        // Initialize plugin
        $('.tokenfield-readonly').tokenfield();

        // Readonly on click
        $('#readonly').on('click', function() {
            $('.tokenfield-readonly').tokenfield('readonly');
        });

        // Writeable on click
        $('#writeable').on('click', function() {
            $('.tokenfield-readonly').tokenfield('writeable');
        });


        //
        // Destroy, create
        //

        // initialize plugin
        $('.tokenfield-destroy').tokenfield();

        // Destroy on click
        $('#destroy').on('click', function() {
            $('.tokenfield-destroy').removeAttr('data-fouc').tokenfield('destroy');
        });

        // Create on click
        $('#create').on('click', function() {
            $('.tokenfield-destroy').tokenfield();
        });
    };

    // Tags input
    var _componentTagsinput = function() {
        if (!$().tagsinput) {
            console.warn('Warning - tagsinput.min.js is not loaded.');
            return;
        }

        // Display values
        $('.tags-input, [data-role="tagsinput"], .tagsinput-max-tags, .tagsinput-custom-tag-class').on('change', function(event) {
            var $element = $(event.target),
                $container = $element.parent().parent('.mb-3');

            if (!$element.data('tagsinput'))
            return;

            var val = $element.val();
            if (val === null)
            val = "null";
        
            $('pre.val > code', $container).html( ($.isArray(val) ? JSON.stringify(val) : "\"" + val.replace('"', '\\"') + "\"") );
            $('pre.items > code', $container).html(JSON.stringify($element.tagsinput('items')));
            Prism.highlightAll();
        }).trigger('change');



        // Basic examples
        // ------------------------------

        // Basic initialization
        $('.tags-input').tagsinput();


        // Allow dublicates
        $('.tags-input-dublicates').tagsinput({
            allowDuplicates: true
        });


        // Set maximum allowed tags
        $('.tagsinput-max-tags').tagsinput({
            maxTags: 5
        });


        // Custom tag class
        $('.tagsinput-custom-tag-class').tagsinput({
            tagClass: function(item){
                return 'bg-success text-white';
            }
        });


        //
        // Typeahead implementation
        //

        // Use Bloodhound engine
        var citynames = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: {
                url: '../../../../global_assets/demo_data/tags_input/citynames.json',
                filter: function(list) {
                    return $.map(list, function(cityname) {
                    return { name: cityname }; });
                }
            }
        });

        // Initialize
        citynames.initialize();

        // Attach typeahead
        $('.tagsinput-typeahead').tagsinput({
            typeaheadjs: {
                name: 'citynames',
                displayKey: 'name',
                valueKey: 'name',
                source: citynames.ttAdapter()
            }
        });


        //
        // Objects as tags
        //

        // Use Bloodhound engine
        var countries = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            prefetch: {
                url: '../../../../global_assets/demo_data/tags_input/cities.json'
            }
        });

        // Kicks off the loading/processing of `local` and `prefetch`
        countries.initialize();

        // Define element
        var elt = $('.tagsinput-tag-objects');

        // Initialize
        elt.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'countries',
                displayKey: 'text',
                source: countries.ttAdapter()
            }
        });

        // Add data
        elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
        elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
        elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
        elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
        elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });


        //
        // Categorize tags
        //

        // Use Bloodhound engine
        var continents = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('continent'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            prefetch: {
                url: '../../../../global_assets/demo_data/tags_input/cities.json'
            }
        });

        // Kicks off the loading/processing of `local` and `prefetch`
        continents.initialize();

        // Define element
        var elt2 = $('.tagsinput-tag-categorizing');

        // Initialize
        elt2.tagsinput({
            tagClass: function(item) {
                switch (item.continent) {
                    case 'Europe'   : return 'text-white bg-indigo-400';
                    case 'America'  : return 'text-white bg-danger';
                    case 'Australia': return 'text-white bg-success';
                    case 'Africa'   : return 'text-white bg-primary';
                    case 'Asia'     : return 'text-white bg-pink-400';
                }
            },
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'continents',
                displayKey: 'text',
                source: continents.ttAdapter()
            }
        });

        // Add data
        elt2.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
        elt2.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
        elt2.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
        elt2.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
        elt2.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });


        //
        // Methods
        //

        // Define elements
        var tagsMethods = $('.tagsinput-add-tag, .tagsinput-remove-tag, .tagsinput-remove-tags, .tagsinput-destroy, .tagsinput-refresh');

        // Initialize
        tagsMethods.tagsinput({
            itemValue: 'id',
            itemText: 'text'
        });

        // Add values
        tagsMethods.tagsinput('add', {id: 1, text: 'Amsterdam'});
        tagsMethods.tagsinput('add', {id: 2, text: 'Washington'});
        tagsMethods.tagsinput('add', {id: 3, text: 'Sydney'});

        // "Add" methos
        $('.add-tag-button').on('click', function() {
            $('.tagsinput-add-tag').tagsinput('add', {id: 4, text: 'Beijing'});
            $(this).addClass('disabled');
        });

        // "Remove" method
        $('.remove-tag-button').on('click', function() {
            $('.tagsinput-remove-tag').tagsinput('remove', {id: 3, text: 'Sydney'});
            $(this).addClass('disabled');
        });

        // "Remove all" method
        $('.remove-all-tags-button').on('click', function() {
            $('.tagsinput-remove-tags').tagsinput('removeAll');
            $(this).addClass('disabled');
        });

        // "Destroy" method
        $('.destroy-tagsinput-button').on('click', function() {
            $('.tagsinput-destroy').removeAttr('data-fouc').tagsinput('destroy');
            $(this).addClass('disabled');
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentTokenfield();
            _componentTagsinput();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    TagInputs.init();
});
