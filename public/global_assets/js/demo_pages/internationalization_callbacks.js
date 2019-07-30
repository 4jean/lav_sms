/* ------------------------------------------------------------------------------
 *
 *  # Internationalization - callbacks
 *
 *  Demo JS code for internationalization_callbacks.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var I18nextCallbacks = function() {


    //
    // Setup module components
    //

    // Noty.js
    var _componentNoty = function(message) {
        if (typeof Noty == 'undefined') {
            console.warn('Warning - noty.min.js is not loaded.');
            return;
        }

        // Initialize
        new Noty({
            text: message,
            type: 'info',
            theme: 'limitless',
            layout: 'topRight',
            timeout: 2500
        }).show();
    };

    // Translation callbacks
    var _componentI18nextCallbacks = function() {
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

            // Notification
            _componentNoty('i18Next has been initialized. <br> The following language has beed detected: ' + '<span class="font-weight-semibold text-uppercase">' + i18next.language + '</span>');

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


        // Change languages in navbar
        // -------------------------

        // English
        $(englishLangClass).on('click', function () {

            // Change language
            i18next.changeLanguage('en');

            // When changed, run translation again
            i18next.on('languageChanged', function() {

                // Localize
                $localizationElement.localize();

                // Notification
                _componentNoty('Language has been changed to: ' + '<span class="font-weight-semibold text-uppercase">' + i18next.language + '</span>');
            });

            // Change lang in dropdown
            $switchContainer.children('.dropdown-toggle').html(
                $(englishLangClass).html()
            ).children('img').addClass('mr-2');

            // Set active class
            $switchContainer.find('.dropdown-item.active, .nav-item.active').removeClass('active');
            $('.dropdown-item' + englishLangClass).addClass('active');
            $('.navbar-nav-link' + englishLangClass).parent().addClass('active');
        });

        // Russian
        $(russianLangClass).on('click', function () {

            // Change language
            i18next.changeLanguage('ru');

            // When changed, run translation again
            i18next.on('languageChanged', function() {

                // Localize
                $localizationElement.localize();

                // Notification
                _componentNoty('Language has been changed to: ' + '<span class="font-weight-semibold text-uppercase">' + i18next.language + '</span>');
            });

            // Change lang in dropdown
            $switchContainer.children('.dropdown-toggle').html(
                $(russianLangClass).html()
            ).children('img').addClass('mr-2');
            
            // Set active class
            $switchContainer.find('.dropdown-item.active, .nav-item.active').removeClass('active');
            $('.dropdown-item' + russianLangClass).addClass('active');
            $('.navbar-nav-link' + russianLangClass).parent().addClass('active');
        });

        // Ukrainian
        $(ukrainianLangClass).on('click', function () {

            // Change language
            i18next.changeLanguage('ua');

            // When changed, run translation again
            i18next.on('languageChanged', function() {

                // Localize
                $localizationElement.localize();

                // Notification
                _componentNoty('Language has been changed to: ' + '<span class="font-weight-semibold text-uppercase">' + i18next.language + '</span>');
            });

            // Change lang in dropdown
            $switchContainer.children('.dropdown-toggle').html(
                $(ukrainianLangClass).html()
            ).children('img').addClass('mr-2');
            
            // Set active class
            $switchContainer.find('.dropdown-item.active, .nav-item.active').removeClass('active');
            $('.dropdown-item' + ukrainianLangClass).addClass('active');
            $('.navbar-nav-link' + ukrainianLangClass).parent().addClass('active');
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentI18nextCallbacks();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    I18nextCallbacks.init();
});
