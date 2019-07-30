/* ------------------------------------------------------------------------------
 *
 *  # Internationalization - query strings
 *
 *  Demo JS code for internationalization_switch_query.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var I18nextQuery = function() {


    //
    // Setup module components
    //

    // Change language with page reload
    var _componentI18nextQuery = function() {
        if (typeof i18next == 'undefined') {
            console.warn('Warning - i18next.min.js is not loaded.');
            return;
        }


        // Configuration
        // -------------------------

        // Define main elements
        var $switchContainer = $('.language-switch'),
            englishLangClass = '.english',
            russianLangClass = '.russian',
            ukrainianLangClass = '.ukrainian',
            $localizationElement = $('body');

        // Add options
        i18next.use(i18nextXHRBackend).use(i18nextBrowserLanguageDetector).init({
            backend: {
                loadPath: '../../../../global_assets/locales/{{lng}}.json'
            },
            load: 'languageOnly',
            debug: true,
            fallbackLng: false
        },
        function (err, t) {
            
            // Initialize library
            jqueryI18next.init(i18next, $);

            // Initialize translation
            $localizationElement.localize();

            // To avoid FOUC when translation gets initialized,
            // use data-fouc attribute in all elements by default. When translation
            // is initialized, remove it from all elements
            $localizationElement.find('[data-i18n]').removeAttr('data-fouc');
        });


        // Change languages in dropdown
        // -------------------------

        // Do stuff when i18Next is initialized
        i18next.on('initialized', function() {

            // English
            if(i18next.language === "en") {

                // Set active class
                $('.dropdown-item' + englishLangClass).addClass('active');
                $('.navbar-nav-link' + englishLangClass).parent().addClass('active');

                // Change language in dropdown
                $switchContainer.children('.dropdown-toggle').html(
                    $switchContainer.find(englishLangClass).html()
                ).children('img').addClass('mr-2');
            }

            // Russian
            if(i18next.language === "ru") {

                // Set active class
                $('.dropdown-item' + russianLangClass).addClass('active');
                $('.navbar-nav-link' + russianLangClass).parent().addClass('active');

                // Change language in dropdown
                $switchContainer.children('.dropdown-toggle').html(
                    $switchContainer.find(russianLangClass).html()
                ).children('img').addClass('mr-2');
            }

            // Ukrainian
            if(i18next.language === "ua") {

                // Set active class
                $('.dropdown-item' + ukrainianLangClass).addClass('active');
                $('.navbar-nav-link' + ukrainianLangClass).parent().addClass('active');

                // Change language in dropdown
                $switchContainer.children('.dropdown-toggle').html(
                    $switchContainer.find(ukrainianLangClass).html()
                ).children('img').addClass('mr-2');
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentI18nextQuery();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    I18nextQuery.init();
});
