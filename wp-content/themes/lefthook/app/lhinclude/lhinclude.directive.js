(function() {
    'use strict';

    angular
        .module('lefthook')
        .directive('lhInclude', lhInclude);

    lhInclude.$inject = ['$compile'];

    function lhInclude($compile) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            templateUrl: function(tElement, tAttrs) {
                return getTemplateUrl(tAttrs.panelName);
            },
            scope:false

        };
        return directive;

        function link(scope, element, attrs) {

        }

        function getTemplateUrl(templateType) {
            var template = '';

            switch (templateType) {
                case 'hero':
                    template = myLocalized.app + 'panels/views/hero.panel.html';
                    break;
                case 'marketing':
                    template = myLocalized.app + 'panels/views/marketing.panel.html';
                    break;
                case 'projects':
                    template = myLocalized.app + 'panels/views/projects.panel.html';
            }
            return template;
        };
    }
})();