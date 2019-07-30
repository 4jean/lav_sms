/* ------------------------------------------------------------------------------
 *
 *  # Internationalization - fallback language
 *
 *  Demo JS code for internationalization_fallback.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var I18nextFallback = function() {


    //
    // Setup module components
    //

    // Noty.js
    var _componentNoty = function(lang) {
        if (typeof Noty == 'undefined') {
            console.warn('Warning - noty.min.js is not loaded.');
            return;
        }

        // Initialize
        new Noty({
            text: '<span class="text-uppercase">"' + lang + '"</span>' + ' locale is missing. Loading fallback language.',
            type: 'error',
            theme: 'limitless',
            layout: 'topRight',
            timeout: 2500
        }).show();
    };

    // Fallback language
    var _componentI18nextFallback = function() {
        if (typeof i18next == 'undefined') {
            console.warn('Warning - i18next.min.js is not loaded.');
            return;
        }


        // Configuration
        // -------------------------

        // Define main elements
        var $switchContainer = $('.language-switch'),
            englishLangClass = '.english',
            spanishLangClass = '.spanish',
            italianLangClass = '.italian',
            $localizationElement = $('body');

        // Add options
        i18next.use(i18nextXHRBackend).use(i18nextBrowserLanguageDetector).init({
            backend: {
                loadPath: '../../../../global_assets/locales/{{lng}}.json'
            },
            load: 'languageOnly',
            debug: true,
            fallbackLng: 'en'
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

            // Spanish
            else if(i18next.language === "es") {

                // Show error notification
                _componentNoty(i18next.language);

                // Set active class
                $('.dropdown-item' + spanishLangClass).addClass('active');
                $('.navbar-nav-link' + spanishLangClass).parent().addClass('active');

                // Change language in dropdown
                $switchContainer.children('.dropdown-toggle').html(
                    $switchContainer.find(spanishLangClass).html()
                ).children('img').addClass('mr-2');
            }

            // Italian
            else if(i18next.language === "it") {

                // Show error notification
                _componentNoty(i18next.language);

                // Set active class
                $('.dropdown-item' + italianLangClass).addClass('active');
                $('.navbar-nav-link' + italianLangClass).parent().addClass('active');

                // Change language in dropdown
                $switchContainer.children('.dropdown-toggle').html(
                    $switchContainer.find(italianLangClass).html()
                ).children('img').addClass('mr-2');
            }

            else {

                // Change language
                i18next.changeLanguage('en');

                // When changed, run translation again
                i18next.on('languageChanged', function() {
                    $localizationElement.localize();
                });
                
                // Set active class
                $('.dropdown-item' + englishLangClass).addClass('active');
                $('.navbar-nav-link' + englishLangClass).parent().addClass('active');

                // Change language in dropdown
                $switchContainer.children('.dropdown-toggle').html(
                    $switchContainer.find(englishLangClass).html()
                ).children('img').addClass('mr-2');
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentI18nextFallback();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    I18nextFallback.init();
});
