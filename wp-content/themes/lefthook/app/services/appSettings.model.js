(function() {
'use strict';

    angular
        .module('lefthook')
        .factory('appSettings', appSettings);

    function appSettings() {
        return {
            jsonRequestPageSettings: {
                home: ['hero', 'marketing', 'projects'],
                about: ['hero', 'marketing', 'projects'],
                blog: ['blog', 'marketing', 'projects']
            }
        };
    }
})();